import { Typography } from "@mui/material";
import React, { useState } from "react";
import axios from 'axios'

const UploadAndDisplayImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [status, setStatus] = useState('')

  return (
    <div>
      <h1>Upload and Display Image usign React Hook's</h1>
      {selectedImage && (
        <div>
        <img alt="not found" width={"250px"} src={URL.createObjectURL(selectedImage)} />
        <br />
        <button onClick={()=>setSelectedImage(null)}>Remove</button>
        </div>
      )}
      <br />
     
      <br /> 
      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
          axios.get('https://psm5xaw0x5.execute-api.us-east-1.amazonaws.com/default/lambda').then(res => {
            setStatus(res)
          })
        }}
      />
      <button onClick={() => {
        axios.get('https://psm5xaw0x5.execute-api.us-east-1.amazonaws.com/default/lambda').then(res => {
          setStatus(res)
        })
      }}>
        Upload
      </button>
      <Typography>
        {status}
      </Typography>

    </div>
  );
};

export default UploadAndDisplayImage;