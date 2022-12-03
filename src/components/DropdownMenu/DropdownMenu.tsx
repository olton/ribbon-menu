import React, {FC} from "react";
import classNames from "classnames";

import "./DropdownMenu.css"

export interface IRibbonDropdownMenuProps {
    children: React.ReactNode,
    className?: string
}

const RibbonDropdownMenu: FC<IRibbonDropdownMenuProps> = ({children, className}) => {
    const classes = classNames("ribbon-dropdown", className)
    return (
        <ul className={classes}>
            {children}
        </ul>
    )
}

export default RibbonDropdownMenu