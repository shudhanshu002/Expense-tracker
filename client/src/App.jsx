import { useState } from 'react'
import reactLogo from 'src/assets/react.svg'
import viteLogo from '/vite.svg'
import 'src/App.css'
import { GlobalProvider } from 'src/context/GlobalState'
import Header from 'src/components/Header'
import { Balance } from 'src/components/Balance'
import IncomeExpenses from 'src/components/IncomeExpenses'
import { AddTransaction } from 'src/components/AddTransaction'
import { TransactionList } from 'src/components/TransactionList'

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
