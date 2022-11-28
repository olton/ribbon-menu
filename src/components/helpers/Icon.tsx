import React from "react";

export interface IconProps {
    className?: string,
    name?: string,
}

export const Icon = ({name, className}: IconProps) => {
    return (
        <span className="icon">
            <span className={`${name} ${className}`}></span>
        </span>
    )
}