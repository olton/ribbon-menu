import classNames from "classnames";
import React from "react";
import {Icon} from "../helpers/Icon";
import {Image} from "../helpers/Image";
import {Caption} from "../helpers/Caption";

import "./IconButton.css"

export interface RibbonIconButtonProps {
    className?: string,
    icon?: string,
    image?: string,
    caption?: string,
    children?: any
}

const RibbonIconButton = ({className, icon, image, caption, ...rest}: RibbonIconButtonProps) => {
    const classes = classNames(
        "ribbon-icon-button",
        className
    )
    return (
        <button className={classes} {...rest}>
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