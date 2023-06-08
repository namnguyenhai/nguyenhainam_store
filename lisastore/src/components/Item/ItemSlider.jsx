import React from "react";
import Slider from "react-slick";
import { styled } from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Item } from "./Item";
import { Card } from "components/Card";
import Cardimage1 from "images/Content/cardimage1.svg";
const StyledCouseralItem = styled(Slider)`

  .slick-prev, .slick-next {
    box-sizing: border-box;
    padding: 20px;
    font-size: 15px !important;
  }

  .slick-prev:before, .slick-next:before  {
    content: '' !important;
  }


`
export const MultipleItems = () => {
  function PrevArrow(props) {
    const { className, onClick } = props;
    return (
      <div
        className={className}
        onClick={onClick}
      >
        <FontAwesomeIcon icon={faChevronLeft} color="#000"
          size="xl" />
      </div>
    );
  }
  function NextArrow(props) {
    const { className, onClick } = props;
    return (
      <div
        className={className}
        onClick={onClick}
      >
        <FontAwesomeIcon icon={faChevronRight} color="#000"
          size="xl" />
      </div>
    );
  }

  const settings = {
    centerMode: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return <StyledCouseralItem  {...settings}>
      <Card cardimage={Cardimage1} status={"hot"} cardinfo={{nameitem:"Calo", typeitem:"Dress", priceitem:"$69"}} height={"500px"} width={"23%"} ></Card>
      <Card cardimage={Cardimage1} status={"hot"} cardinfo={{nameitem:"Calo", typeitem:"Dress", priceitem:"$69"}} height={"500px"} width={"23%"} ></Card>
      <Card cardimage={Cardimage1} status={"hot"} cardinfo={{nameitem:"Calo", typeitem:"Dress", priceitem:"$69"}} height={"500px"} width={"23%"} ></Card>
      <Card cardimage={Cardimage1} status={"hot"} cardinfo={{nameitem:"Calo", typeitem:"Dress", priceitem:"$69"}} height={"500px"} width={"23%"} ></Card>
      <Card cardimage={Cardimage1} status={"hot"} cardinfo={{nameitem:"Calo", typeitem:"Dress", priceitem:"$69"}} height={"500px"} width={"23%"} ></Card>
      <Card cardimage={Cardimage1} status={"hot"} cardinfo={{nameitem:"Calo", typeitem:"Dress", priceitem:"$69"}} height={"500px"} width={"23%"} ></Card>
      <Card cardimage={Cardimage1} status={"hot"} cardinfo={{nameitem:"Calo", typeitem:"Dress", priceitem:"$69"}} height={"500px"} width={"23%"} ></Card>
      <Card cardimage={Cardimage1} status={"hot"} cardinfo={{nameitem:"Calo", typeitem:"Dress", priceitem:"$69"}} height={"500px"} width={"23%"} ></Card>
      {/* <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card> */}

  </StyledCouseralItem>
}
