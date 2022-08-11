import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Container } from "@mui/material/";
import Searcher from "./componets/Searcher";

function App() {
  const [inputUser, setInputUser] = useState('octocat');
  const [useStater,setUserStater] = useState('inputUser');
  console.log("app",inputUser)
  return (
    <Container
      sx={{
        backgroundColor: "whitesmoke",
        width: "80vw",
        height: "500px",
        borderRadius: "16px",
        marginTop: "40px",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Searcher inputUser={inputUser} setInputUser={setInputUser}/>

    </Container>
  );
}

export default App;
