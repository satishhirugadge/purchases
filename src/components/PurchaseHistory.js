import React from "react";
import { usePurchaseDetails } from "../context/usePurchaseDetails";

export const PurchaseHistory = () => {
  const { purchaseData } = usePurchaseDetails();
  return (
    <div className="purchase-table">
      {purchaseData.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Transaction Id</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Total rewards</th>
            </tr>
          </thead>
          <tbody>
            {purchaseData.map(({ id, date, amount, rewards }) => (
              <tr key={id}>
                <td>{id}</td>
                <td>{date}</td>
                <td>{amount}</td>
                <td>{rewards}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
