import React, { Fragment } from 'react';
import DeviceCard from './DeviceCard.js'

function DevicesList({personInfo, setSelectedDevice}) {
	return (
		<Fragment>
			<h1>Devices</h1>
			<div className="devices">
			  {personInfo.devices ? personInfo.devices.map(device => {
			    return (
			      <DeviceCard device={device} key={device.id} setSelectedDevice={setSelectedDevice} />
			    );
			  }) : null}
			</div>
		</Fragment>
	);
}

export default DevicesList;