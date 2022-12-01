import React from "react";
import classNames from "classnames";

export interface CaptionProps {
    className?: string,
    caption?: string,
}

export const Caption = ({caption, className}: CaptionProps) => {
    const classes = classNames(className)

    return (
        <span className="caption">
            <span className={classes}>{caption}</span>
        </span>
    )
}