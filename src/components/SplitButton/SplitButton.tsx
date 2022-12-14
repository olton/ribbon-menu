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
    onClick?: any
}

const RibbonSplitButton: FC<IRibbonSplitButtonProps> = ({children, caption, icon, image, onClick, ...rest}) => {
    const [menu] = Children.toArray(children)
    const classes = classNames("ribbon-split-button")

    return (
        <div className={classes}>
            <RibbonButton icon={icon} image={image} className="ribbon-main" onClick={onClick} {...rest}/>

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