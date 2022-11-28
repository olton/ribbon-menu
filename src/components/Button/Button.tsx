import classNames from "classnames";
import React from "react";
import {Icon} from "../helpers/Icon";
import {Image} from "../helpers/Image";
import {Caption} from "../helpers/Caption";

import "./Button.css"

export interface RibbonButtonProps {
    className?: string,
    icon?: string,
    image?: string,
    caption?: string,
    children?: any
}

const RibbonButton = ({className, icon, image, caption, ...rest}: RibbonButtonProps) => {
    const classes = classNames(
        "ribbon-button",
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
                <Caption caption={caption}/>
            )}
        </button>
    )
}

export default RibbonButton