import { useState } from 'react'
import './App.css'
import Expense from './components/expense/Expense'
import NewExpense from './components/new-expense/NewExpense'

function App() {
	const [expenses, setExpenses] = useState([
		{
			title: 'Новый телевизор',
			price: 400,
			date: new Date(),
		},
		{
			title: 'Новый iphone',
			price: 600,
			date: new Date(),
		},
	])
	const addExpense = (item) => {
		console.log(item )
		setExpenses([...expenses,item])
	}
	return (
		<div className='App'>
			<NewExpense expenseFunc={addExpense} />
			<Expense expenses={expenses} />
		</div>
	)
}
// React
// component
//1.function
//2. return jsx
//3. componenttin aty chon tamga menen bashtalysh kerek

// reactive(state, Vdom)

export default App
