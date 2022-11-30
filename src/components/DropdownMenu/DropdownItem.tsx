import React from "react";

export interface RibbonDropdownItemProps {
    className?: string,
    target?: string,
    caption?: string,
    children?: React.ReactNode
}

const RibbonDropdownItem = ({children, className, target, caption, ...rest}: RibbonDropdownItemProps) => {
    return (
        <li className={className} {...rest}>
            <a href={target}>{caption || children}</a>
        </li>
    )
}

export default RibbonDropdownItem