import React from "react";
import { render } from "@testing-library/react";

import RibbonButtonGroup from "./ButtonGroup";

describe("Ribbon Button Group", () => {
    test("renders the Ribbon Button Group component", () => {
        render(<RibbonButtonGroup></RibbonButtonGroup>);
    });
});