import * as React from "react";
import { IColumn, ISorting } from "./adapter";
import { HeaderCell, SortState } from "./headerCell";

export interface IHeaderProps {
    columns: IColumn[];
    sorting: ISorting;
    onSort: (key: string) => void;
}

export class Header extends React.Component<IHeaderProps, void> {
    getSortState(column: IColumn): SortState {
        if (this.props.sorting && this.props.sorting.key === column.key) {
            return this.props.sorting.asc ? SortState.Ascending : SortState.Descending;
        } else {
            return SortState.Enabled;
        }
    }

    render() {
        return (
            <div className="react-grid-header">
                {
                    this.props.columns.map(column =>
                        <HeaderCell
                            key={column.key}
                            title={column.key}
                            width={column.width}
                            sortState={this.getSortState(column)}
                            onClick={() => { this.props.onSort(column.key); }} />
                    )
                }
            </div>
        );
    }
}