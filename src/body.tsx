import * as React from "react";
import { IRow, IColumn } from "./adapter";
import { Row } from "./row";

export interface IBodyProps {
    columns: IColumn[];
    rows: IRow[];
}

export class Body extends React.Component<IBodyProps, void> {
    render() {
        return (
            <div className="react-grid-body">
                {
                    this.props.rows.map(row =>
                        <Row key={row.id} columns={this.props.columns} row={row} />
                    )
                }
            </div>
        );
    }
}