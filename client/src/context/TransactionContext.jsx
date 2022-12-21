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
  const [currentAccount, setCurrentAccount] = useState("");
  const [formData, setformData] = useState({
    addressTo: "",
    amount: "",
    keyword: "",
    message: "",
  });
  // const [currentAccount, setCurrentAccount] = useState("");
  // const [isLoading, setIsLoading] = useState(false);
  // const [transactionCount, setTransactionCount] = useState(localStorage.getItem("transactionCount"));
  // const [transactions, setTransactions] = useState([]);
  const checkIfwalletIsConnected = async () => {
    try {
      if (!ethereum) return alert("Please install Metamask , and try again!");
      const accounts = await ethereum.request({ method: "eth_accounts" });
      if (accounts.length) {
        setCurrentAccount(accounts[0]);

        // get all transactions
      } else {
        console.log("No accounts found !!");
      }
      console.log(accounts);
    } catch (error) {
      console.log(error);
    }
  };

  const connectWallet = async () => {
    try {
      if (!ethereum)
        return alert("Please connect to Metamask , and try again!");
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
    } catch (error) {
      console.log(error);
      throw new Error("No ethereum object");
    }
  };

  // send transactions
  const sendTransaction = async () => {
    console.log("from sendtransaction");
    console.log(formData);
    try {
      if (!ethereum) return alert("Please install Metamask , and try again!");
      // get data from form
    } catch (error) {
      console.log(error);
    }
  };

  // handle data from form
  const handleChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    checkIfwalletIsConnected();
  }, []);
  return (
    <TransactionContext.Provider
      value={{
        connectWallet,
        currentAccount,

        // transactionCount,
        // connectWallet,
        // transactions,
        // currentAccount,
        // isLoading,
        sendTransaction,
        handleChange,
        formData,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
