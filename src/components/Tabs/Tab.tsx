import React from "react";
import classNames from "classnames";

export interface RibbonTabProps {
    active: boolean,
    className?: string,
    label?: string,
    children: React.ReactNode
}

const RibbonTab = ({active, className, children}: RibbonTabProps) => {
    const classes = classNames(
        `ribbon-section`,
        className,
        {active}
    )

    return (
        <div className={classes}>
            {children}
        </div>
    )
}

export default RibbonTab