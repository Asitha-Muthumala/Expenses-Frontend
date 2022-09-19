import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ViewBudget from './components/ViewBudget';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AddExpenseForm from './components/AddExpenseForm';
import RemainingBudget from './components/Remaining';
import axios from 'axios';


const App = () => {

	const [budget, setBudget] = useState([]);
	const [spentSoFar, setSpentSoFar] = useState([]);

	const makeRequest1 = (num) => {

		if (num == 1) {
			axios.get('http://localhost:3001/budgetAndSpent')
				.then(res => {
					setBudget(res.data.data);
				})
				.catch(err => {
					console.log(err)
				})
		}
		else if (num == 2) {
			axios.post('http://localhost:3001/budgetAndSpent')
				.then(res => {
					setSpentSoFar(res.data.data);
				})
				.catch(err => {
					console.log(err)
				})
		}
		else {
			console.log("Invalid");
		}
	}

	// useEffect(() => {
	// 	if ( !isLoaded ){
	// 		makeRequest1();
	// 		setIsLoaded(true);
	// 	}
	// },[])

	useEffect(() => {
		makeRequest1(1);
		makeRequest1(2);
	}, [])

	console.log(budget[0]);
	console.log(spentSoFar[0]);

	return (
		<>
			<div className='container'>

				<h1 className='mt-3'>My Budget Planner</h1>			

				{spentSoFar[0] != undefined && (-1) * spentSoFar[0].Spent > 10000 ? <h4 style={{ color: "red" }}>You are exceed 10000 LKR</h4> : ""}

				<div className='row mt-3'>

					<div className='col-sm'>
						<ViewBudget value={budget[0] != undefined && spentSoFar[0] != undefined ? budget[0].Amount + spentSoFar[0].Spent : "null"} />
					</div>

					<div className='col-sm'>
						<RemainingBudget value={(spentSoFar[0] != undefined && spentSoFar[0].Spent != undefined) && (budget[0].Amount + spentSoFar[0].Spent > 0) ? budget[0].Amount + spentSoFar[0].Spent : "null"} />
					</div>

					<div className='col-sm'>
						<ExpenseTotal value={spentSoFar[0] != undefined ? (-1) * spentSoFar[0].Spent : "null"} />
					</div>

				</div>

				<h3 className='mt-3'>Expenses</h3>

				<div className='row '>
					<div className='col-sm'>
						<ExpenseList />
					</div>
				</div>

				<h3 className='mt-3'>Add Expense</h3>

				<div className='row mt-3'>
					<div className='col-sm'>
						<AddExpenseForm />
					</div>
				</div>

			</div>
		</>
	);
};

export default App;
