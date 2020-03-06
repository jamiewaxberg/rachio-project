import React, { useState, useEffect, Fragment } from 'react';
import {createAuthHeader} from '../App.js';
import ZoneCard from './ZoneCard.js';

export const zoneApiUrl = 'https://api.rach.io/1/public/zone';

function ZonesList({selectedDevice, setSelectedDevice}) {

	const multiZoneApiUrl = `${zoneApiUrl}/start_multiple`;

	function createApiCallBody() {
		const requestBody = selectedDevice.zones.map(zone => {
			return {
				id: zone.id,
				sortOrder: 1
			}
		})
		console.log(requestBody)
	}

	function startAllZones() {
		fetch(multiZoneApiUrl, {method: 'PUT', headers: createAuthHeader(), body: JSON.stringify(createApiCallBody())
    })
	}

	return (
		<Fragment>
			<h1>Zones</h1>
			<div className="allZonesButton" onClick={startAllZones}>
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