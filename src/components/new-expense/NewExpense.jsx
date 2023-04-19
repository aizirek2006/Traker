import ExpenseForm from '../expense-form/ExpenseForm'
import Button from '../UI/button'
import { useState } from 'react'
import  styled from 'styled-components'
const NewExpense = ({expenseFunc}) => {
	let [ishow, setIshow] = useState(false) // hook
console.log('RENDER');
	const isShowButtonHandler =() => {
		setIshow((ishow) => !ishow) // !true
	}
	return (
		<ExpenceNew>
			{ishow ? (
				<ExpenseForm
				expenseFunc={expenseFunc}
				 isShowButtonHandler={isShowButtonHandler} />
			) : (
				<Button onClick={isShowButtonHandler}>
					Добавить новый расход
				</Button>
			)}  
		</ExpenceNew>
	)
}
export default NewExpense

const  ExpenceNew = styled.div`
background-color: #a892ee;
padding: 1rem;
margin: 2rem auto;
width: 50rem;
max-width: 95%;
border-radius: 12px;
text-align: center;
box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);

`
