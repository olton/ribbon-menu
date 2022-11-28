import React from "react";
import classNames from "classnames";

export interface RibbonTabGroupProps {
    className?: string,
    title?: string,
    children: React.ReactNode,
}

const RibbonTabGroup = ({className, children, title, ...rest}: RibbonTabGroupProps) => {
    const classes = classNames(
        'group',
        className
    )
    return (
        <div className={classes} {...rest}>
            {children}
            {title && (
                <span className="title">{title}</span>
            )}
        </div>
    )
}

export default RibbonTabGroup