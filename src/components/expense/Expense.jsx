import { useState } from 'react'
import ExpenseFilter from '../expenseFilter/ExpenseFilter'
import ExpenseItem from '../expenseItem/ExpenseItem'
import styled from 'styled-components'
import Chart from '../chart/Chart'

const Expense = ({ expenses }) => {
	const [selectedYear, setSelectedYear] = useState('All')
	const selectedOnchangeHandler = (item) => {
		setSelectedYear(item.target.value)
	}
	const getCurrentaExpenses = () => {
		if (selectedYear === 'All') {
			return expenses
		}
		return expenses.filter((expense) => {
			return expense.date.getFullYear().toString() === selectedYear
		})
	}
	const renderedExpenses = getCurrentaExpenses()

	return (
		<ExpenseContainer>
			<ExpenseFilter onselecChange={selectedOnchangeHandler} selectedYear={selectedYear} />
			<Chart items={renderedExpenses} />
			{renderedExpenses.map((el) => {
				return <ExpenseItem
					key={el.title}
					title={el.title}
					price={el.price}
					date={el.date}
				/>
			})}
		</ExpenseContainer>
	)
}
export default Expense

const ExpenseContainer = styled.div`
padding: 1rem;
background-color: rgb(31, 31, 31);
margin: 2rem auto;
width: 50rem;
max-width: 95%;
border-radius: 12px;
`