import React from "react";
import {mount} from "enzyme";
import Alert from "./Alert";
import {AlertProvider} from "../../../context/alert/AlertContext";

it("expect to render Alert Component", () => {
    const mockUseContext = jest.fn().mockImplementation(() => ({
        alert: {type: 'error', value: 'someError'}
    }));

    React.useContext = mockUseContext;
    expect(mount(<AlertProvider><Alert/></AlertProvider>)).toMatchSnapshot();
});