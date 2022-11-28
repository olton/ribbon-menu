import React from "react";
import { render } from "@testing-library/react";

import RibbonButton from "./Button";

describe("Ribbon Button", () => {
    test("renders the Ribbon Push Button component", () => {
        render(<RibbonButton caption="Button"/>);
    });
});