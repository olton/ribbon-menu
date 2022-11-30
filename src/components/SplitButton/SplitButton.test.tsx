import React from "react";
import { render } from "@testing-library/react";

import RibbonSplitButton from "./SplitButton";
import {RibbonDropdownMenu, RibbonDropdownItem} from "../DropdownMenu"

describe("Ribbon Split Button", () => {
    test("renders the Ribbon Split Button component", () => {
        render(
            <RibbonSplitButton caption="Options" icon="mif-cog">
                <RibbonDropdownMenu>
                    <RibbonDropdownItem caption="Windows 10"/>
                    <RibbonDropdownItem caption="Windows 11"/>
                    <RibbonDropdownItem caption="Office 365"/>
                </RibbonDropdownMenu>
            </RibbonSplitButton>
        );
    });
});