import React from "react";
import { useAuth } from "../context/Userauthcontext";
import Box from '@mui/material/Box';
import { Button } from "@mui/material";

export default function Home() {
  const { user,logout } = useAuth();
  const handlesubmit = async() => {
      try{
        await logout();
      }catch(err){
        console.log(err.message)
      }
  }
  console.log(user);
  return (
    <Box sx={{display:"flex", justifyContent:"center", minHeight: "90vh", alignItems:"center"}}>
        <Box sx={{border: "1px solid black" ,padding: 10}}>
      Welcome to the homepage <br /> {user && user.email}
      <br />
      <Button variant="outlined" onClick={handlesubmit}>Logout</Button>
      </Box>
    </Box>
  );
}
