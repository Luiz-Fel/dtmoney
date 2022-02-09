import { useState } from "react";
import Modal from "react-modal";
import { Dashboard } from "./components/Dashboard";
import Header from "./components/Header/index";
import { GlobalStyle } from "./styles/global";
import { NewTransactionModal } from "./components/NewTransactionModal";
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
      <NewTransactionModal 
      openModal={isModalNewTransactionOpen}
      closeModal={transactionModalClose}
      />
      <GlobalStyle />
    </TransactionProvider>
  );
}

export default App;
