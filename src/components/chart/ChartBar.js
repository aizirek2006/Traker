import styled from "styled-components";

const ChartBar = ({ label, currentPrice, maxMumPrice }) => {
    const fillHeight = (100 * currentPrice) / maxMumPrice
    return (
        <ChartBarr>
            <ChartBarInner>
                <ChartBarFill
                    style={{ height: `${fillHeight}%` }}></ChartBarFill>
            </ChartBarInner>
            <ChartBarLabel>{label}</ChartBarLabel>
        </ChartBarr>
    )
}
export default ChartBar;

const ChartBarr = styled.div`
display: flex;
flex-direction: column;
align-items: center;
height: 100%;
`
const ChartBarInner = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: flex-end;
overflow: hidden;
flex-direction: column;
border-radius: 12px;
border: 1px solid #313131;
background-color: #c3b4f3;
`

const ChartBarFill = styled.div`
width: 100%;
    background-color: blue;
    transition: all 0.3s ease-out;
`
const ChartBarLabel = styled.p`
font-weight: bold;
    font-size: 0.5rem;
    text-align: center;
`