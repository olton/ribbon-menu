import classNames from "classnames";
import React from "react";
import {Icon} from "../helpers/Icon";
import {Image} from "../helpers/Image";

import "./ToolButton.css"

export interface RibbonToolButtonProps {
    className?: string,
    icon?: string,
    image?: string,
    children?: any
}

const RibbonToolButton = ({className, icon, image, ...rest}: RibbonToolButtonProps) => {
    const classes = classNames(
        "ribbon-tool-button",
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
        </button>
    )
}

export default RibbonToolButton