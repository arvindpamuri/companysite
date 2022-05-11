import * as React from 'react';
import {Link} from 'react-router-dom';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';

import deleteData from './../state/deleteData';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';

export default function ShowTable(props) {

  async function deleteRecord(id) {

    let url = "https://company12.azurewebsites.net/" + props.table + "/" + id;

    let response = await deleteData(url);
    console.log(response);
    if(response.ok) {

        alert("Successfully Deleted!"); 
        window.location.reload();
    }
    else {
      alert("Delete Failed");
      window.location.reload();
    }
  }


  function PrintHead({row}) {
    return(
    <TableRow >
              {row.map((item) => (
                <TableCell align="center" sx={{color: 'whitesmoke', fontWeight: 'bold', fontSize:'25px'}}>{item.toUpperCase()}</TableCell>
              ))}
      <TableCell align="center" sx={{color: 'whitesmoke', fontWeight: 'bold', fontSize:'25px'}}></TableCell>
      <TableCell align="center" sx={{color: 'whitesmoke', fontWeight: 'bold', fontSize:'25px'}}></TableCell>
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
        <TableCell align="center" sx={{color: 'whitesmoke', fontWeight: 'bold', fontSize:'25px'}}>
          <Link to={`/details/${props.table}/${row[0]}`}>
            <OpenInFullIcon/>
          </Link>
        </TableCell>
        <TableCell align="center" sx={{color: 'whitesmoke', fontWeight: 'bold', fontSize:'25px'}}>
          <Button onClick={() => deleteRecord(row[0])}><DeleteIcon/></Button>
        </TableCell>
        
        
    </TableRow>
    );
  }


  let headings = [];
  if(props.data.length > 0 ) {

    console.log( props.data[0]);
    headings = Object.keys(props.data[0]);
  }

  let records = [];
  if(props.data.length > 0 ) {

    console.log( props.data[0]);


    props.data.map((row) => records.push(Object.values(row)));
  }
  console.log("records",records);



  if(!(headings.length>0)) {
    return (
      <div><h1>Loading</h1></div>
    )
  }

  else {
    return (
      
      <TableContainer component={Paper} 
      sx={{
        backgroundColor: '#1A2027',
        color: 'white',
        alignSelf: 'center'
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
    );

  }
}
