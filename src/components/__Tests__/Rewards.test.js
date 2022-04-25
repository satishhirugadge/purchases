import React from "react";
import { render } from "@testing-library/react";
import { Rewards } from "../Rewards";
import { PurchaseContext } from "../../providers/PurchaseDataProvicer";
import { purchasesMockData } from "./MockData";

test("rewards snapshot", () => {
  const component = render(
    <PurchaseContext.Provider value={{ purchaseData: purchasesMockData }}>
      <Rewards />
    </PurchaseContext.Provider>
  );
  expect(component).toMatchSnapshot();
});
