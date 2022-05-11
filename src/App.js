import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import {Link} from 'react-router-dom';

import Box from '@mui/material/Box';


function App() {
  return (
    
    <div className="App">

    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        bgcolor: '#1A2027',
        overflow: 'hidden',
        borderRadius: '12px',
        boxShadow: 1,
        color: 'black',
        minHeight: '100vh',
        minWidth: '100%',
      }}
    >

    
    <Link className="link" to="/employees">
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        borderRadius: '12px',
        backgroundColor: 'rgb(18,18,18)',
        boxShadow: 1,
        color: '#FFFFFF',
        minHeight: { xs: 233, md: 200 },
        minWidth: { xs: 350, md: 300 },
      }}
    > Employee details
    </Box>
    </Link>

    <Link className="link" to="/customers">
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        borderRadius: '12px',
        backgroundColor: 'rgb(18,18,18)',
        boxShadow: 1,
        color: '#FFFFFF',
        minHeight: { xs: 233, md: 200 },
        minWidth: { xs: 350, md: 300 },
      }}
    > Customer details
    </Box>
    </Link>

    <Link className="link" to="/prospects">
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        borderRadius: '12px',
        backgroundColor: 'rgb(18,18,18)',
        boxShadow: 1,
        color: '#FFFFFF',
        minHeight: { xs: 233, md: 200 },
        minWidth: { xs: 350, md: 300 },
      }}
    >Prospect details
    </Box>
    </Link>

    </Box>    
      
    </div>
  );
}

export default App;
