import React from "react";
import { render } from "@testing-library/react";

import RibbonToolButton from "./ToolButton";

describe("Ribbon Tool Button", () => {
    test("renders the Ribbon Tool Button component", () => {
        render(<RibbonToolButton icon="icon-button"/>);
    });
});