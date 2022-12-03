import classNames from "classnames";
import React, {FC} from "react";
import {Icon} from "../helpers/Icon";
import {Image} from "../helpers/Image";
import {Caption} from "../helpers/Caption";

import "./Button.css"

export interface IRibbonButtonProps {
    className?: string,
    title?: string,
    icon?: string,
    image?: string,
    caption?: string,
    children?: any,
    onClick?: any
}

const RibbonButton: FC<IRibbonButtonProps> = ({className, icon, image, caption, onClick, ...rest}) => {
    const classes = classNames(
        "ribbon-button",
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
                <Caption caption={caption}/>
            )}
        </button>
    )
}

export default RibbonButton