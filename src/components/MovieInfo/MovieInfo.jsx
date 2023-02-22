import { useState } from 'react';
import {
  MovieWrapper,
  MovieDescription,
  Poster,
  Image,
  MovieTitle,
  MovieScore,
  MovieDetail,
  Accent,
} from './MovieInfo.styled';
import { Link } from 'react-router-dom';
import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';

const MovieInfo = ({ title, id, score, overview, img, genres }) => {
  const [btn, setBtn] = useState(true);
  const [btnRewievs, setBtnRewievs] = useState(true);
  const onBtnCkick = () => {
    setBtn(!btn);
  };
  const onBtnRewievsCkick = () => {
    setBtnRewievs(!btnRewievs);
  };
  return (
    <>
      <MovieWrapper key={id}>
        <Poster>
          <Image src={img} alt="" />
        </Poster>
        <MovieDescription>
          <MovieScore>{title}</MovieScore>
          <MovieTitle>
            <Accent>User Score: {score}</Accent>
          </MovieTitle>

          <MovieDetail>
            Overview <br />
            <Accent>{overview}</Accent>
          </MovieDetail>

          <MovieDetail>
            Genres: <Accent>{genres}</Accent>
          </MovieDetail>

          <Accent>
            <Link to="cast">
              <button type="button" onClick={onBtnCkick}>
                Cast
              </button>
              <Cast id={id} btn={btn} />
            </Link>
          </Accent>

          <Accent>
            <Link to="reviews">
              <button type="button" onClick={onBtnRewievsCkick}>
                Reviews
              </button>
              <Reviews id={id} btn={btnRewievs} />
            </Link>
          </Accent>
        </MovieDescription>
      </MovieWrapper>
    </>
  );
};
export default MovieInfo;
