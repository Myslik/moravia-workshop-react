import * as React from "react";
import { IRow, IColumn } from "./adapter";
import { Row } from "./row";

export interface IBodyProps {

}

export class Body extends React.Component<IBodyProps, void> {
    render() {
        return (
            <div className="react-grid-body">
                <Row />
                <Row />
                <Row />
            </div>
        );
    }
}