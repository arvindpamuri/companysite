import {useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {FormControl, InputLabel, FormHelperText, Input} from '@mui/material/';

import postData from './../state/postData';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function InsertCustomer() {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const [name, setName] = useState("");
  const [address_number, setAddress_number] = useState("");
  const [address_street, setAddress_street] = useState("");
  const [phone_number, setPhone_number] = useState();

  async function submitDetails() {

    if(name.length==0 || address_number.length==0 || address_street.length==0  || phone_number.length==0) {
        alert("Form has errors.");
        return;
    }

    let url = "https://company12.azurewebsites.net/customers/";
    let body = {
        name: name,
        address_number: address_number,
        address_street: address_street,
        phone_number: phone_number
    };

    let response = await postData(body,url);
    console.log(response.ok);
    if(response.ok) {

        alert("Successfully Added!"); 
        // window.location.href = 'details.html';
        window.location.reload();
        

    }
  }

  return (
    <div>
      <Button onClick={handleOpen} sx={{color:"white"}}>Add Customer</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Enter Details
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <FormControl sx={{marginTop: "20px"}}>
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" 
                onChange={e => setName(e.target.value)}
                value={name}
                />
            </FormControl>

            <FormControl sx={{marginTop: "20px"}}>
            <InputLabel htmlFor="my-input">address_number</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" 
                onChange={e => setAddress_number(e.target.value)}
                value={address_number}
            />
            </FormControl>

            <FormControl sx={{marginTop: "20px"}}>
            <InputLabel htmlFor="my-input">Address Street</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" 
                onChange={e => setAddress_street(e.target.value)}
                value={address_street}    
            />
            </FormControl>

            <FormControl sx={{marginTop: "20px"}}>
            <InputLabel htmlFor="my-input">Phone Number</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" 
                onChange={e => setPhone_number(e.target.value)}
                value={phone_number}    
            />
            </FormControl>

            <Typography>
            <Button sx={{ m: 2 }}  variant="contained" onClick={handleClose}>Cancel</Button>
            <Button sx={{ m: 2 }}  variant="contained" onClick={submitDetails}>Add</Button>
            </Typography>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
