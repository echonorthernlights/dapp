import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

import { contractABI, contractAddress } from "../utils/constants";

export const TransactionContext = React.createContext();

const { ethereum } = window;

const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionsContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  );

  console.log(provider, signer, transactionsContract);
  //return transactionsContract;
};

export const TransactionsProvider = ({ children }) => {
  // const [formData, setformData] = useState({ addressTo: "", amount: "", keyword: "", message: "" });
  // const [currentAccount, setCurrentAccount] = useState("");
  // const [isLoading, setIsLoading] = useState(false);
  // const [transactionCount, setTransactionCount] = useState(localStorage.getItem("transactionCount"));
  // const [transactions, setTransactions] = useState([]);
  return (
    <TransactionContext.Provider
      value={{
        value: "test",

        // transactionCount,
        // connectWallet,
        // transactions,
        // currentAccount,
        // isLoading,
        // sendTransaction,
        // handleChange,
        // formData,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
