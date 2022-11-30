import React from "react";
import { render } from "@testing-library/react";

import RibbonMenu from "./RibbonMenu";

describe("Ribbon Menu", () => {
    test("renders the Ribbon Menu component", () => {
        render(<RibbonMenu></RibbonMenu>);
    });
});