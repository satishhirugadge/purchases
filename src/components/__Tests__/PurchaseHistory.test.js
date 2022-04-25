import React from "react";
import { render, screen } from "@testing-library/react";
import { PurchaseHistory } from "../PurchaseHistory";
import { PurchaseContext } from "../../providers/PurchaseDataProvicer";
import { purchasesMockData } from "./MockData";

test("verifying table row data ", () => {
  render(
    <PurchaseContext.Provider value={{ purchaseData: purchasesMockData }}>
      <PurchaseHistory />
    </PurchaseContext.Provider>
  );

  expect(screen.getByText("11/10/2021")).toBeInTheDocument();
});

test("snapshot test", () => {
  const component = render(
    <PurchaseContext.Provider value={{ purchaseData: purchasesMockData }}>
      <PurchaseHistory />
    </PurchaseContext.Provider>
  );
  expect(component).toMatchSnapshot();
});
