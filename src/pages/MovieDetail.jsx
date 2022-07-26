import React, {useState, useEffect} from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import {MovieState} from "../movieState";
//animation
import { motion } from "framer-motion"; 
import {pageAnimation} from "../animation";

const MovieDetail = () => {
    const history = useHistory();
    const url = history.location.pathname;
    const [movies, setMovies] = useState(MovieState);
    const [movie, setMovie] = useState(null);
 
    useEffect(() => {
        const currentMovie = movies.filter((stateMovie) => stateMovie.url === url)
        setMovie(currentMovie[0])
    },[movies , url])

    return(
        <div>
        {movie && (
        <Details exit="exit" variants={pageAnimation} initial="hidden" animate="show">
            <HeadLine>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt="mana" />
            </HeadLine>
            <Awards>
            {movie.awards.map((award) => (
                <Award
                  title={award.title}
                  description={award.description} 
                  key={award.title}
                  />
            ))}
            </Awards>
            <ImageDisplay>
                <img src={movie.secondaryImg} alt="second img" /> 
            </ImageDisplay>
        </Details>
        )}
        </div>
    )
}

const Details = styled(motion.div)`
    color: white;
`;

const HeadLine = styled.div`
    min-height: 90vh;
    padding-top: 20vh;
    position: relative;
    h2{
        position: absolute;
        top: 10%;
        left: 50%;
        transform: translate(-50%, -10%);
    }
    img{
        width: 100%;
        height: 90vh;
        object-fit: cover;
    }
`;

const Awards = styled.div`
   min-height: 100vh;
   display: flex;
   margin: 2rem 3rem;
   align-items: center;
   justify-content: space-around;
   @media (max-width: 1500px){
     display: block;
     margin: 2rem 2rem;
   }
 `;

 const AwardStyle = styled.div`
    padding: 5rem;
    h3{
        font-size: 1.4rem;
    }
    p{
        font-size: 0.89rem;
    }
    .line{
        width: 100%;
        min-height: 0.3rem;
        background: #23d997;
        margin: 1rem 0rem;
    }
 `;

 const ImageDisplay = styled.div`
   min-height: 70vh;
   img{
      width: 100%;
      height: 100%;
      object-fit: cover;
      margin-bottom: 1vh;
   }
 `;

const Award = ({title, description}) => {
    return(
        <AwardStyle>
         <h3>{title}</h3>
         <div className="line"></div>
             <p>{description}</p>
        </AwardStyle>
    )
}

export default MovieDetail;