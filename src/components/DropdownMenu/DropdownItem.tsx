import React, {FC} from "react";

export interface IRibbonDropdownItemProps {
    className?: string,
    target?: string,
    caption?: string,
    children?: React.ReactNode,
    onClick?: any,
    hotkey?: string,
}

const RibbonDropdownItem: FC<IRibbonDropdownItemProps> = ({hotkey = "", children, className, target, caption, onClick, ...rest}) => {
    return (
        <li className={className} {...rest}>
            <a href={target} onClick={onClick} data-hotkey={hotkey}>{caption || children}</a>
        </li>
    )
}

export default RibbonDropdownItem