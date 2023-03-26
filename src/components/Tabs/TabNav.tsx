import React, {FC} from "react";
import classNames from "classnames";

export interface IRibbonTabNavProps {
    staticTab: boolean,
    label: string,
    active: boolean,
    className?: string,
    onClick: any,
    index: number,
    mode?: string,
    hotkey?: string,
}

const RibbonTabNav: FC<IRibbonTabNavProps> = ({hotkey = "", staticTab, label, active, className, onClick, index}) => {
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
               href={`#${label.toLowerCase()}`} data-hotkey={hotkey}>
                {label}
            </a>
        </li>
    )
}

export default RibbonTabNav