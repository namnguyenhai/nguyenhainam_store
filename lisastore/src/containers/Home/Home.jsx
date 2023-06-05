import { styled } from "styled-components";
import Graphic from "images/Content/graphic.svg";
import Salva from "images/Content/salva.svg";
import Golden from "images/Content/golden.svg";
import Furni from "images/Content/furni.svg";
import Travell from "images/Content/travel.svg";
import { TextFormat } from "components/Text";
import Womenwalk from "images/Content/women_walk.svg";
const StyledHome = styled.div`
    width: 100%;
    height: 900px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .home_brand{
        width: 80%;
        display: flex;
        justify-content: space-around;
        height: 300px;
    }
    .recomend_home{
        width: 80%;
        height: 1000px;
        /* border: 1px solid; */
        display: flex;
        background-color: black;
        .recomend_left{
            width: 10%;
            height: 100%;
            /* border: 1px solid; */
            display: block;
            position: relative;
            p{
                position: absolute;
                transform: rotate(-90deg);
                bottom: 10%;
                left: 30%;
                transform-origin: 0 0;
                width: 500px;
                
            }
        }
        .recomend_center{
            width: 60%;
            height: 100%;
            .img{
                height:100%;
                width: 100%;
                object-fit: cover;
            }
        }
    }
`
export const Home = () => {
    return <StyledHome>
        <div className="home_brand">
            <img src={Graphic} alt="" />
            <img src={Salva} alt="" />
            <img src={Golden} alt="" />
            <img src={Furni} alt="" />
            <img src={Travell} alt="" />
        </div>
        <div className="recomend_home">
            <div className="recomend_left">
                <TextFormat size={"34px"} fontfam={"Roboto"} color={"#000000"} weight={400}>Explore new and popular styles</TextFormat>
            </div>
            <div className="recommend_center">
                <img src={Womenwalk} className="img" alt="" />
            </div>
            <div></div>
        </div>
    </StyledHome>
}