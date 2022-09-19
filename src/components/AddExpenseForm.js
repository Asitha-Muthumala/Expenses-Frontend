import axios from 'axios';
import React, { useState } from 'react';

const AddExpenseForm = (props) => {

	const [description, setDescription] = useState('');
	const [date, setDate] = useState('');
	const [cost, setCost] = useState('');

	const handleDescription = (e) => {
		var description = e.target.value;
		setDescription(description)
		console.log(description)
	}

	const handleDate = (e) => {
		var date = e.target.value;
		setDate(date)
		console.log(date)

	}

	const handleCost = (e) => {
		var cost = e.target.value;
		setCost(cost)
		console.log(cost)

	}

	const submitForm = async(e) =>{
		e.preventDefault();
		console.log(description)
		console.log(date)
		console.log(cost)

		let payload = {description: description, date: date, amount: cost};

		let res = await axios.post("http://localhost:3001/allAmounts", payload);

	}

	return (

		<form onSubmit={submitForm}>

			<div class='row'>

				<div className='col-sm col-lg-4'>
					<label for='name'>Description</label>
					<input
						required='required'
						type='text'
						className='form-control'
						placeholder="Description"
						onChange={(e) => handleDescription(e)}
					/>
				</div>

				<div className='col-sm col-lg-4'>
					<label for='name'>Date</label>
					<input
						required='required'
						type='date'
						className='form-control'
						placeholder="Date"
						onChange={(e) => handleDate(e)}
					/>
				</div>

				<div className='col-sm col-lg-4'>
					<label for='cost'>Cost</label>
					<input
						required='required'
						type='number'
						className='form-control'
						placeholder="Cost"
						onChange={(e) => handleCost(e)}
					/>
				</div>

			</div>

			<div className='row mt-3'>
				<div className='col-sm'>
					<button type='submit' className='btn btn-primary'>
						Add
					</button>
				</div>
			</div>

		</form>

	);
	
};

export default AddExpenseForm;
