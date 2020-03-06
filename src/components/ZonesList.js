import React, { Fragment } from 'react';
import {createAuthHeader} from '../App.js';
import ZoneCard from './ZoneCard.js';

export const zoneApiUrl = 'https://api.rach.io/1/public/zone';

function ZonesList({selectedDevice, setSelectedDevice}) {

	const multiZoneApiUrl = `${zoneApiUrl}/start_multiple`;

	// create array of all zone IDs to include in request body
	function createApiCallBody() {
		const requestBody = selectedDevice.zones.map(zone => {
			return {
				id: zone.id,
				sortOrder: 1
			}
		})
		return requestBody;
	}

	// API request attemp (not working)
	function startAllZones() {
		fetch(multiZoneApiUrl, {method: 'PUT', headers: createAuthHeader(), body: JSON.stringify(createApiCallBody())})
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