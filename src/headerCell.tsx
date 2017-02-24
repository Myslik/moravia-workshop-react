import * as React from "react";

export interface IHeaderCellProps {

}

export class HeaderCell extends React.Component<IHeaderCellProps, void> {
    render() {
        return (
            <div className="react-grid-header-cell">
                HCell
            </div>
        );
    }
}
