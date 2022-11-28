import React from "react";
import classNames from "classnames";

export interface RibbonTabNavProps {
    staticTab: boolean,
    label: string,
    active: boolean,
    className?: string,
    onClick: any,
    index: number
}

const RibbonTabNav = ({staticTab, label, active, className, onClick, index}: RibbonTabNavProps) => {
    const classes = classNames(
        className,
        {static: staticTab},
        {active}
    )

    return (
        <li className={classes} onClick={onClick}>
            <a data-label={label.toLowerCase()}
               data-static={staticTab}
               data-key={index}
               href={`#${label.toLowerCase()}`}>
                {label}
            </a>
        </li>
    )
}

export default RibbonTabNav