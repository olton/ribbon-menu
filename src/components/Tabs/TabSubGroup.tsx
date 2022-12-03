import React, {FC} from "react";

export interface IRibbonTabSubGroupProps {
    children?: React.ReactNode
    style?: any
}

const RibbonTabSubGroup: FC<IRibbonTabSubGroupProps> = ({children, ...rest}) => {
    return (
        <div className="ribbon-sub-group" {...rest}>
            {children}
        </div>
    )
}

export default RibbonTabSubGroup