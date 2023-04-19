import ChartBar from './ChartBar'
import styled from 'styled-components';

const Chart = (props) => {
    const maxMumPrice = 2000;
    const months = [{
        label: "Январь",
        currentPrice: 0,
      },
      {
        label: "Февраль",
        currentPrice: 0,
      },
      {
        label: "Марть",
        currentPrice: 0,
      },
      {
        label: "Апрель",
        currentPrice: 0,
      },
      {
        label: "Май",
        currentPrice: 0,
      },
      {
        label: "Июнь",
        currentPrice: 0,
      },
      {
        label: "Июль",
        currentPrice: 0,
      },
      {
        label: "Августь",
        currentPrice: 0,
      },
      {
        label: "Сентябрь",
        currentPrice: 0,
      },
      {
        label: "Октябрь",
        currentPrice: 0,
      },
      {
        label: "Ноябрь",
        currentPrice: 0,
      },
      {
        label: "Декабрь",
        currentPrice: 0,
      },
    ];
    props.items.forEach((element) => {
        const monthNumber = element.date.getMonth();
        months[monthNumber].currentPrice += element.price;

    });
    return (
    <Chartt>
        {months.map((elem) => 
       <ChartBar
       key={elem.label}
       label={elem.label}
       currentPrice={elem.currentPrice}
       maxMumPrice={maxMumPrice}
         />
       )}
    </Chartt>
    )
}
export default Chart

const Chartt = styled.div`
padding: 1rem;
border-radius: 12px;
background-color: #f8dfff;
display: flex;
justify-content: space-around;
height: 10rem;
text-align: center;
`