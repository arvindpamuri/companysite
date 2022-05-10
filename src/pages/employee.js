import React, { useState } from 'react';
import useGetData from './../state/getData'

import './page.css';
import {Box, Button, Item} from '@mui/material';


import Header from '../components/header';
import Insert from '../components/insert';
import ShowPeople from  '../components/showpeople';
import InsertEmployee from '../components/insert';

const Employee = () => {

    // const [data, setData] = useState(0);

    let url = "https://company11.azurewebsites.net/employees/";
    const data = useGetData(url);
    // console.log(data)


    return(

        <Box height="100vh" display="flex" flexDirection="column" 
        sx={{
            display: 'flex',
            flexDirection: 'column',
            bgcolor: '#1A2027',
            minHeight: '100vh',
            minWidth: '100%',
          }}
        >
            <Header/>

            <Box
            sx = {{
                marginTop: "50px"
            }}
            >
                <ShowPeople data={data}/>
            </Box>

            {/* <Box
            sx = {{
                marginTop: "50px",
                display: 'flex',
                flexDirection: 'column',
                align
            }}
            > */}
            <Box
                sx={{
                display: 'flex',
                flexDirection: 'row',
                p: 1,
                m: 1,
                borderRadius: 1,
                }}
            >
                <Button sx={{ m: 2 }}  variant="contained">Add Employee</Button>
                <Button sx={{ m: 2 }} variant="contained">Update Employee Info</Button>
                <Button sx={{ m: 2 }} variant="contained">Delete Employee</Button>
            </Box>

            <InsertEmployee/>
            
        </Box>
        
    );
}

export default Employee;