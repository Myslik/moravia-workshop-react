import * as React from "react";
import * as ReactDOM from "react-dom";
import * as TestUtils from "react-addons-test-utils";
import { Cell } from "../src/cell";

it("Cell shows correct text", () => {
    const cell = TestUtils.renderIntoDocument(
        <Cell />
    );

    const cellNode = ReactDOM.findDOMNode(cell);

    expect(cellNode.textContent).toEqual("Cell");
});