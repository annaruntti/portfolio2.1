import * as React from "react";

interface BlockProps {
    Title: string
    Image: string
    Body: string
}

export const Block: React.FC<BlockProps> =
    ({ Title, Image, Body }) => (
        <div className="block">
            <div className="title">{Title}</div>
            <div className="image">
                <img className="block-image" src={Image} alt="" />
            </div>
            <div className="body">{Body}</div>
        </div>
    )