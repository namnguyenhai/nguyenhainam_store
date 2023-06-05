import { styled} from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const StyledFontAwe = styled(FontAwesomeIcon)`
    color: ${props=>props.width} ;
    font-size: ${props=>props.size};
`

export const FontAwe = ({color,size, icon}) => {
    return <StyledFontAwe color={color} size={size} icon={icon}></StyledFontAwe>
}