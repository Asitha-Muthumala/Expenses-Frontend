import React from 'react';

const ExpenseTotal = (props) => {
	return (
		<div className='alert alert-primary p-4'>
			<span>Spent so far : {props.value} LKR</span>
		</div>
	);
};

export default ExpenseTotal;
