import React from "react";
import {shallow} from "enzyme";
import NotFound404 from "./NotFound404";

it("expect to render NotFound404 Page", () => {
    expect(shallow(<NotFound404/>)).toMatchSnapshot();
});