import React, {Children, cloneElement, useState} from "react";
import classNames from "classnames";

import "./Dropdown.css"

export interface RibbonDropdownProps {
    children: React.ReactNode
    open: boolean
}

const RibbonDropdown = (props: RibbonDropdownProps) => {
    const classes = classNames(
        'dropdown'
    )
    const {children, open} = props
    const [toggle, menu] = Children.toArray(children)
    const [isOpen, setOpenState] = useState(false)

    return (
        <div className={classes}>
            {/*@ts-ignore*/
                cloneElement(toggle, {
                onClick: setOpenState(!isOpen)
            })}

            <nav className={isOpen ? 'open' : ''}>
                {menu}
            </nav>
        </div>
    )
}

export default RibbonDropdown