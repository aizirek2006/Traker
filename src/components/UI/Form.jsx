import './Form.css'
const Form = ({id,type,placeholder,labelName,...rest}) => {
	return (
		<div>
			<label className='label-form' htmlFor={id}>
				{labelName}
			</label>
			<br />
			<input
				className='input-form'
				type={type}
				id={id}
				placeholder={placeholder || ''}
				{...rest}
			/>
		</div>
	)
}

export default Form
