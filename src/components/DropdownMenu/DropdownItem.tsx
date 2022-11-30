import React from "react";

export interface RibbonDropdownItemProps {
    className?: string,
    target?: string,
    caption?: string,
    children?: React.ReactNode,
    onClick?: any
}

const RibbonDropdownItem = ({children, className, target, caption, onClick, ...rest}: RibbonDropdownItemProps) => {
    return (
        <li className={className} {...rest}>
            <a href={target} onClick={onClick}>{caption || children}</a>
        </li>
    )
}

export default RibbonDropdownItem