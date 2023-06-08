import { styled } from "styled-components";
import { ImageBackground } from "components/Image";
import { TextFormat } from "components/Text";

const StyledCard = styled.div`
    background-color: #FFFFFF;
    /* height: 500px;
    width: 23%; */
    height: ${props => props.height};
    width: ${props => props.width};
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
            /* background-color: black; */
            background-color: ${props => props.status === "hot" ? "#ff0000" : (props.status === "sales" ? "#000000" : null)};
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
const data = [
    {
        status: "sales",
        cardimage: "",
        cardinfo: {
            nameitem: "Adicolor classiscs joggers",
            typeitem: "dress",
            priceitem: "$2"
        }
    }
]
export const Card = ({ width, height, cardimage, cardinfo, status }) => {
    
    return <StyledCard height={height} width={width} status={status} cardinfo={cardinfo} cardimage={cardimage}>
        <div className="card_image">
            <ImageBackground bgimage={cardimage} >
                {
                    status ?
                        <div className="tittle_sales">
                            <TextFormat color={"#FFFFFF"} size={"12px"} weight={600}>{status}</TextFormat>
                        </div> : null
                }
            </ImageBackground>
        </div>
        {
            cardinfo ? 
                <div className="card_info">
                    <div>
                        <TextFormat color={"#000000"} size={"16px"} weight={600} >{cardinfo["nameitem"]}</TextFormat>
                    </div>
                    <div className="card_flex_row">
                        <div>
                            <TextFormat color={"rgba(0, 0, 0, 0.5)"} size={"16px"} weight={400}>{cardinfo["typeitem"]}</TextFormat>
                        </div>
                        <div>
                            <TextFormat color={"#000000"} size={"16px"} weight={600} >{cardinfo["priceitem"]}</TextFormat>
                        </div>
                    </div>
                </div> : null
        }
    </StyledCard>
}