import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FontAwe } from "components/FontAwe";
const StyledButton = styled.button`
    width: ${props=>props.width};
    height: ${props=>props.height};
    border-radius: ${props=>props.radius};
    border: ${props=>props.border};
    background-color: ${props=>props.bgcolors};
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5%;
`
export const Button = ({width, height, radius,bgcolors, border,iconname,children,stylefontawe}) => {
    return <StyledButton width={width} height={height} radius={radius} bgcolors={bgcolors} border={border} stylefontawe={stylefontawe}>
        {/* <FontAwesomeIcon className="fontawe"  icon={iconname} /> */}
        <FontAwe color={stylefontawe.color} size={stylefontawe.size} icon={iconname}></FontAwe>
        {children}
    </StyledButton>
}