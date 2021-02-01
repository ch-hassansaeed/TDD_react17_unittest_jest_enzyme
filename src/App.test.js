import { render, screen } from '@testing-library/react';
import App from './App';
import { mount } from "enzyme";


describe("Counter Testing", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<App />);
    //console.log(wrapper.debug());
  });

  test("check the heading of counter App", () => {
    expect(wrapper.find("h1").text()).toContain("This is counter app");
  });

  test("render a button with text of `increment`", () => {
    expect(wrapper.find("#increment-btn").text()).toBe("Increment");
  });

  test("render the initial value of state in a div", () => {
    expect(wrapper.find("#counter-value").text()).toBe("0");
  });

  test("render the click event of increment button and increment counter value", () => {
    //click button for 3 time
    wrapper.find("#increment-btn").simulate("click");
    wrapper.find("#increment-btn").simulate("click");
    wrapper.find("#increment-btn").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("3");
  });

  test("render the click event of decrrment button and decrement counter value", () => {
    wrapper.find("#increment-btn").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("1");
    wrapper.find("#decrement-btn").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("0");
  });

});
