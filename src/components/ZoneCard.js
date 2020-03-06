import React, { useState, Fragment } from 'react';
import {createAuthHeader} from '../App.js';
import {zoneApiUrl} from './ZonesList.js'

function ZoneCard({id, name}) {
	const singleZoneApiUrl = `${zoneApiUrl}/start`;

	const [duration, setDuration] = useState(0);
	const [startingZone, setStartingZone] = useState(false);

	// API request attempt (not working)
	function startSingleZone() {
    fetch(singleZoneApiUrl, {method: 'PUT', headers: createAuthHeader(), body: JSON.stringify({
	    	id,
	    	duration,
	    })
    })
	}

	// record changing input value and store as duration
	function handleDurationInput(val) {
		setDuration(val);
	}

	// fire API request and change zone button state on click of save button
	function startClickHandler() {
		startSingleZone();
		setStartingZone(false);
	}

	// render duration input only if zone was clicked on
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