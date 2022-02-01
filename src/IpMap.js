import {
	MapContainer,
	TileLayer,
	Marker,
	Popup,
	ZoomControl,
	useMap,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import myIcon from './MapMarker';
import Errormsg from './Errormsg';
import style from './IpMap.module.css';

const MoveMap = ({ position }) => {
	const map = useMap();
	map.flyTo(position);
	return null;
};

const IpMap = ({ position,error }) => {
	return (
		<main className={style.map_container}>
			<MapContainer
				className={style.map}
				center={position}
				zoom={13}
				scrollWheelZoom={false}
				zoomControl={false}>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
				/>
				<Marker position={position} icon={myIcon}>
					<Popup>
						A pretty CSS3 popup. <br /> Easily customizable.
					</Popup>
				</Marker>
				<ZoomControl position='bottomright' />
				<MoveMap position={position} />
			</MapContainer>
			{error.status && <Errormsg msg={error.message} />}
		</main>
	);
};

export default IpMap;
