import { styled } from "styled-components";


import { TextFormat } from "components/Text";
import { ImageBackground } from "components/Image";
import { Item } from "components/Item";
import { Button } from "components/Button";
import { Card } from "components/Card";
import { MultipleItems } from "components/Item";
import Graphic from "images/Content/graphic.svg";
import Salva from "images/Content/salva.svg";
import Golden from "images/Content/golden.svg";
import Furni from "images/Content/furni.svg";
import Travell from "images/Content/travel.svg";
import Womenwalk from "images/Content/women_walk.svg";
import MenHandBag from "images/Content/men_handbag.svg";
import OrangeHair from "images/Content/orange_hair.svg";
import WhiteTShirt from "images/Content/white_tshirt.svg";
import RedClothes from "images/Content/red_clothes.svg";
import RedWoman from "images/Content/redwomen.svg";
import Zara1 from "images/Content/zara1.svg";
import Zara2 from "images/Content/zara2.svg";
import Cardimage1 from "images/Content/cardimage1.svg";


import { useDispatch, useSelector } from "react-redux";
const StyledHome = styled.div`
    width: 100%;
    /* height: 900px; */
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 100px;
    .home_brand{
        width: 80%;
        display: flex;
        justify-content: space-between;
        align-items:  center;
        height: 300px;
        /* .home_brand_div{
            width: 15%;
            height: 50%;
            background-color: black;
        } */
    }
    .home_recomend{
        width: 80%;
        height: 700px;
        display: flex;
        gap: 2%;

        .recomend_left{
            width: 10%;
            height: 100%;
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
            width: 50%;
            height: 100%;

            /* background-image: url(${Womenwalk});
            background-size: cover;
            background-repeat: no-repeat; */
            /* img{
                width: 100%;
                height: 100%;
                object-fit: cover;
            } */
            
        }
        .recomend_right{
            width: 40%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            gap: 2%;
            .flex_row_recom{
                display: flex;
                justify-content: space-between;
                width: 100%;
                height: 50%;
                gap: 2%;
            }
            .topleft{
                width: 50%;
                height: 100%;
            }
            .topright{
                width: 50%;
                height: 100%;
            }
            .bottomleft{
                width: 50%;
                height: 100%;
            }
            .bottomright{
                width: 50%;
                height: 100%;
            }
        }
    }
    .home_subscribe{
        width: 80%;
    }
    .home_banner{
        width: 100%;
        height: 800px;
        background-image: url(${Zara1}),url(${RedWoman});
        background-color: black;
        background-position: top 50px right 0px, center;
        background-repeat: no-repeat;
        background-size: auto,cover;
        position: relative;

        .banner_content{

            position: absolute;
            height: 50%;
            width: 30%;
            right: 15%;
            top: 30%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 20%;
        }
    }
    .home_bestseller{
        width: 80%;
        height: 500px;
    }
    .home_follow_products{
        width: 100%;
        height: 500px;
        background-color: #F0F0F0;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 30px;
    }


`
export const Home = () => {

    const cardval = useSelector((state) => state.card);
    const cardarr = cardval["listdata"];
    console.log("carvalis:",cardval)
    console.log("acess:",cardval["listdata"]);
    console.log("array",Object.values(cardval));
    return <StyledHome>
        <div className="home_brand">

            <img src={Graphic} alt="" />
            {/* <Card cardimage={Graphic} width={"100%"} height={"100%"}></Card> */}
            <img src={Salva} alt="" />
            <img src={Golden} alt="" />
            <img src={Furni} alt="" />
            <img src={Travell} alt="" />
        </div>
        <div className="home_recomend">
            <div className="recomend_left">
                <TextFormat size={"34px"} fontfam={"Roboto"} color={"#000000"} weight={400}>Explore new and popular styles</TextFormat>
            </div>
            <div className="recomend_center">

                <ImageBackground bgimage={Womenwalk}></ImageBackground>
            </div>
            <div className="recomend_right">
                <div className="flex_row_recom">
                    <div className="topleft">
                        <ImageBackground bgimage={MenHandBag}></ImageBackground>
                    </div>
                    <div className="topright">
                        <ImageBackground bgimage={OrangeHair}></ImageBackground>
                    </div>
                </div>
                <div className="flex_row_recom">
                    <div className="bottomleft">
                        <ImageBackground bgimage={RedClothes}></ImageBackground>
                    </div>
                    <div className="bottomright">
                        <ImageBackground bgimage={WhiteTShirt}></ImageBackground>
                    </div>
                </div>
            </div>
        </div>
        <div className="home_subscribe">
            <Item tittles={"Or subscribe to the newsletter"} buttonname={"Filter"}>
                {/* <Card cardimage={Cardimage1} status={"hot"} cardinfo={{nameitem:"Calo", typeitem:"Dress", priceitem:"$69"}} height={"500px"} width={"23%"} ></Card>
                <Card cardimage={Cardimage1} status={"hot"} cardinfo={{nameitem:"Calo", typeitem:"Dress", priceitem:"$69"}} height={"500px"} width={"23%"} ></Card>
                <Card cardimage={Cardimage1} status={"hot"} cardinfo={{nameitem:"Calo", typeitem:"Dress", priceitem:"$69"}} height={"500px"} width={"23%"} ></Card>
                <Card cardimage={Cardimage1} status={"hot"} cardinfo={{nameitem:"Calo", typeitem:"Dress", priceitem:"$69"}} height={"500px"} width={"23%"} ></Card>
                <Card cardimage={Cardimage1} status={"hot"} cardinfo={{nameitem:"Calo", typeitem:"Dress", priceitem:"$69"}} height={"500px"} width={"23%"} ></Card>
                <Card cardimage={Cardimage1} status={"hot"} cardinfo={{nameitem:"Calo", typeitem:"Dress", priceitem:"$69"}} height={"500px"} width={"23%"} ></Card>
                <Card cardimage={Cardimage1} status={"hot"} cardinfo={{nameitem:"Calo", typeitem:"Dress", priceitem:"$69"}} height={"500px"} width={"23%"} ></Card>
                <Card cardimage={Cardimage1} status={"hot"} cardinfo={{nameitem:"Calo", typeitem:"Dress", priceitem:"$69"}} height={"500px"} width={"23%"} ></Card> */}

                {
                    cardarr.map((values,i) => (<Card key={i} cardimage={values.cardimage} status={"hot"} cardinfo={{nameitem:"Calo", typeitem:"Dress", priceitem:"$69"}} height={"500px"} width={"23%"} ></Card>))
                }
            </Item>
        </div>
        <div className="home_banner">
            <div className="banner_content">
                <img src={Zara2} alt="" />
                <TextFormat color={"#FF6F61"} size={"26px"} weight={400}>
                    Lustrous yet understated. The new evening wear collection exclusively offered at the reopened Giorgio Armani boutique in Los Angeles.
                </TextFormat>
                <Button bgcolors={"#FFFFFF"} border={"1px solid #FFFFFF"} height={"72px"} width={"237px"} >
                    <TextFormat color={"1E2832"} size={"29px"} weight={400}>See Collection</TextFormat>
                </Button>
            </div>
        </div>
        <div className="home_bestseller">
            <MultipleItems></MultipleItems>
        </div>
        <div className="home_follow_products">
            <TextFormat color={"#000000"} size={"50px"} weight={500}>Follow products and discounts on Instagram</TextFormat>
            <Card cardimage={Cardimage1} status={"hot"} cardinfo={{nameitem:"Calo", typeitem:"Dress", priceitem:"$69"}} height={"500px"} width={"23%"} ></Card>
            <TextFormat color={"#FF6F61"} size={"28px"} weight={500}>@lisa.official</TextFormat>
        </div>

    </StyledHome>
}