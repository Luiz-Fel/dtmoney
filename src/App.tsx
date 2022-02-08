import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import Modal from "react-modal";
import  { Header }  from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { NewTransactionModel } from "./components/NewTransactionModal";
import { TransactionProvider } from "./hooks/UseTransactions";

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
    <TransactionProvider>
      <Header  openModalFunction={transactionModalOpen}/>
      <Dashboard />
      <NewTransactionModel 
      openModal={isModalNewTransactionOpen}
      closeModal={transactionModalClose}
      />
      <GlobalStyle />
    </TransactionProvider>
  );
}

export default App;
