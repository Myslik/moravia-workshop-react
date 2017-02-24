import * as React from "react";
import { IColumn, ISorting } from "./adapter";
import { HeaderCell } from "./headerCell";

export interface IHeaderProps {
    columns: IColumn[];
    onSort: (key: string) => void;
}

export class Header extends React.Component<IHeaderProps, void> {
    render() {
        return (
            <div className="react-grid-header">
                {
                    this.props.columns.map(column =>
                        <HeaderCell
                            key={column.key}
                            title={column.key}
                            width={column.width}
                            onClick={() => { this.props.onSort(column.key); }} />
                    )
                }
            </div>
        );
    }
}