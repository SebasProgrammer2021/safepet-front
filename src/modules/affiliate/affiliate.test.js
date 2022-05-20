import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import AffiliateModule from "./AffiliateModule";
import { act } from "react-dom/test-utils";

const renderComponent = () => {
  render(
    <BrowserRouter>
      <AffiliateModule />
    </BrowserRouter>
  );
};

describe("Affiliate module tests", () => {
  beforeEach(() => {
    renderComponent();
  });

  test("main title rendered", () => {
    const mainTitle = screen.getByText("Afiliados");
    expect(mainTitle).toBeInTheDocument;
  });

  test("card copayment", () => {
    const consultCopaymentButton = screen.getByText("Consultar copago");

    act(() => {
      fireEvent.click(consultCopaymentButton);

      expect("Consultar copago").toBeInTheDocument;
    });
  });
});
