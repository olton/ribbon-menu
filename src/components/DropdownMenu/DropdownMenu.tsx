import React from "react";
import classNames from "classnames";

import "./DropdownMenu.css"

export interface RibbonDropdownMenuProps {
    children: React.ReactNode,
    className?: string
}

const RibbonDropdownMenu = ({children, className}: RibbonDropdownMenuProps) => {
    const classes = classNames("ribbon-dropdown", className)
    return (
        <ul className={classes}>
            {children}
        </ul>
    )
}

export default RibbonDropdownMenu