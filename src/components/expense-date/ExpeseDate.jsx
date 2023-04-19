import React from "react";
import styled from "styled-components";
const ExpenseDate = ({date})=>{
    const month = date.toLocaleString('ru-RU', {month: 'long'})
    const day = date.toLocaleString('ru-RU', {day: '2-digit'})
    const year = date.getFullYear()
    console.log(month,day,year);
    return(
        <Date> 
<Month>{month}</Month>
<Day>{day}</Day>
<Year>{year}</Year>
        </Date>
    )
}
export default ExpenseDate

const Date = styled.div`
display: flex;
flex-direction: column;
width: 5.5rem;
height: 5.5rem;
border: 1px solid #ececec;
background-color: #2a2a2A;
color: white;
border-radius: 12px;
align-items: center;
justify-content: center;
`

const Month = styled.div`
font-size: 0.85rem;
font-weight: bold;
`
const Day = styled.div`
font-size: 1.5rem;
    font-weight: bold;
`
const Year = styled.div`
font-size: 0.85rem;
`