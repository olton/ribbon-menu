import React, {cloneElement, Children} from "react";
import classNames from "classnames";
import RibbonButton from "../Button";
import RibbonDropdown from "../Dropdown";
import RibbonIconButton from "../IconButton";

import "./SplitButton.css"

export interface RibbonSplitButtonProps {
    children: React.ReactNode,
    caption?: string,
    icon?: string,
    image?: string,
}

const RibbonSplitButton = ({children, caption, icon, image, ...rest}: RibbonSplitButtonProps) => {
    const [menu] = Children.toArray(children)
    const classes = classNames("ribbon-split-button")


    return (
        <div className={classes}>
            <RibbonButton icon={icon} image={image} className="ribbon-main" {...rest}/>

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