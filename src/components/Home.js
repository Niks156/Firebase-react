import React, { useEffect, useState } from "react";
import { useAuth } from "../context/Userauthcontext";
import Box from "@mui/material/Box";
import { getAuth, updateProfile } from "firebase/auth";
import { Button } from "@mui/material";

export default function Home() {
  const { user, logout } = useAuth();
  const [name, setName] = useState("Niks garg");
  const [photourl, setphotourl] = useState(
    "https://media.istockphoto.com/photos/global-connection-picture-id1335295813?k=20&m=1335295813&s=612x612&w=0&h=99MXI041vwF4Ji0jD5Ni8AEJIDxxUZAvy0HPwWWTre8="
  );

  {
    updateProfile(user, {
      displayName: name,
      photoURL: photourl,
    })
      .then(() => {
        console.log("updated");
      })
      .catch((error) => {
        console.log("error occured");
      });
  }

  const handlesubmit = async () => {
    try {
      await logout();
    } catch (err) {
      console.log(err.message);
    }
  };
  console.log(user);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        minHeight: "90vh",
        alignItems: "center",
      }}
    >
      <Box sx={{ border: "1px solid black", padding: 10 }}>

        Welcome to the homepage <br /> {user && user.displayName}
        <br />
        {/* <Button variant="outlined">Update name</Button> */}
        <br />
        <Button variant="outlined" onClick={handlesubmit}>
          Logout
        </Button>
      </Box>
    </Box>
  );
}
