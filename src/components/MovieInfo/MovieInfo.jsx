import { Cast } from 'components/Cast/Cast';
import { Reviews } from 'components/Reviews/Reviews';
import { Link } from 'react-router-dom';
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

export const MovieInfo = ({ title, id, score, overview, img, genres }) => {
  return (
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
          <Cast id={id}>
            <Link to={`/movies/${id}/cast`}></Link>
          </Cast>
        </Accent>

        <Accent>
          <Reviews id={id}></Reviews>
        </Accent>
      </MovieDescription>
    </MovieWrapper>
  );
};
