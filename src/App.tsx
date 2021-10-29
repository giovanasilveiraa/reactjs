import { useState } from 'react';
import Modal from 'react-modal';
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from './components/NewTransactionModal';
import { GlobalStyle } from "./styles/global";
import { TransactionsProvider } from './hooks/useTransactions';

export function App() {

  Modal.setAppElement('#root');

  const [isNewTransactionsModalOpen, setIsNewTransactionsModalOpen] = useState(false);

  function handleOpenNewTransactionsModal(){
    setIsNewTransactionsModalOpen(true);
  }

  function handleCloseNewTransactionsModal(){
    setIsNewTransactionsModalOpen (false);
  }
  
  return (
    <TransactionsProvider>
      <Header OnOpenNewTransationsModal ={handleOpenNewTransactionsModal} />
      <Dashboard />

      <NewTransactionModal
        isOpen ={isNewTransactionsModalOpen}
        onRequestClose={handleCloseNewTransactionsModal}
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
}
