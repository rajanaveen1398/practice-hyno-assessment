import React from 'react';
import history from '../router/history';

const Post = () => {
	return(
		<div className="p-2">
			<h4>Raw JSON</h4>
			<p>{JSON.stringify(history.location.state.post)}</p>
		</div>
	)
}

export default Post;