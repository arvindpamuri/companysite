import React from 'react';
import useGetData from './../state/getData'

import './page.css';
import {Box} from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import Header from '../components/header';
import { useParams } from 'react-router-dom';

//MSAL
import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";


function PrintHead({row}) {
    return(
    <TableRow >
              {row.map((item) => (
                <TableCell align="center" sx={{color: 'whitesmoke', fontWeight: 'bold', fontSize:'25px'}}>{item.toUpperCase()}</TableCell>
              ))}
      </TableRow>
    );
  }
  
  function PrintRow({row}) {
    return(
      <TableRow
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
              {row.map((item) => (
                <TableCell align="center" sx={{color: 'whitesmoke',fontSize:'15px'}}>{item}</TableCell>
              ))}
    </TableRow>
    );
  }

const mainCardDetails = {
    bgcolor: 'rgb(18,18,18)',
    width: '100%',
    '@media (min-width: 780px)' : {
      width: '40%'
    }
}


const ShowDetails = () => {

    const params = useParams();

    let url = "https://company12.azurewebsites.net/" + params.table + "/" + params.id;
    let data;
    data = useGetData(url);

    let result = [];
    if(data.length > 0 ) {

        Object.entries(data[0]).forEach(([key, value]) => {
            result.push([key, value]);
        });
    }

    let alternate_table;
    if(params.table==="employees")
        alternate_table='customers';
    else
        alternate_table='employees';

    let alternate_url = "https://company12.azurewebsites.net/" + params.table + "/" + params.id + "/" + alternate_table;
    let alternateData = useGetData(alternate_url);

    let headings = [];
    if(alternateData.length > 0 ) {

        headings = Object.keys(alternateData[0]);
    }

    let records = [];
    if(alternateData.length > 0 ) {

        alternateData.map((row) => records.push(Object.values(row)));
    }


    
    return(
        <>
            <UnauthenticatedTemplate>
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
                            > Please Login
                            </Box>
                        </Box>
            </UnauthenticatedTemplate>
            
            <AuthenticatedTemplate>
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
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        bgcolor: '#1A2027',
                        minHeight: '30vh',
                        minWidth: '100%',
                        marginTop: '50px'
                    }}
                    >
                        <Card variant="outlined" 
                        sx={mainCardDetails}
                        >
                        <CardContent sx={{ color: 'whitesmoke' }} >
                            <Typography variant="h3" component="div" sx= {{ margin: "20px", marginBottom: "40px" }}>
                                {params.table.slice(0,-1).toUpperCase()} DETAILS
                            </Typography>

                            { result.map((item) => (
                                <Typography variant="h5" component="div" sx={{margin: "20px"}}>
                                {item[0].toUpperCase()} : {item[1]}
                                </Typography>
                            ))}
                        </CardContent>
                        </Card>
                    </Box>

                    <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        bgcolor: '#1A2027',
                        minHeight: '30vh',
                        minWidth: '100%',
                        marginTop: '100px',
                        color: "whitesmoke"
                    }}
                    >   

                        <div>
                            {(() => {
                                if (params.table === "employees") {
                                return (
                                    <h1>Employee's Customers</h1>
                                )
                                }
                                else {
                                return (
                                    <h1>Employee handling the customer</h1>
                                )
                                }
                            })()}
                            </div>


                        <TableContainer component={Paper} 
                        sx={{
                            backgroundColor: '#1A2027',
                            color: 'white',
                            alignSelf: 'center',
                            marginTop: "50px"
                        }}
                        >
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead >
                                <PrintHead row={headings}/>
                            </TableHead>

                            <TableBody>
                                {records.map((record) => (
                                    <PrintRow row={record}/>
                                ))}
                            </TableBody>

                                </Table>
                </TableContainer>

                    </Box>

                </Box>
            </AuthenticatedTemplate>
        </>
        
    );
}

export default ShowDetails;