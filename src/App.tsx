import React, { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import Modal from "react-modal";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { NewTransactionModel } from "./components/NewTransactionModel";

Modal.setAppElement('#root');

function App() {

  const [isModalNewTransactionOpen, setisModalNewTransactionOpen] = useState(false);

  function transactionModalOpen() {
    setisModalNewTransactionOpen(true);
  };

  function transactionModalClose() {
    setisModalNewTransactionOpen(false);
  }


  return (
    <>
      <Header  openModalFunction={transactionModalOpen}/>
      <Dashboard />
      <NewTransactionModel 
      openModal={isModalNewTransactionOpen}
      closeModal={transactionModalClose}
      />
      <GlobalStyle />
    </>
  );
}

export default App;
