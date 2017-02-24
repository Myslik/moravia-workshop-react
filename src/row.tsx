import * as React from "react";
import { IColumn, IRow } from "./adapter";
import { Cell } from "./cell";

export interface IRowProps {
    columns: IColumn[];
    row: IRow;
}

export class Row extends React.Component<IRowProps, void> {
    render () {
        return (
            <div className="react-grid-row">
                {
                    this.props.columns.map(column =>
                        <Cell key={column.key} value={this.props.row[column.key]} width={column.width} />
                    )
                }
            </div>
        );
    }
}