import React, { useState, useEffect } from "react";
import { usePurchaseDetails } from "../context/usePurchaseDetails";

export const Rewards = () => {
  const { purchaseData } = usePurchaseDetails();
  const [totalRewards, setTotalRewards] = useState(0);

  useEffect(() => {
    const totalRewards = purchaseData.reduce((total, transaction) => {
      const selectedTrasactionRewards = calculateTransactionPoints(
        transaction.amount
      );
      const rewards = selectedTrasactionRewards + total;
      return rewards;
    }, 0);
    setTotalRewards(totalRewards);
  }, [purchaseData]);

  const calculateTransactionPoints = (points) => {
    const totalpoints =
      points >= 100 ? (points - 100) * 2 + 50 : (points - 50) * 1;
    return totalpoints;
  };

  return <div>Total Rewards: {totalRewards}</div>;
};
