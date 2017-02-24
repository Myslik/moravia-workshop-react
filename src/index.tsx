import * as React from "react";
import * as ReactDOM from "react-dom";
import { Grid } from "./grid";
import { DemoAdapter } from "./demo";

ReactDOM.render(
    <Grid adapter={new DemoAdapter()} />,
    document.getElementById("example")
);