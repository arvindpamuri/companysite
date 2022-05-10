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

export default function InsertEmployee() {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [name, setName] = useState("");
  const [dept, setDept] = useState("");
  const [phone, setPhone] = useState("");

  function submitDetails() {
    postData({
        name: name,
        dept: dept,
        phone: phone
    });
  }

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
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
            <InputLabel htmlFor="my-input">Department</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" 
                onChange={e => setDept(e.target.value)}
                value={dept}
            />
            </FormControl>

            <FormControl sx={{marginTop: "20px"}}>
            <InputLabel htmlFor="my-input">Phone Number</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" 
                onChange={e => setPhone(e.target.value)}
                value={phone}    
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
