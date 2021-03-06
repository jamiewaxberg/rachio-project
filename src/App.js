import React, { useState, useEffect } from 'react';
import './App.scss';
import DevicesList from './components/DevicesList.js'
import ZonesList from './components/ZonesList.js'

const personApiUrl = 'https://api.rach.io/1/public/person';
export const token = '76980330-8f0b-4659-a341-527364acf134';

export function createAuthHeader() {
  let headers = new Headers();
  headers.set('Authorization', `Bearer ${token}`)
  return headers;
}

function App() {
  const [personId, setPersonId] = useState('');
  const [personInfo, setPersonInfo] = useState({});

  const [selectedDevice, setSelectedDevice] = useState();


  // get person ID
  useEffect(() => {
    fetch(`${personApiUrl}/info`, {method: 'GET', headers: createAuthHeader()})
      .then((response) => {
          return response.json();
        })
        .then((data) => {
          setPersonId(data);
        });
  }, []);

  // get person info once ID is set
  useEffect(() => {
    fetch(`${personApiUrl}/${personId.id}`, {method: 'GET', headers: createAuthHeader()})
      .then((response) => {
          return response.json();
        })
        .then((data) => {
          setPersonInfo(data);
        });
  }, [personId]);

  // render either devices or zones view depending on whether a device was selected
  function renderDashboard() {
    if (!selectedDevice) {
      return <DevicesList personInfo={personInfo} setSelectedDevice={setSelectedDevice} />
    } else {
      return <ZonesList selectedDevice={selectedDevice} setSelectedDevice={setSelectedDevice} />
    }
  }

  return (
    <div className="App">
      {renderDashboard()}
    </div>
  );
}

export default App;
