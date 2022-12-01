import React from "react";
import classNames from "classnames";

export interface IconProps {
    className?: string,
    name?: string,
}

export const Icon = ({name, className}: IconProps) => {
    const classes = classNames(className)
    return (
        <span className="icon">
            <span className={`${name} ${classes}`}></span>
        </span>
    )
}