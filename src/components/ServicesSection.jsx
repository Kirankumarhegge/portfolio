import React from "react";
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png"
//styles
import { About, Description, Image } from "../styles";
import styled from "styled-components";
import {fade} from "../animation"
import { useScroll } from "./useScroll";

const ServicesSection = () => {
    const [element, controls] = useScroll();
    return(
     <Services variants={fade} animate={controls} initial="hidden" ref={element}>
         <Description>
             <h2>High <span>quality</span> services</h2>
              <Cards>
                  <Card>
                      <div className="icon">
                        <img src={clock} alt="clock" />
                        <h3>Efficient</h3>
                      </div>
                      <p>Lorem ipsum dolor sit amet.</p>
                  </Card>
                  <Card>
                      <div className="icon">
                        <img src={teamwork} alt="teamwork" />
                        <h3>Teamwork</h3>
                      </div>
                      <p>Lorem ipsum dolor sit amet.</p>
                  </Card>
                  <Card>
                      <div className="icon">
                        <img src={diaphragm} alt="diaphragm" />
                        <h3>Diaphragm</h3>
                      </div>
                      <p>Lorem ipsum dolor sit amet.</p>
                  </Card>
                  <Card>
                      <div className="icon">
                        <img src={money} alt="money" />
                        <h3>Effordable</h3>
                      </div>
                      <p>Lorem ipsum dolor sit amet.</p>
                  </Card>
              </Cards>
         </Description>
         <Image>
             <img src={home2} alt="this is img"/>
         </Image>
     </Services>
    )
}

const Services =  styled(About)`
  h2{
      padding-bottom: 5rem;
  }
  p{
      width: 80%;
      padding: 1rem 0rem 4rem 0rem;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1300px){
     justify-content: center;
       margin: 2rem 0rem 5rem 0rem;
   }
`;

const Card = styled.div`
  flex-basis: 15rem;
  .icon{
      display: flex;
      align-items: center;
    h3{
     margin-left: 0.7rem;
     padding: 1rem;
    }
  }
`

export default ServicesSection;