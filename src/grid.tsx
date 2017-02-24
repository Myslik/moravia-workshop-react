import * as React from "react";
import { IRow, IColumn, IAdapter, IQuery, ISorting } from "./adapter";
import { Header } from "./header";
import { Body } from "./body";

export interface IGridProps {
    adapter: IAdapter;
}

export interface IGridState {
    columns: IColumn[];
    rows: IRow[];
    sorting?: ISorting;
}

export class Grid extends React.Component<IGridProps, IGridState> {
    constructor(props) {
        super(props);
        this.state = {
            columns: [],
            rows: []
        };

        this.handleSort = this.handleSort.bind(this);
    }

    componentDidMount() {
        this.fetchColumns();
    }

    fetchColumns() {
        this.props.adapter.fetchColumns().then(columns => {
            this.setState((prevState, props) => {
                prevState.columns = columns;
                return prevState;
            }, () => { this.fetchRows(); });
        });
    }

    get query(): IQuery {
        return {
            sorting: this.state.sorting
        };
    }

    fetchRows() {
        this.props.adapter.fetchRows(this.query).then(rows => {
            this.setState((prevState, props) => {
                prevState.rows = rows;
                return prevState;
            });
        });
    }

    get width(): number {
        return this.state.columns
            .reduce((p, c) => p + (c.width || 100), 0);
    }

    handleSort(key: string) {
        this.setState((prevState, props) => {
            if (!prevState.sorting || prevState.sorting.key !== key) {
                prevState.sorting = {
                    key: key,
                    asc: true
                };
            } else {
                if (prevState.sorting.asc === true) {
                    prevState.sorting.asc = false;
                } else {
                    prevState.sorting = undefined;
                }
            }
            prevState.rows = [];
            return prevState;
        }, () => { this.fetchRows(); });
    }

    render() {
        const style = {
            width: this.width + "px"
        };

        return (
            <div style={style} className="react-grid">
                <Header columns={this.state.columns} sorting={this.state.sorting} onSort={this.handleSort} />
                <Body columns={this.state.columns} rows={this.state.rows} />
            </div>
        );
    }
}