import * as React from "react";
import { IColumn, IRow } from "./adapter";
import { Cell } from "./cell";

export interface IRowProps {

}

export class Row extends React.Component<IRowProps, void> {
    render () {
        return (
            <div className="react-grid-row">
                <Cell />
                <Cell />
                <Cell />
            </div>
        );
    }
}