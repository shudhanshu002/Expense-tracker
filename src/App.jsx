import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { GlobalProvider } from './context/GlobalState'
import Header from './components/Header'
import { Balance } from './components/Balance'
import IncomeExpenses from './components/IncomeExpenses'
import { AddTransaction } from './components/AddTransaction'
import { TransactionList } from './components/TransactionList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <GlobalProvider>
      <Header />
      <div className='container'>
        <Balance/>
        <IncomeExpenses/>
        <TransactionList/>
        <AddTransaction/>
      </div>
    </GlobalProvider>
  )
}

export default App
