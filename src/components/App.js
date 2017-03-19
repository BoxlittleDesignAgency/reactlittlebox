import React from "react";
import "../../dist/styles/normalize.css";
import "../../dist/styles/styles.css";

import Landing from "./Landing.jsx";

//const { shape, arrayOf, string } = React.PropTypes

const App = () => {
    return (
      <div className="app">
        <Landing />
      </div>
    );
};
export default App;
