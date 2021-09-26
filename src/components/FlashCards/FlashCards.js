import CardComp from '../Card/card';

function FlashCards({ onNextCard, toggleCard, currentCard, openCard, onYes, onNo }) {
	return (
		<div className='flash-home'>
			<div className='cards'>
				<CardComp card={currentCard} openCard={openCard} />
			</div>
			<div className='actions'>
				<button onClick={onNextCard}>Next Card</button>
				<button onClick={toggleCard}>Flip Card</button>
			</div>

			{openCard && (
				<div className='answers'>
					<h3>Is correct answer ?</h3>
					<div className='actions'>
						<button onClick={() => onYes(true)}>Yes</button>
						<button onClick={() => onNo(false)}>No</button>
					</div>
				</div>
			)}
		</div>
	);
}

export default FlashCards;
