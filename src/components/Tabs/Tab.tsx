import React, {FC} from "react";
import classNames from "classnames";

export interface IRibbonTabProps {
    active?: boolean,
    className?: string,
    mode?: 'static' | 'default',
    label?: string,
    children?: React.ReactNode
}

const RibbonTab: FC<IRibbonTabProps> = ({active, className, children}) => {
    const classes = classNames(
        `ribbon-section`,
        className,
        {active}
    )

    return (
        <div className={classes}>
            {children}
        </div>
    )
}

export default RibbonTab