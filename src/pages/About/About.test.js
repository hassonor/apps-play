import React from "react";
import {shallow} from "enzyme";
import About from "./About";

it("expect to render About Page", () => {
    expect(shallow(<About/>)).toMatchSnapshot();
});