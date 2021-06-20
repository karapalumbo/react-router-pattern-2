import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";

import ColorList from "./ColorList";
import ColorForm from "./ColorForm";
import Color from "./Color";


function Routes() {

  const initialColors =  {
    red: "#FF0000",
    green: "#00FF00",
    blue: "#0000FF"
  };

  const [colors, setColors] = useState(initialColors);

  function handleAdd(colorObj) {
    setColors(prevColors => ({ ...prevColors, ...colorObj }));
  }

  function renderCurrentColor(props) {
    const { color } = props.match.params;
    const hex = colors[color];
    return <Color {...props} hex={hex} color={color} />;
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/colors">
          <ColorList colors={colors} />
        </Route>
        <Route exact path="/colors/new">
          <ColorForm addColor={handleAdd} />
        </Route>
        <Route path="/colors/:color" render={renderCurrentColor} />
        <Redirect to="/colors" />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;