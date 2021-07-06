import React, { useState, useEffect, useContext } from 'react';
import history from '../router/history';
import { Button, Spinner, Table } from 'react-bootstrap';
import { AppContext } from '../AppContext';
import axios from 'axios';

const Home = (props) => {
	const { posts, setPosts, pageCount, setPageCount } = useContext(AppContext);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {

		async function getPosts() {
		  try {
		  	setIsLoading(true);
		    const response = await axios.get(`https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${pageCount}`);
		  	setIsLoading(false);
		  	setPosts(response.data.hits)
		  } catch (error) {
		    console.error(error);
		  	setIsLoading(false);
		  }
		}

		getPosts();
		const intervalId = setInterval(() => getPosts(), 10000);

		return() => clearInterval(intervalId)

	},[pageCount])

	return(
		<>
			<div className="d-flex p-2">
				<Button variant="outline-secondary" onClick={() => setPageCount(pageCount - 1)} disabled={pageCount <= 0}>Previous</Button>
				<div className="mx-2 text-secondary border border-secondary rounded px-2" style={{paddingTop:'6px'}}>{pageCount}</div>
				<Button variant="outline-secondary"  onClick={() => setPageCount(pageCount + 1)}>Next</Button>
				{isLoading && <Spinner animation="border" className="ml-2"/>}
			</div>
			<Table striped bordered hover>
			  <thead>
			    <tr>
			      <th>Title</th>
			      <th>URL</th>
			      <th>Author</th>
			      <th>Created At</th>
			    </tr>
			  </thead>
			  <tbody>
			  	{posts && posts.length ? posts.map((post, index) => {
			  		return (
			  			<tr key={index} onClick={()=>history.push('/post',{post})}>
					      <td>{post.title || '--'}</td>
					      <td>{post.url || '--'}</td>
					      <td>{post.author || '--'}</td>
					      <td>{post.createdAt || '--'}</td>
					    </tr>
			  		)
			  	}) : null}
			  </tbody>
			</Table>
		</>
	)
}

export default Home;