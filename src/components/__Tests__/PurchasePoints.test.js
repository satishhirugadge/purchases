import React from "react";
import { render } from "@testing-library/react";
import { PurchasePoints } from "../PurchasePoints";

test("purchase points snapthot", () => {
  const component = render(<PurchasePoints />);
  expect(component).toMatchSnapshot();
});
