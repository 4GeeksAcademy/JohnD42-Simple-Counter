import React from "react";
import PropTypes from 'prop-types'
import SecondsCounter from '../component/SecondsCounter'

//create your first component
const Home = (props) => {
	return (
		<div className="container-fluid d-inline-block bg-gray h-100">
			<SecondsCounter seconds={props.seconds}/>
		</div>
	);
};

Home.propType = {
	seconds: PropTypes.number
}

export default Home;
