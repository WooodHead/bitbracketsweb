/* eslint-env jest */

import { shallow } from "enzyme";
import React from "react";
import renderer from "react-test-renderer";

import Router from 'next/router';
import App from '../pages/index.js';

const mockedRouter = { push: () => {}, prefetch: () => {} };
Router.router = mockedRouter;

describe('With Enzyme', () => {
  xit('App shows "Welcome Next"', () => {
    const app = shallow(<App />);

    expect(app.find('h1').text()).toEqual('Welcome to Next!');
  });
});

describe('With Snapshot Testing', () => {
  xit('App shows "Hello world!"', () => {
    const component = renderer.create(<App />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
