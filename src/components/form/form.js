import React from 'react';
import { useState, useEffect } from 'react';


function Form({ closeModal, editableCard, handleSubmit }) {
	const title = editableCard ? 'Edit Card' : 'New Card';
	const btnText = editableCard ? 'Save Card' : 'Create Card';

	const [form, setForm] = useState({ ...editableCard } || {});

	console.log('form', form);

	const onChange = event => {
		const { name, value } = event.target;
		setForm({ ...form, [name]: value });
	};

	const onSubmit = event => {
		event.preventDefault();
		handleSubmit(form);
	};

	return (
		<div className='form'>
			<button onClick={closeModal}>close</button>
			<h3>{title}</h3>
			<form onSubmit={onSubmit}>
				<input defaultValue={form.question} onChange={onChange} name='question' placeholder='question' />
				<input defaultValue={form.answer} onChange={onChange} name='answer' placeholder='answer' />
				<button>{btnText}</button>
			</form>
		</div>
	);
}

export default Form;
