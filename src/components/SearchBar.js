import React, { useState } from "react";
import { Paper, TextField } from "@mui/material";


const SearchBar = ({onFormSubmit}) => {
    const [ input, setInput ] = useState('');

    const handleSubmit = (e) => {
        const searchTerm = input;
        e.preventDefault();
        onFormSubmit(searchTerm);
        setInput('');
        
    }

    return (
    <Paper elevation={10} style={{ padding: "15px"}}>
      <form  onSubmit={handleSubmit}>
        <TextField value={input} fullWidth label="Search for your favorite videos" onChange={(e)=> setInput(e.target.value)} />
      </form>
    </Paper>
  );
};

export default SearchBar;
