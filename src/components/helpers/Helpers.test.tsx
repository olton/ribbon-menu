import React from "react";
import { render } from "@testing-library/react";

import {Caption} from "./Caption";
import {Icon} from "./Icon";
import {Image} from "./Image";

describe("Ribbon Icon", () => {
    test("renders the Ribbon Icon helper", () => {
        render(
            <Icon name="mif-icon"/>
        );
    });
    test("renders the Ribbon Image helper", () => {
        render(
            <Image src="mif-icon"/>
        );
    });
    test("renders the Ribbon Caption helper", () => {
        render(
            <Caption caption="caption"/>
        );
    });
});