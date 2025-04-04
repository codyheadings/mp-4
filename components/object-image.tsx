import {ImageProps} from "@/types";
import styled from "styled-components";
import {Suspense} from "react";

const ObjectImageTag = styled.img`
`

export default function ObjectImage({image}:{image:ImageProps}) {
    return (
        <Suspense fallback={<div>Loading Image...</div>}>
            <ObjectImageTag
                src={`https://ids.lib.harvard.edu/ids/view/${image.idsid}`}
                alt={image.alttext === null ? `Image of titled work` : image.alttext}
                width={"90%"}
                height={"auto"}
                />
        </Suspense>
    )
}