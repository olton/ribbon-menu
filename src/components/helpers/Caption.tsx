import React from "react";

export interface CaptionProps {
    className?: string,
    caption?: string,
}

export const Caption = ({caption, className}: CaptionProps) => {
    return (
        <span className="caption">
            <span className={className}>{caption}</span>
        </span>
    )
}