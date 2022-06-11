import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import { contractABI, contractAddress } from "../utils/constants";

export const TransactionContext = React.createContext();

const { ethereum } = window;

const getEthereumContract = () => {
  const provider = new ethers.providers.web3provider(ethereum);
  const signer = provider.getSigner();
  const transactionContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  );

  console.log({ provider, signer, transactionContract });
};

export const TransactionsProvider = ({ children }) => {
  const checkIfWalletIsConnect = async () => {
    if (!ethereum) return alert("place install metamask");

    const accounts = await ethereum.request({ method: "eth_account" });
    console.log(accounts);
  };

  useEffect(() => {
    checkIfWalletIsConnect();
  }, []);
  useEffect(() => {
    checkIfWalletIsConnect();
  }, []);
  return (
    <TransactionContext.Provider value={{ value: "test" }}>
      {children}
    </TransactionContext.Provider>
  );
};
