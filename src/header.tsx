import * as React from "react";
import { IColumn, ISorting } from "./adapter";
import { HeaderCell } from "./headerCell";

export interface IHeaderProps {

}

export class Header extends React.Component<IHeaderProps, void> {
    render() {
        return (
            <div className="react-grid-header">
                <HeaderCell />
                <HeaderCell />
                <HeaderCell />
            </div>
        );
    }
}