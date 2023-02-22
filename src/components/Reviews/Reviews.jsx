import { useEffect, useState } from 'react';
import { getMovieRewiewsById } from 'service/api';
import { Loader } from './../Loader/Loader';
import { Grid, GridItem } from 'components/App/App.styled';
import { Text } from 'components/App/App.styled';

export function Reviews({ id }) {
  const [reviews, setReviews] = useState([]);
  const [btn, setBtn] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const onBtnCkick = () => {
    setBtn(!btn);
  };
  useEffect(() => {
    setIsLoading(true);

    if (!id) return;

    getMovieRewiewsById(id)
      .then(data => {
        if (data.length === 0) return;
        setReviews(data);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);
  return (
    <>
      {isLoading && <Loader />}
      <button type="button" onClick={onBtnCkick} to={`/movies/${id}/reviews`}>
        Reviews
      </button>
      <Grid style={{ display: btn ? 'none' : 'block' }}>
        {reviews.length !== 0 ? (
          reviews.map(({ id, content, author }) => (
            <GridItem key={id}>
              <Text>{author}</Text>
              <p>{content}</p>
            </GridItem>
          ))
        ) : (
          <p>No rewiews yet</p>
        )}
      </Grid>
    </>
  );
}
