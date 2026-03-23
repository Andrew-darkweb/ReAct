import { MainColumn, ColumnTitle, Container } from './Scolumns.js'
import Cards from '../cards/cards'
import { useState } from 'react';
import {cardList} from '../../data.js'
const Columns = () => {
	const [cards, setCards] = useState(cardList)
	const SetDone = (id) => {
		setCards(cards.map((card) => 
			card.id === id
		? {...card, done: !card.done}
		: card))
	}
	return (
		<Container>
			<MainColumn>
				<ColumnTitle>
					<p>Не срочное</p>
				</ColumnTitle>
				<Cards cards={cards.filter(card => card.status === "Не срочное" && !card.done )} SetDone={SetDone}/>
			</MainColumn>
			<MainColumn>
				<ColumnTitle>
					<p>Срочное</p>
				</ColumnTitle>
				<Cards cards={cards.filter(card => card.status === "Срочное" && !card.done )} SetDone={SetDone}/>
			</MainColumn>
			<MainColumn>
				<ColumnTitle>
					<p>В работе</p>
				</ColumnTitle>
				<Cards cards={cards.filter(card => card.status === "В работе" && !card.done )} SetDone={SetDone}/>
			</MainColumn>
			<MainColumn>
				<ColumnTitle>
					<p>Тестирование</p>
				</ColumnTitle>
				<Cards cards={cards.filter(card => card.status === "Тестирование" && !card.done )} SetDone={SetDone}/>
			</MainColumn>
			<MainColumn>
				<ColumnTitle>
					<p>Готово</p>
				</ColumnTitle>
				<Cards cards={cards.filter(card => card.done )} SetDone={SetDone}/>
			</MainColumn>
		</Container>
	);
};
export default Columns;