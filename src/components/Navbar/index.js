import { AppBar, Avatar, Button, Toolbar, Typography } from '@material-ui/core';
import useStyles from './styles';
import memoriesLogo from '../../assets/images/memoriesLogo.png';
import memoriesText from '../../assets/images/memoriesText.png';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import jwtDecode from 'jwt-decode';
// import { GoogleLogout } from 'react-google-login';

const Navbar = () => {
  const classes = useStyles();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = jwtDecode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) {
        logout();
      }
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  const logout = () => {
    dispatch({ type: 'LOGOUT' });

    history.push('/');

    setUser(null);
  };

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <Link to="/">
          <img
            className={classes.image}
            src={memoriesText}
            alt="memories"
            height="40"
          />
          <img
            className={classes.image}
            src={memoriesLogo}
            alt="memories"
            height="40"
          />
        </Link>
      </div>
      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Avatar
              className={classes.purple}
              alt={user?.result.name}
              src={user?.result.imageUrl}>
              {user?.result.name.charAt(0)}
            </Avatar>
            <Typography className={classes.userName} variant="h6">
              {user?.result.name}
            </Typography>
            <Button
              variant="contained"
              className={classes.logout}
              color="secondary"
              onClick={logout}>
              Logout
            </Button>
            {/* <GoogleLogout
              clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
              buttonText="Logout"
              onLogoutSuccess={logout}
            /> */}
          </div>
        ) : (
          <Button
            component={Link}
            to="/auth"
            variant="contained"
            className={classes.logout}
            color="primary">
            Sign In
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

// DOCS

// dependency location
// when location is change, set users

// setelah token di decode, akan keliahatan semua informasinya
// pada saat buat api, kita memasukkan email dan password
/*
{email: "gian@gmail.com", id: "612b945438ce74b0dec7f4c3", iat: 1630252124, exp: 1630255724}
*/
