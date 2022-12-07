import React, {FC} from "react";
import classNames from "classnames";

export interface IIconProps {
    className?: string,
    name?: string,
}

export const Icon: FC<IIconProps> = ({name, className}) => {
    const classes = classNames(className)
    return (
        <span className="ribbon-icon">
            <span className={`${name} ${classes}`}></span>
        </span>
    )
}