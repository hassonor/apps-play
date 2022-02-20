import React from "react";
import {shallow} from "enzyme";
import Footer from "./Footer";

it("expect to render Footer Component", () => {
    expect(shallow(<Footer/>)).toMatchSnapshot();
});