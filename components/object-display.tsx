import styled from "styled-components";
import {ImageProps, ObjectProps, PeopleProps} from "@/types";
import ObjectImage from "@/components/object-image";

const ObjectDisplayDiv = styled.div`
    margin: 10px;
    padding: 20px;
    background-color: #b6b4b3;
    color: black;
    border-radius: 10px;
    border: #4a4a4a solid 2px;
    height: fit-content;
    width: 23%;
    text-align: center;

    &:hover {
        box-shadow: 0 0 15px rgb(30, 30, 30);
        transition: all 0.3s ease;
        transform: scale(1.011);
    }

    &
`

const StyledH3 = styled.h3`
    padding-bottom: 10px;
`

const StyledP = styled.p`
    padding-bottom: 10px;
`

export default function ObjectDisplay({object}:{object:ObjectProps}) {
    const images : ImageProps[] = object.images.slice(0, 1);
    const people : PeopleProps[] = object.people;
    let id = 0;

    return (
        <ObjectDisplayDiv>
            <StyledH3>{object.title}</StyledH3>
            <StyledP>{object.classification}</StyledP>
            {images?.map((i)=> {
                return <ObjectImage image={i} key={i.idsid}/>
            })}
            <p>{object.description}</p>
            {people?.map((p)=> {
                const newId = id++; //person ids can appear multiple times I'm iterating instead
                return <p key={newId}>{p.role}: {p.name}</p>
            })}
        </ObjectDisplayDiv>
    )
}