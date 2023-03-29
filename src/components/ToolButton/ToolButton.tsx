import classNames from "classnames";
import React, {FC} from "react";
import {Icon} from "../helpers/Icon";
import {Image} from "../helpers/Image";

import "./ToolButton.less"

export interface IRibbonToolButtonProps {
    className?: string,
    icon?: string,
    image?: string,
    children?: any
    title?: string,
    onClick?: any,
    hotkey?: string,
}

const RibbonToolButton: FC<IRibbonToolButtonProps> = ({hotkey = "", children, className, title = '', icon, image, onClick, ...rest}) => {
    const classes = classNames(
        "ribbon-tool-button",
        className
    )
    return (
        <button className={classes} title={title} {...rest} onClick={onClick} data-hotkey={hotkey}>
            {children}

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