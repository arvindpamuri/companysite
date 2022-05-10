import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function PrintHead({row}) {
  return(
  <TableRow onclick>
            {row.map((item) => (
              <TableCell align="center" sx={{color: 'whitesmoke', fontWeight: 'bold', fontSize:'25px'}}>{item.toUpperCase()}</TableCell>
            ))}
  </TableRow>
  );
}

function PrintRow({row}) {
  return(
    <TableRow
    key={row.employee_id}
    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
  >
            {row.map((item) => (
              <TableCell align="center" sx={{color: 'whitesmoke',fontSize:'15px'}}>{item}</TableCell>
            ))}
  </TableRow>
  );
}

export default function ShowTable(props) {


  let headings = [];
  if(props.data.length > 0 ) {

    console.log( props.data[0]);
    headings = Object.keys(props.data[0]);
  }

  let records = [];
  if(props.data.length > 0 ) {

    console.log( props.data[0]);


    props.data.map((row) => records.push(Object.values(row)));
    // props.data.map((row) => records.push(Object.values(props.data)))

    // headings = Object.keys(props.data[0]);
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
