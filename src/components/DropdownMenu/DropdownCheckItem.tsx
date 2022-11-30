import React, {useState} from "react";

export interface RibbonDropdownCheckItemProps {
    className?: string,
    target?: string,
    caption?: string,
    children?: React.ReactNode,
    checked?: boolean
}

const RibbonDropdownCheckItem = ({checked, children, className, target, caption, ...rest}: RibbonDropdownCheckItemProps) => {
    const [checkState, setCheckState] = useState(checked)

    return (
        <li className={className + (children? ' checked ' : '')} {...rest} onClick={ (e) => {
                // @ts-ignore
                const classes = e.target.parentNode.className.split(" ")
                setCheckState(!classes.includes("checked"))
                e.preventDefault()
            }
        }>
            <a href={target}>{caption || children}</a>
        </li>
    )
}

export default RibbonDropdownCheckItem