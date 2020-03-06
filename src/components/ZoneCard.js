import React, { useState, useEffect, Fragment } from 'react';
import {apiUrl, createAuthHeader} from '../App.js';

function ZoneCard({id, name}) {
	createAuthHeader();
	const singleZoneApiUrl = `${apiUrl}/public/zone/start/`;

	const [duration, setDuration] = useState(0);
	const [startingZone, setStartingZone] = useState(false);

	function startSingleZone(id) {
		// singleZoneApiUrl.put({
		// 	headers: createAuthHeader(),
		// 	id: zoneId,
		// 	duration: 2,
		// })
    fetch(singleZoneApiUrl, {method: 'PUT', headers: createAuthHeader(), body: {
	    	id,
	    	duration,
	    }
    })
	}

	function handleDurationInput(val) {
		setDuration(val);
	}

	function startClickHandler() {
		startSingleZone(id);
		setStartingZone(false);
	}

	function renderDurationInput() {
		if (startingZone) {
			return (
				<Fragment>
					<input type="text" onChange={(e) => handleDurationInput(e.target.value)} placeholder="Set duration"/>
					<button onClick={startClickHandler}>Start</button>
				</Fragment>
			);
		}
	}

	return (
		<div className="zoneCard">
			<li onClick={() => setStartingZone(true)}>{name}</li>
			{renderDurationInput()}
		</div>
	);
}

export default ZoneCard;