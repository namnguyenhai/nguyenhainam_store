import { styled } from "styled-components";

const StyledImageBackground = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${props=> props.bgimage});
    background-size: ${props => props.bg_sizestyle != "cover" ? props.bg_sizestyle : "cover"};
    background-repeat: ${props => props.bg_repeat != "no-repeat" ? props.bg_repeat : "no-repeat"};
    background-position: ${props => props.bg_position != "center" ? props.bg_position : "center"} ;
    
`

export const ImageBackground = ({bgimage, children, bg_sizestyle, bg_repeat, bg_position}) => {
    return <StyledImageBackground bgimage={bgimage} bg_sizestyle = {bg_sizestyle} bg_repeat = {bg_repeat} bg_position = {bg_position}>
        {children}
    </StyledImageBackground>
}