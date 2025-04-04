"use client"

import styled from "styled-components";
import Header from "@/components/header";
import Link from "next/link";
import Image from "next/image";

const StyledP = styled.p`
    font-size: calc(10px + .5vw);
    padding: 20px 180px;
    margin: 5px 15px;
`

const StyledH1 = styled.h1`
    font-size: calc(14px + 1vw);
    margin: 5px;
    padding: 20px;
`

const ImageDiv = styled.div`
    background-color: white;
    padding: 10px;
    min-width: 550px;
    width: 30%;
    margin: auto;
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 80%;
    margin: auto;
`

const StyledLine = styled.hr`
    margin-top: 15vh;
    margin-bottom: 50px;
`

const StyledSpan = styled.span`
    text-decoration: underline;
`

const StyledLink = styled(Link)`
    border: #931e1e solid 3px;
    padding: 10px;
    width: 150px;
    margin: 80px auto 0 auto;
    border-radius: 10px;
    font-size: calc(16px + .5vw);
    color: #ca3e3e;

    &:hover {
        background-color: #931e1e;
        transform: rotate(6deg) scale(1.05);
        transition: all 0.4s
    }
    
    &:active {
        transform: scale(0.85);
        transition: all 0.1s
    }
`

const StyledA = styled.a`
    color: #ca3e3e;
`

const Image2 = styled(Image)`
    width: 500px;
    height: auto;
`

export default function Home() {
    return (
        <>
            <Header/>
            <Wrapper>
                <div>
                    <StyledH1>About this page:</StyledH1>
                    <StyledP>Have you ever had the urge to wander an art museum, but they were all <StyledSpan>
                        too far away</StyledSpan>?
                        <br/><br/>Thanks to the <StyledA
                            href="https://github.com/harvardartmuseums/api-docs/tree/master"
                            target="_blank">Harvard Art Museums API</StyledA>
                        , now you can view the art from the comfort of your own home! Explore the gallery to
                        your heart&apos;s content, with new things to see every time you visit.
                        All credit for images and their related information goes to Harvard University.
                    </StyledP>
                </div>
                <StyledLink href="/browse" >Browse Now!</StyledLink>
                <StyledLine/>
                <StyledP>Powered by:</StyledP>
                <ImageDiv>
                    <Image2
                        src={"https://ids.lib.harvard.edu/ids/iiif/437958013/full/!800,800/0/default.jpg"}
                        alt="Harvard Art Museums Logo"
                    />
                </ImageDiv>
            </Wrapper>
        </>
    )
}
