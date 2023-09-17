import React from "react";
import PropTypes from 'prop-types'
import SecondsCounter from '../component/SecondsCounter'
import PauseButton from '../component/PauseButton'
import ResumeButton from '../component/ResumeButton'
import ResetButton from '../component/ResetButton'

//create your first component
const Home = (props) => {
	return (
		<div className="container-fluid d-inline-block bg-gray h-100">
			<SecondsCounter seconds={props.seconds}/>
			<div className="row">
				<div className="col-1 d-flex mx-auto">
					<PauseButton resetCounter={props.resetCounter} resumeCounter={props.resumeCounter} pauseCounter={props.pauseCounter} seconds={props.seconds}/>
					<ResumeButton resetCounter={props.resetCounter} resumeCounter={props.resumeCounter} pauseCounter={props.resumeCounter} seconds={props.seconds}/>
					<ResetButton resetCounter={props.resetCounter} resumeCounter={props.resumeCounter} pauseCounter={props.resumeCounter} seconds={props.seconds}/>
				</div>
			</div>
		</div>
	);
};

export default Home;
