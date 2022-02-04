import { useEffect, useState, useCallback } from 'react';
import TopBar from './TopBar';
import IpMap from './IpMap';

import axios from 'axios';
const API_KEY = process.env.REACT_APP_GEO_API_KEY;

function App() {
	const [error, setError] = useState({
		status: false,
		message: '',
	});
	const [position, setPosition] = useState([28.385, -81.5707]);
	const [ip, setIp] = useState('');
	const [ipInfo, setIpInfo] = useState({
		ip: '',
		location: '',
		timezone: '',
		isp: '',
	});

	const url = `https://geo.ipify.org/api/v1?apiKey=${API_KEY}`;

	const getIpInfo = useCallback(() => {
		const regexExp =
			/^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gi;

		if ( ipInfo.ip !== '' && !regexExp.test(ipInfo.ip)) {
			setError({
				status: true,
				message: 'Please enter a valid ip address',
			});
			return;
		} else {
			axios.get(url + `&ipAddress=${ipInfo.ip}`)
				.then(res => {
					const { city, timezone, region, lat, lng } = res.data.location;
					setIpInfo(prev => ({
						...prev,
						ip: res.data.ip,
						location: `${city},${region}`,
						timezone: timezone,
						isp: res.data.isp,
					}));
					setError({ status: false, message: '' });
					setPosition([lat, lng]);
				})
				.catch(err => {
					setError({ status: true, message: err.message });
				});
		}
	}, [ipInfo.ip, url]);

	useEffect(() => {
		getIpInfo();
	}, [getIpInfo, ipInfo.ip]);

	function ipInput(e) {
		const { value } = e.target;
		setIp(value);
	}

	function submitform(e, ip) {
		e.preventDefault();
		setIpInfo(prev => ({ ...prev, ip: ip }));
	}
	return (
		<div className='app_container'>
			<TopBar
				handleSubmit={submitform}
				handleChange={ipInput}
				value={ip}
				info={ipInfo}
			/>

			<IpMap position={position} error={error} />
		</div>
	);
}

export default App;
