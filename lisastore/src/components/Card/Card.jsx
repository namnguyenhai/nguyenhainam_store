import { styled } from "styled-components";
import Cardimage1 from "images/Content/cardimage1.svg";
import { ImageBackground } from "components/Image";
import { TextFormat } from "components/Text";
const StyledCard = styled.div`
    background-color: #FFFFFF;
    height: 500px;
    width: 23%;
    .card_image{
        height: 80%;
        width: 100%;
        position: relative;
        .tittle_sales{
            position: absolute;
            width: 52px;
            height: 24px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: black;
            top: 5%;
            
        }
    }
    .card_info{
        height: 20%;
        width: 100%;
        padding: 10px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        gap: 35%;
    }
    .card_flex_row{
        display: flex;
        justify-content: space-between;
    }
`

export const Card = ({}) => {
    return <StyledCard >
        <div className="card_image">
            <ImageBackground bgimage={Cardimage1} >
                <div className="tittle_sales">
                    <TextFormat color={"#FFFFFF"} size={"12px"} weight={600}>Sale</TextFormat>
                </div>
            </ImageBackground>
        </div>
        <div className="card_info">
            <div>
                <TextFormat color={"#000000"}  size={"16px"} weight={600} >Adicolor Classics Joggers</TextFormat>
            </div>
            <div className="card_flex_row">
                <div>
                    <TextFormat color={"rgba(0, 0, 0, 0.5)"} size={"16px"} weight={400}>Dress</TextFormat>
                </div>
                <div>
                    <TextFormat color={"#000000"} size={"16px"} weight={600} >$63.85</TextFormat>
                </div>
            </div>
        </div>
    </StyledCard>
}