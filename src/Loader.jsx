import React from "react";
import "./Loader.css";
import Sync from "@material-ui/icons/Sync";

class Loader extends React.Component {
  render() {
    return (
      <header className="Loader-header">
        <p>Loading...</p>
        <Sync className="Loader-logo" />
      </header>
    );
  }
}

export default Loader;
