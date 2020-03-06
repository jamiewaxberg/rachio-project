import React, { useState, useEffect, Fragment } from 'react';

function DeviceCard({device, setSelectedDevice}) {
	const {
		id,
		name
	} = device;

	// const [selectedDevice, setSelectedDevice] = useState({});

	// useEffect(() => {
	// 	console.log(selectedDevice)
	// }, [selectedDevice]);

	return (
		<div className="deviceCard" onClick={() => setSelectedDevice(device)}>
      <span>{name}</span>
    </div>
	);
}

export default DeviceCard;