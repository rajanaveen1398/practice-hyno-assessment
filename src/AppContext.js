import React, {createContext, useState} from 'react';
import PropTypes from 'prop-types';

export const AppContext = createContext();

export const ContextProvider = (props) => {
	const [posts, setPosts] = useState([]);
	const [pageCount, setPageCount] = useState(0);

	const contextVariables = {
		posts,
		setPosts,
		pageCount,
		setPageCount
	}

	return (
		<AppContext.Provider value={contextVariables}>
			{props.children}
		</AppContext.Provider>
	)
}

ContextProvider.propTypes = {
	children: PropTypes.any
}