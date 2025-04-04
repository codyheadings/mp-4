"use client"
import Link from "next/link";
import styled from "styled-components";

const StyledLink = styled(Link)`
    margin: 20px;
    padding: 10px;
    font-size: calc(10px + .5vw);
`

const StyledH2 = styled.h2`
    margin: 15px;
    font-size: calc(10px + 1vw);
`

const StyledHeader = styled.header`
    display: flex;
    flex-direction: row;
`

const StyledNav = styled.nav`
    display: flex;
    flex-direction: row;
    margin-left: auto;
    margin-right: 0;
`

export default function Header() {
    return (
        <StyledHeader>
            <StyledH2>Digital Art Gallery</StyledH2>
            <StyledNav>
                <StyledLink href="/" >Home</StyledLink>
                <StyledLink href="/browse" >Browse</StyledLink>
            </StyledNav>
        </StyledHeader>
    )
}