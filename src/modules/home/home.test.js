import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import Home from "./Home";

const renderComponent = () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
};

describe("Home module tests", () => {
  beforeEach(() => {
    renderComponent();
  });

  test("main title rendered", () => {
    const mainTitle = screen.getByText(
      /Brindamos servicios en salud y seguridad./i
    );
    expect(mainTitle).toBeInTheDocument;
  });
});
