"use client"
import ObjectDisplay from "@/components/object-display";
import {ObjectProps} from "@/types";
import {useEffect, useState} from "react";
import fetchObjects from "@/lib/fetchObjects";
import styled from "styled-components";

const ListDiv = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column wrap;
    overflow-y: scroll;
`

const PageDiv = styled.div`
    width: 100%;
    height: 200vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const StyledInput = styled.input`
    padding: 5px;
    margin: 10px;
    width: 100px;
    height: 50px;
`

const StyledP = styled.p`
    font: calc(8px + .75vw) "Helvetica Neue", Helvetica, Arial, sans-serif;
    padding: 10px;
    margin: 10px;
`

const StyledP2 = styled.p`
    font: calc(12px + 1vw) "Helvetica Neue", Helvetica, Arial, sans-serif;
    padding-bottom: 5px;
`

const StyledSpan = styled.span`
    color: #676767;
`

export default function ObjectList() {
    const [numObjects, setNumObjects] = useState(15);
    const [objects, setObjects] = useState<ObjectProps[]>([]);

    useEffect(() => {
        async function loadObjects() {
            const json = await fetchObjects(numObjects);
            setObjects(json.records);
        }
        loadObjects().catch((e) => console.error(e));
    }, [numObjects]);

    return (
        <PageDiv>
            <StyledP>Number of Objects: {numObjects} <StyledSpan>(max 100)</StyledSpan></StyledP>
            <StyledInput
                type="number"
                placeholder="Number of objects"
                value={numObjects}
                max={100}
                min={1}
                onChange={(e)=>setNumObjects(Number(e.target.value))}
            />
            <StyledP>Browse the gallery!</StyledP>
            <StyledP2>&harr;</StyledP2>
            <ListDiv>
                {objects.map((o)=> {
                    return <ObjectDisplay object={o} key={o.id}/>
                })}
            </ListDiv>
        </PageDiv>
    )
}