import React from "react";

export interface RibbonDropdownCheckItemProps {
    className?: string,
    target?: string,
    caption?: string,
    children?: React.ReactNode,
    checked?: boolean
}

const RibbonDropdownCheckItem = ({checked, children, className, target, caption, ...rest}: RibbonDropdownCheckItemProps) => {
    return (
        <li className={className + (children? ' checked ' : '')} {...rest}>
            <a href={target}>{caption || children}</a>
        </li>
    )
}

export default RibbonDropdownCheckItem