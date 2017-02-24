import * as React from "react";
import * as ReactDOM from "react-dom";
import { Grid } from "./grid";
import { ODataAdapter } from "./odata";

const adapter = new ODataAdapter(
    "http://services.odata.org/TripPinRESTierService/People",
    [
        { key: "UserName", width: 150 },
        { key: "FirstName", width: 150 },
        { key: "LastName", width: 150 }
    ],
    "UserName"
);

ReactDOM.render(
    <Grid adapter={adapter} />,
    document.getElementById("example")
);