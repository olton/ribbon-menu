import React from "react";
import { render } from "@testing-library/react";

import RibbonMenu from "./RibbonMenu";
import {RibbonTabGroup, RibbonTabSubGroup} from "./index";

describe("Ribbon Menu", () => {
    test("renders the Ribbon Menu component", () => {
        render(<RibbonMenu></RibbonMenu>);
    });
    test("renders the Ribbon Group", () => {
        render(<RibbonTabGroup>1</RibbonTabGroup>);
    });
    test("renders the Ribbon SubGroup", () => {
        render(<RibbonTabSubGroup>1</RibbonTabSubGroup>);
    });
});