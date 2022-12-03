import React, {FC} from "react";

export interface IRibbonDropdownItemProps {
    className?: string,
    target?: string,
    caption?: string,
    children?: React.ReactNode,
    onClick?: any
}

const RibbonDropdownItem: FC<IRibbonDropdownItemProps> = ({children, className, target, caption, onClick, ...rest}) => {
    return (
        <li className={className} {...rest}>
            <a href={target} onClick={onClick}>{caption || children}</a>
        </li>
    )
}

export default RibbonDropdownItem