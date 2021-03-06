import React from 'react';

function DeviceCard({device, setSelectedDevice}) {
	const {
		name
	} = device;

	return (
		<div className="deviceCard" data-testid="deviceCard" onClick={() => setSelectedDevice(device)}>
      <span>{name}</span>
    </div>
	);
}

export default DeviceCard;