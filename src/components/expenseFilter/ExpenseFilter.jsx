import React from "react";
import styled from "styled-components";
const ExpenseFilter = ({onselecChange, selectedYear})=>
{
    return(
        <Filter>
            <FilterControl>
                <FilterLabel>Filter by year</FilterLabel>
                <FilterSelect value={selectedYear} onChange={onselecChange}>
                    <option value="All">select all</option>
                    <option value="2025">2025</option>
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                </FilterSelect>
            </FilterControl>
        </Filter>
    )
}
export default ExpenseFilter


const Filter = styled.div`
    color: white;
    padding: 0 1rem;
`
const FilterControl = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    margin: 1rem 0;
`
const FilterLabel = styled.label`
font-weight: bold;
margin-bottom: 0.5rem;
`

const FilterSelect = styled.select`
font: inherit;
    padding: 0.5rem 3rem;
    font-weight: bold;
`