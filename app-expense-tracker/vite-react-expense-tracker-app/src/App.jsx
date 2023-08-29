import React from 'react'

import { GlobalProvider } from "./context/GlobalState";

import Header  from "./components/Header";
import Balance from "./components/Balance";
import TransactionForm from "./components/transactions/TransactionForm";
import TransactionList from './components/transactions/TransactionList';
import IncomeExpenses from './components/IncomeExpenses';
import ExpenseChart from './components/ExpenseChart';

const App = () => {
  return (
    <GlobalProvider>
      <div className=' bg-zinc-950 text-white h-screen flex justify-center items-center overflow-auto'>
        <div className='container mx-auto w-3/6'>
          <div className='bg-zinc-800 p-10 rounded-2xl flex gap-x-2'>
            <div>
              <Header />
              <IncomeExpenses /> 
              <Balance />
              <TransactionForm />
            </div>
            <div className='flex flex-col flex-1'>
              <ExpenseChart />
              <TransactionList />
            </div>
          </div>
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App
