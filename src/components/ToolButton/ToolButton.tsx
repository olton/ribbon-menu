import classNames from "classnames";
import React, {FC} from "react";
import {Icon} from "../helpers/Icon";
import {Image} from "../helpers/Image";

import "./ToolButton.css"

export interface IRibbonToolButtonProps {
    className?: string,
    icon?: string,
    image?: string,
    children?: any
    caption?: string,
    onClick?: any
}

const RibbonToolButton: FC<IRibbonToolButtonProps> = ({className, caption = '', icon, image, onClick, ...rest}) => {
    const classes = classNames(
        "ribbon-tool-button",
        className
    )
    return (
        <button className={classes} title={caption} {...rest} onClick={onClick}>
            {icon && (
                <Icon name={icon} />
            )}

            {image && (
                <Image src={image} />
            )}
        </button>
    )
}

export default RibbonToolButton