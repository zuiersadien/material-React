import { IconButton, Stack, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
const Searcher = (props) => {
  const {inputUser,setInputUser}=props
  const[valueInput,setValueInput] =useState('') 
 

  const onSearchValueChange = (e:any) =>{
    const inputValue = e.target.value
    setValueInput(inputValue)
  }
  const handleSubmit = () => {
    setInputUser(valueInput)
 
  };

  return (
    <Stack
      direction="row"
      sx={{
        marginTop: "30px",
        width: "80%",
      }}
    >
      <TextField
        id="outlined-basic"
        label="Octocat"
        placeholder="Searcher User"
        variant="outlined"
        size="small"
        value={valueInput}
        onChange={onSearchValueChange}
        sx={{
          width: "90%",
        }}
      ></TextField>
      
      <IconButton
        onClick={handleSubmit}
        size="small"
        sx={{
          left: "-45px",
        }}
      >
        <SearchIcon />
      </IconButton>
    </Stack>
  );
};

export default Searcher;
