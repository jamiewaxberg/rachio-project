import React, { useState, useEffect, Fragment } from 'react';
import {apiUrl, createAuthHeader} from '../App.js';
import ZoneCard from './ZoneCard.js';

function ZonesList({selectedDevice, setSelectedDevice}) {

	createAuthHeader();

	const singleZoneApiUrl = `${apiUrl}/public/zone/start`;
	const multiZoneApiUrl = `${apiUrl}/public/zone/start_multiple`;

	

	return (
		<Fragment>
			<h1>Zones</h1>
			<div className="allZonesButton">
				<span>Run All Zones</span>
			</div>
			<ul className="zonesList">
				{selectedDevice.zones ? selectedDevice.zones.map(zone => {
					const {
						name, id
					} = zone;
					return (
						<ZoneCard key={id} name={name} id={id} />
					);
				}) : null}
			</ul>
			<span className="backButton" onClick={() => setSelectedDevice()}>Back to devices</span>
		</Fragment>
	);
}

export default ZonesList;