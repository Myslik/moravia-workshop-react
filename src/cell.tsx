import * as React from "react";

export interface ICellProps {

}

export class Cell extends React.Component<ICellProps, void> {
    static defaultProps = {
        width: 100
    };

    render() {
        return (
            <div className="react-grid-row-cell">
                Cell
            </div>
        );
    }
}