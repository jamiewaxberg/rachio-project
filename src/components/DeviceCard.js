import React, { useState, useEffect, Fragment } from 'react';

function DeviceCard({device, setSelectedDevice}) {
	const {
		name
	} = device;

	return (
		<div className="deviceCard" onClick={() => setSelectedDevice(device)}>
      <span>{name}</span>
    </div>
	);
}

export default DeviceCard;