import React, {FC} from "react";
import classNames from "classnames";

export interface IImageProps {
    className?: string,
    src?: string,
}

export const Image: FC<IImageProps> = ({src, className}) => {
    const classes = classNames(className)

    return (
        <span className="icon">
            <img className={classes} src={src} />
        </span>
    )
}