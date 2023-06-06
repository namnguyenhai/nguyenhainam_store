import { styled } from "styled-components";

const StyledImageBackground = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${props=> props.bgimage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position:center ;
    
`

export const ImageBackground = ({bgimage,children}) => {
    return <StyledImageBackground bgimage={bgimage}>
        {children}
    </StyledImageBackground>
}