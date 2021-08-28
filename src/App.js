import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import memory from './assets/images/memories.png';
import Form from './components/Form';
import Posts from './components/Posts';
import useStyles from './styles';

function App() {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h4" align="center">
          Post Memory App
        </Typography>
        <img
          className={classes.image}
          src={memory}
          alt="memories"
          height="40"
        />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justifyContent="space-between"
            alignContent="stretch"
            spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={5}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
