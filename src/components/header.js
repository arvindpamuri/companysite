import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useMsal } from "@azure/msal-react";


import {Link} from 'react-router-dom';

function handleLogout(instance) {
  instance.logoutRedirect().catch(e => {
      console.error(e);
  });
}

const Header = () => {

  const { instance } = useMsal();

  return (
    <AppBar position="static" sx={{
        backgroundColor: 'rgb(18,18,18)'}}>
      <Container maxWidth="xl">
        <Toolbar 
        disableGutters
        sx={{
            display: 'flex',
              flexDirection: 'col',
              justifyContent: 'space-evenly',
              
              width: '100%'
            //   alignItems: 'center',
        }}
        >
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            BEESO
          </Typography>

          
          
          <Link className="link" to="/employees">
          <Box sx={{  }}>
              <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
              >Employees</Button>
          </Box>
          </Link>

          <Link className="link" to="/customers">
          <Box sx={{  }}>
              <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
              >Customers</Button>
          </Box>
          </Link>

          <Link className="link" to="/prospects">
          <Box sx={{  }}>
              <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
              >Prospects</Button>
          </Box>
          </Link>

          <Box sx={{  }}>
              <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
                onClick={() => handleLogout(instance)}
              >Log Out</Button>
          </Box>
          
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
