import React from 'react';

const RemainingBudget = (props) => {

	return (
		<div className="alert alert-primary p-4">
			<span>Remaining : {props.value} LKR</span>
		</div>
	);
};

export default RemainingBudget;
