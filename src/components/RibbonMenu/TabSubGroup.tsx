import React from "react";

export interface RibbonTabSubGroupProps {
    children: React.ReactNode
}

const RibbonTabSubGroup = ({children, ...rest}: RibbonTabSubGroupProps) => {
    return (
        <div className="ribbon-sub-group" {...rest}>
            {children}
        </div>
    )
}

export default RibbonTabSubGroup