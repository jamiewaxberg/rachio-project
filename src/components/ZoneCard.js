import React, { useState, Fragment } from 'react';
import {createAuthHeader} from '../App.js';
import {zoneApiUrl} from './ZonesList.js'

function ZoneCard({id, name}) {
	const singleZoneApiUrl = `${zoneApiUrl}/start`;

	const [duration, setDuration] = useState(0);
	const [startingZone, setStartingZone] = useState(false);

	function startSingleZone() {
    fetch(singleZoneApiUrl, {method: 'PUT', headers: createAuthHeader(), body: JSON.stringify({
	    	id,
	    	duration,
	    })
    })
	}

	function handleDurationInput(val) {
		setDuration(val);
	}

	function startClickHandler() {
		startSingleZone();
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