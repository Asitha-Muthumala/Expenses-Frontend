import React ,{ useEffect, useState }from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';


const ExpenseList = (props) => {

	const [allAmounts, setAllAmounts] = useState([]);
	const  [isLoaded , setIsLoaded] = useState(false);
	const makeRequest = () => {
		axios.get('http://localhost:3001/allAmounts')
		.then(res => {
			
			setAllAmounts(res.data);
		})
		.catch(err => {
			console.log(err)
		})
	}
	const handleOnClick = (id) => {
		axios.delete('http://localhost:3001/allAmounts?id='+id)
		.then(res => {
			// 
			makeRequest();
		})
		.catch(err => {
			console.log(err)
		})
	}
	useEffect(() => {
		if ( !isLoaded ){
			makeRequest();
			setIsLoaded(true);
		}
	},[])

	useEffect(() => {
		// console.log("res.data")
		console.log(allAmounts)
		// console.log("res.data")
	},[allAmounts])

	return (

		<>

			<Table striped bordered hover>
				<thead>
					<tr>
						<th>Amount</th>
						<th>Date</th>
						<th>Description</th>
						<th>Delete</th>
					</tr>
				</thead>
				<tbody>

					{allAmounts?.data?.map((l, k) => {
						return (
							<tr>
								<td>{l.amount}</td>
								<td>{l.date.slice(0,10)}</td>
								<td>{l.description}</td>
								<td><button type="button" class="btn btn-danger" onClick={ () => { handleOnClick(l.id) }}>Delete</button></td>
							</tr>
						)
					})}

				</tbody>
			</Table>

		</>

	);

};

export default ExpenseList;
