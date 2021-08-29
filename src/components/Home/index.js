import { Container, Grid } from '@material-ui/core';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPosts } from '../../redux/actions/posts';
import useStyles from './styles';
import Form from '../Form';
import Posts from '../Posts';

const Home = () => {
  const classes = useStyles();
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch, currentId]);

  return (
    <Container>
      <Grid
        className={classes.mainContainer}
        container
        justifyContent="space-between"
        alignContent="stretch"
        spacing={3}>
        <Grid item xs={12} sm={7}>
          <Posts setCurrentId={setCurrentId} />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Form currentId={currentId} setCurrentId={setCurrentId} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
