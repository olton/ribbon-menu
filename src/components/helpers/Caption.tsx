import React, {FC} from "react";
import classNames from "classnames";

export interface ICaptionProps {
    className?: string,
    caption?: string,
}

export const Caption: FC<ICaptionProps> = ({caption, className}) => {
    const classes = classNames(className)

    return (
        <span className="caption">
            <span className={classes}>{caption}</span>
        </span>
    )
}