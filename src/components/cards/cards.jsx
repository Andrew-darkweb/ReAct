import { Card, CardsItem, CardsCard, CardGroup, CardTheme, Checkbox, CardBtn, PopBrowse, CardContent, CardTitle, CardDate,Orange, Green, Violet, Brown, Red } from './Scards.js';
const Cards = ({ cards, SetDone }) => {
return (
    <>
      {cards.map((array) => (
      <Card key={array.id}>
        <CardsItem>
          <CardsCard>
            <CardGroup>
              <CardTheme>
                {array.category === "Учёба" && <Orange>{array.category}</Orange>}
                {array.category === "Проект" && <Green>{array.category}</Green>}
                {array.category === "Программирование" && <Violet>{array.category}</Violet>}
                {array.category === "Проект №2" && <Red>{array.category}</Red>}
                {array.category === "Английский" && <Brown>{array.category}</Brown>}
              </CardTheme>
              <PopBrowse target="_self">
                <CardBtn>
                  <div></div>
                  <div></div>
                  <div></div>
                </CardBtn>
              </PopBrowse>
            </CardGroup>
            <CardContent>
              <a href="" target="_blank">
                <CardTitle>{array.title}</CardTitle>
              </a>
              <CardDate>
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <g clip-path="url(#clip0_1_415)">
                    <path d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z" stroke="#94A6BE" stroke-width="0.8" stroke-linejoin="round"></path>
                    <path d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z" stroke="#94A6BE" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_1_415">
                      <rect width="13" height="13" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
                <p></p>
              </CardDate>
              <Checkbox type="checkbox" checked={array.done} onChange={() => SetDone(array.id)}/>
            </CardContent>
          </CardsCard>
        </CardsItem>
      </Card >))}
    </>
      );
};
export default Cards;