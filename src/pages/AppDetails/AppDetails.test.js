import React from "react";
import {mount, shallow} from "enzyme";
import AppDetails from "./AppDetails";
import {AppsProvider} from "../../context/googleApps/GoogleAppsContext";
import all_apps from '../../mocks/all_apps';
import app_meta_data from "../../mocks/booking_app_metadata";


it("expect to render AppDetails Component", () => {
    const mockUseContext = jest.fn().mockImplementation(() => ({
        getApp: all_apps[0],
        app: app_meta_data,
        loading: false
    }));
    React.useContext = mockUseContext;
    const mockUseParams = jest.fn().mockReturnValue({
        name: 'booking.com',
    });

// mock the module using the mock function created above
    jest.mock('react-router-dom', () => ({
        ...jest.requireActual('react-router-dom'),
        useParams: mockUseParams,
    }));
    
    expect(mount(<AppsProvider><AppDetails/></AppsProvider>)).toMatchSnapshot();
});


