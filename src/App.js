import { Container, AppBar, Typography, Grid } from '@material-ui/core';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import memory from './assets/images/memories.png';
import Form from './components/Form';
import Posts from './components/Posts';
import { getPosts } from './redux/actions/posts';
import useStyles from './styles';

function App() {
  const classes = useStyles();
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch, currentId]);

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h4" align="center">
          Post Memory
        </Typography>
        <img
          className={classes.image}
          src={memory}
          alt="memories"
          height="40"
        />
      </AppBar>
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
    </Container>
  );
}

export default App;
