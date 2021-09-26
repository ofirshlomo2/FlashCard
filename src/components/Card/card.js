import React from 'react';
import './card.css';

function CardComp({ card, openCard }) {
	return (
		<div className={`flip-card ${openCard ? 'open' : ''} `}>
			<div className='flip-card-inner'>
				<div className='flip-card-front'> {card?.question}</div>
				<div className='flip-card-back'>{card?.answer}</div>
			</div>
		</div>
	);
}

export default CardComp;
