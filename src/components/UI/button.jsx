import styled from "styled-components"
function Button(props) {
	return (
		<Buttonn
			onClick={props.onClick}
			style={{
				padding: '20px',
				backgroundColor: ' #4A026B',
				color: 'white',
				border: 'none',
			}}
		>
			{props.children}
		</Buttonn>
	)
}
export default Button

const Buttonn = styled.button`
font: inherit;
cursor: pointer;
padding: 1rem 2rem;
border: 1px solid #40005d;
background-color: #40005d;
color: white;
border-radius: 12px;
margin-right: 1rem;
`
