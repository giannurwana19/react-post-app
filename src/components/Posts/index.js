import { useSelector } from 'react-redux';
import Post from '../Post';
import useStyles from './styles';

const Posts = () => {
  const classes = useStyles();
  const posts = useSelector(state => state);

  console.log(posts);

  return (
    <>
      <h1>Posts</h1>
      <Post />
      <Post />
    </>
  );
};

export default Posts;
