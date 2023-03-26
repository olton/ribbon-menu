import classNames from "classnames";
import React, {FC} from "react";
import {Icon} from "../helpers/Icon";
import {Image} from "../helpers/Image";
import {Caption} from "../helpers/Caption";

import "./Button.less"

export interface IRibbonButtonProps {
    className?: string,
    title?: string,
    icon?: string,
    image?: string,
    caption?: string,
    children?: any,
    onClick?: any,
    hotkey?: string,
}

const RibbonButton: FC<IRibbonButtonProps> = ({hotkey = "", children, className, icon, image, caption, onClick, ...rest}) => {
    const classes = classNames(
        "ribbon-button",
        className
    )
    return (
        <button className={classes} onClick={onClick} data-hotkey={hotkey} {...rest}>
            {children}

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