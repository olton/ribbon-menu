import React, {cloneElement, Children, FC} from "react";
import classNames from "classnames";
import RibbonButton from "../Button";
import RibbonDropdown from "../Dropdown";
import RibbonIconButton from "../IconButton";

import "./SplitButton.less"

export interface IRibbonSplitButtonProps {
    children: React.ReactNode,
    caption?: string,
    icon?: string,
    image?: string,
    onClick?: any,
    buttonClassName?: string,
    hotkey?: string,
}

const RibbonSplitButton: FC<IRibbonSplitButtonProps> = ({hotkey = "", children, caption, icon, image, onClick, buttonClassName, ...rest}) => {
    const [menu] = Children.toArray(children)
    const classes = classNames("ribbon-split-button")
    const classesButton = classNames("ribbon-main", buttonClassName)

    return (
        <div className={classes}>
            <RibbonButton icon={icon} image={image} className={classesButton} onClick={onClick} {...rest} data-hotkey={hotkey}/>

            <RibbonDropdown>
                <RibbonIconButton caption={caption} className="ribbon-split dropdown-toggle"/>

                {// @ts-ignore
                    menu && cloneElement(menu, {
                    className: `ribbon-dropdown`
                })}
            </RibbonDropdown>
        </div>
    )
}

export default RibbonSplitButton