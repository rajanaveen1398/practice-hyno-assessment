import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import Post from '../components/Post';

export default function Routes (props) {
	return (
		<Switch>
			<Route exact path="/" component={()=><Home {...props} />} />
			<Route exact path="/post" component={()=><Post {...props} />} />
		</Switch>
	)
}