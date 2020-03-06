import React, { useState, useEffect, Fragment } from 'react';
import DeviceCard from './DeviceCard.js'

function ZonesList({selectedDevice, setSelectedDevice}) {

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
						<li key={id}>{name}</li>
					);
				}) : null}
			</ul>
			<span className="backButton" onClick={() => setSelectedDevice()}>Back to devices</span>
		</Fragment>
	);
}

export default ZonesList;