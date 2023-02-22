import { useEffect, useState } from 'react';
import { getMovieRewiewsById } from 'service/api';
import { Grid, GridItem, Text } from 'components/App/App.styled';

function Reviews({ id, btn }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (!id) return;
    getMovieRewiewsById(id)
      .then(data => {
        if (data.length === 0) return;
        setReviews(data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [id]);
  return (
    <>
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
export default Reviews;
