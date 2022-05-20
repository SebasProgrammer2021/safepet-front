import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import About from "./About";

const renderComponent = () => {
  render(
    <BrowserRouter>
      <About />
    </BrowserRouter>
  );
};

describe("About module tests", () => {
  beforeEach(() => {
    renderComponent();
  });

  test("main title rendered", () => {
    const mainTitle = screen.getByText(/Who are we?/i);
    expect(mainTitle).toBeInTheDocument;
  });
});
