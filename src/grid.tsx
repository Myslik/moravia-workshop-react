import * as React from "react";
import { IRow, IColumn, IAdapter, IQuery, ISorting } from "./adapter";
import { Header } from "./header";
import { Body } from "./body";

export interface IGridProps {

}

export interface IGridState {

}

export class Grid extends React.Component<IGridProps, IGridState> {
    render() {
        return (
            <div className="react-grid">
                <Header />
                <Body />
            </div>
        );
    }
}