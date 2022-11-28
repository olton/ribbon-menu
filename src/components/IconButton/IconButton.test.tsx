import React from "react";
import { render } from "@testing-library/react";

import RibbonIconButton from "./IconButton";

describe("Ribbon Icon Button", () => {
    test("renders the Ribbon Icon Button component", () => {
        render(<RibbonIconButton icon="icon-button"/>);
    });
});