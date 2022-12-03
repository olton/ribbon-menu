import classNames from "classnames";
import React, {FC} from "react";
import {Icon} from "../helpers/Icon";
import {Image} from "../helpers/Image";
import {Caption} from "../helpers/Caption";

import "./IconButton.css"

export interface IRibbonIconButtonProps {
    className?: string,
    icon?: string,
    image?: string,
    caption?: string,
    children?: any,
    onClick?: any
}

const RibbonIconButton: FC<IRibbonIconButtonProps> = ({className, icon, image, caption, onClick, ...rest}) => {
    const classes = classNames(
        "ribbon-icon-button",
        className
    )
    return (
        <button className={classes} {...rest} onClick={onClick}>
            {icon && (
                <Icon name={icon} />
            )}

            {image && (
                <Image src={image} />
            )}

            {caption && (
                <Caption caption={caption} />
            )}
        </button>
    )
}

export default RibbonIconButton