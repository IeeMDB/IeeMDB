import React, { useEffect, useState } from 'react';
import Routes from "./routes";
import { Link, useHistory } from "react-router-dom";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";

function App() {

  const history = useHistory();
  const [path, setPath] = useState("");

  window.addEventListener("load", () => {

    if (window.location.pathname === "/contact") {
      setPath(window.location.pathname);
    }
  });


  const checkPath = () => {
    history.listen((location) => {
      setPath(location.pathname);
    });
  }


  useEffect(() => {
    checkPath();
  }, []);


  const showContact = path;
  let _contact;
  if (showContact !== "/contact") {
    _contact = (<li><Link to="/contact">Our Team</Link></li>)
  }


  return (
    <div className="App">
      <div className="container">
        <nav>
          <ul>
            <li style={{ display: 'flex' }}>
              <PlayCircleOutlineIcon style={{ fontSize: 30, padding: '0px 8px' }} />
              <Link to="/"> IeeMDB </Link>
            </li>
          </ul>
          <ul>
            {_contact}
          </ul>
        </nav>
        <Routes />
      </div>
    </div>
  );
}

export default App;
