import React from "react";
import {shallow} from "enzyme";
import Home from "./Home";

it("expect to render Home Page", () => {
    expect(shallow(<Home/>)).toMatchSnapshot();
});