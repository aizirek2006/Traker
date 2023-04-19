import { useState } from 'react'
import Form from '../UI/Form'
import Button from '../UI/button'
import styled from 'styled-components'
function ExpenseForm({ expenseFunc, isShowButtonHandler }) {
	const [title, setTitle] = useState('')
	const [price, setPrice] = useState(0)
	const [date, setDate] = useState(null)
	const titleChangeHandler = (event) => {
		setTitle(event.target.value);
	}
	const priceChangeHandler = (event) => {
		setPrice(event.target.value)
	}

	const dateChangeHandler = (event) => {
		setDate(event.target.value)
	}
	const cancelHandler = (event) => {
		event.preventDefault()
		isShowButtonHandler()
	}
	const sumbitHandler = (event) => {
		event.preventDefault()

		let data = {
			title,
			price,
			date: new Date(date),
		}
		if (title.trim() !== "" && date.trim() !== '' && price.trim() !== '') {
			expenseFunc(data)
		}
		setTitle('')
		setDate('DD.MM.YYYY')
		setPrice(0)
	}


	return (

		<form>
			<FormControl>
				<div>
					<Form onChange={titleChangeHandler}
						value={title}
						labelName='Title'
						type='text'
						id='title'
						placeholder='Title' />
				</div>
				<div>
					<Form
						value={price}
						onChange={priceChangeHandler}
						labelName='Price'
						type='text'
						id='price' />
				</div>
				<div>
					<Form
						value={date}
						onChange={dateChangeHandler}
						labelName='Date'
						type='date'
						id='date' />
				</div>
			</FormControl>
			<Buttonn>
				<Button onClick={cancelHandler}>Отмена</Button>
				<Button onClick={sumbitHandler}>Добавить расходы</Button>
			</Buttonn>
		</form>
	)
}

export default ExpenseForm

const FormControl = styled.form `
display: flex;
	flex-wrap: wrap;
	gap: 1rem;
	margin-bottom: 1rem;
	text-align: left;
`
const Buttonn = styled.div`
text-align: right;
`