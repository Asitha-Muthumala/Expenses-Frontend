import React from 'react';

const ViewBudget = (props) => {
	return (

			<div className="alert alert-primary p-4">
				<span>Budget : {props.value} LKR</span>
			</div>
	);
};

export default ViewBudget;
