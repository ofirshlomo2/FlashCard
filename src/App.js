import './App.css';
import { useEffect, useState } from 'react';
import Tabs from './components/tabs/tabs';
import ManageCardComp from './components/manage-cards/manageCards';
import Form from './components/form/form';
import Modal from './components/Modal/Modal';
import FlashCards from './components/FlashCards/FlashCards';
import { nanoid } from 'nanoid';

const categories = [
	{
		id: 1,
		name: 'fruits',
	},
];

const defaultCards = [
	{
		id: 1,
		question: 'what is react ?',
		answer: 'React is a JavaScript library for building user interfaces',
		categoryId: 1,
	},
	{
		id: 2,
		question: 'what is angular ?',

		answer: 'Angular is BAD  a JavaScript library for building user interfaces',
	},
	{
		id: 3,
		question: 'what is Vue ?',

		answer: 'Angular is ham ham  a JavaScript library for building user interfaces',
	},
];

const localCards = JSON.parse(localStorage.getItem('cards')) || defaultCards;

function App() {
	const [cards, setCards] = useState([...localCards]);
	const [current, setCurrent] = useState(0);
	const [openCard, setOpenCard] = useState(false);
	const [userAnswers, setUserAnswers] = useState({});
	const [activeTab, setActiveTab] = useState(0);
	const [modalIsOpen, setModalIsOpen] = useState(false);
	console.log('userAnswers', userAnswers);
	const [editableCard, setEditableCard] = useState(null);


	const filteredCards = cards.filter(card => userAnswers[card.id] === undefined);
	const currentCard = filteredCards.find((c, i) => i === current);
	const correctAnswers = Object.values(userAnswers).filter(answer => answer);

	console.log('filteredCards', filteredCards);
	console.log('currentCard', currentCard);
	console.log('current', current);



	// botton buttons
	const onNextCard = () => {
		return current + 1 < filteredCards.length ? setCurrent(current + 1) : setCurrent(0);
	};
	const toggleCard = () => {
		setOpenCard(prevOpen => !prevOpen);
	};
	const onAnswer = value => {
		setUserAnswers({
			...userAnswers,
			[currentCard.id]: value,
		});
		setOpenCard(false);
		if (filteredCards.length - 1 === current) {
			// answer on last card
			setCurrent(current - 1);
		}
	};



	// manage cards
	const removeCard = id => {
		setCards(cards.filter(card => card.id !== id));
	};
	const updateCard = card => {
		openModal();
		setEditableCard(card);
	};
	const openModal = () => {
		setModalIsOpen(true);
	};
	const closeModal = () => {
		setModalIsOpen(false);
		setEditableCard(null);
	};

	const handleSubmit = form => {
		if (editableCard) {
			//edit
			setCards(
				cards.map(card => {
					if (card.id === editableCard.id) {
						return { ...card, ...form };
					}
					return card;
				})
			);
		} else {
			//add
			setCards([...cards, { ...form, id: nanoid() }]);
		}
		closeModal();
	};


	useEffect(() => {
		localStorage.setItem('cards', JSON.stringify(cards));
	}, [cards]);



	return (
		<div className='App'>
			<Modal open={modalIsOpen}>
				<Form handleSubmit={handleSubmit} editableCard={editableCard} closeModal={closeModal} />
			</Modal>

			<Tabs>
				<Tabs.Tab value={0} current={activeTab} onTabChange={setActiveTab}>
					Flash Cards
				</Tabs.Tab>
				<Tabs.Tab value={1} current={activeTab} onTabChange={setActiveTab}>
					Manage Cards
				</Tabs.Tab>
			</Tabs>


			<Tabs.TabPanel value={0} current={activeTab}>
				<FlashCards
					onNextCard={onNextCard}
					onNo={onAnswer}
					onYes={onAnswer}
					currentCard={currentCard}
					openCard={openCard}
					toggleCard={toggleCard}
				/>
				<div className='result'>
					{correctAnswers.length}/{cards.length} correct answers
				</div>
			</Tabs.TabPanel>


			<Tabs.TabPanel value={1} current={activeTab}>
				<ManageCardComp openModal={openModal} cards={cards} updateCard={updateCard} removeCard={removeCard} />
			</Tabs.TabPanel>


		</div>
	);
}

export default App;
