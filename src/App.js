import React, { useEffect, useState } from 'react';
import Routes from "./routes";
import { Link, } from "react-router-dom";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import Thanks from './components/Thanks'
function App() {




  return (
    <div className="App">
      <div className="container">
        <nav>
          <ul>
            <li style={{ display: 'flex' }}>
              <PlayCircleOutlineIcon style={{ fontSize: 30, padding: '0px 8px' }} />
              <Link to="/IeeMDB"> IeeMDB </Link>
            </li>
          </ul>
          <ul>
          </ul>
        </nav>
        <Routes />
      </div>
      <Thanks />
    </div>
  );
}

export default App;
