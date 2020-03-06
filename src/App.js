import React, { useState, useEffect } from 'react';
import './App.scss';
import DevicesList from './components/DevicesList.js'
import ZonesList from './components/ZonesList.js'

export const apiUrl = 'https://api.rach.io/1/public/person';
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
    fetch(`${apiUrl}/info`, {method: 'GET', headers: createAuthHeader()})
      .then((response) => {
          return response.json();
        })
        .then((data) => {
          // console.log(data)
          setPersonId(data);
        });
  }, []);

  // get person info once ID is set
  useEffect(() => {
    fetch(`${apiUrl}/${personId.id}`, {method: 'GET', headers: createAuthHeader()})
      .then((response) => {
          return response.json();
        })
        .then((data) => {
          setPersonInfo(data);
        });
  }, [personId]);

  function renderDashboard() {
    console.log(selectedDevice)
    if (!selectedDevice) {
      return <DevicesList personInfo={personInfo} setSelectedDevice={setSelectedDevice} />
    } else {
      return <ZonesList selectedDevice={selectedDevice} setSelectedDevice={setSelectedDevice} />
    }
  }

  return (
    <div className="App">
      {/*<DevicesList personInfo={personInfo} setSelectedDevice={setSelectedDevice} />*/}
      {renderDashboard()}
    </div>
  );
}

export default App;
