import React from "react";
import classNames from "classnames";

export interface ImageProps {
    className?: string,
    src?: string,
}

export const Image = ({src, className}: ImageProps) => {
    const classes = classNames(className)

    return (
        <span className="icon">
            <img className={classes} src={src} />
        </span>
    )
}