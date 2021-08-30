import Pagination from '@material-ui/lab/Pagination';
import PaginationItem from '@material-ui/lab/PaginationItem';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPosts } from '../../redux/actions/posts';
import useStyles from './styles';

const Paginate = ({ page }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { numberOfPages } = useSelector(state => state.posts);

  useEffect(() => {
    if (page) {
      dispatch(getPosts(page));
    }
  }, [page, dispatch]);

  return (
    <Pagination
      classes={{ ul: classes.ul }}
      count={numberOfPages}
      page={Number(page) || 1}
      color="primary"
      shape="rounded"
      renderItem={item => (
        <PaginationItem
          {...item}
          component={Link}
          to={`/posts?page=${item.page}`}
        />
      )}
    />
  );
};

export default Paginate;
