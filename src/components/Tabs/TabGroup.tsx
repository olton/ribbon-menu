import React, {FC} from "react";
import classNames from "classnames";

export interface IRibbonTabGroupProps {
    className?: string,
    title?: string,
    children: React.ReactNode,
}

const RibbonTabGroup: FC<IRibbonTabGroupProps> = ({className, children, title, ...rest}) => {
    const classes = classNames(
        'group',
        className
    )
    return (
        <div className={classes} {...rest}>
            {children}
            {title && (
                <span className="title">{title}</span>
            )}
        </div>
    )
}

export default RibbonTabGroup