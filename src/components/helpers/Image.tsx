import React from "react";

export interface ImageProps {
    className?: string,
    src?: string,
}

export const Image = ({src, className}: ImageProps) => {
    return (
        <span className="icon">
            <img className={className} src={src} />
        </span>
    )
}