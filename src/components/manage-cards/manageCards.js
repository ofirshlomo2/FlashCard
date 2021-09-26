import React from 'react';

function ManageCardComp({ cards, openModal, updateCard, removeCard }) {
	return (
		<div className='manage-cards'>
			<div className='manage-header'>
				<button onClick={openModal}>+</button>
			</div>
			<div className='cards-list'>
				{cards.map(card => {
					return (
						<div key={card.id} className='card-item'>
							<p>card id: {card.id}</p>
							<p>card question: {card.question}</p>
							<p>card answer: {card.answer}</p>
							<div className='action'>
								<button onClick={() => updateCard(card)}>edit</button>
								<button onClick={() => removeCard(card.id)}>delete</button>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default ManageCardComp;
