import style from './IpInfo.module.css';
const IpInfo = ({ info }) => {
	return (
		<ul className={style.info_list}>
			<li className={style.info_li}>
				<h2 className={style.item_title}>ip address</h2>
				<span className={style.item_value}>
                {info.ip  || info.ip === '' ? info.ip : 'Not Available'}
                </span>
			</li>
			<li className={style.info_li}>
				<h2 className={style.item_title}>location</h2>
				<span className={style.item_value}>
                {info.location  || info.location === '' ? info.location : 'Not Available'}
                </span>
			</li>
			<li className={style.info_li}>
				<h2 className={style.item_title}>timezone</h2>
				<span className={style.item_value}>
                {info.timezone||info.timezone === ''  ? info.timezone : 'Not Available'}
                </span>
			</li>
			<li className={style.info_li}>
				<h2 className={style.item_title}>isp</h2>
				<span className={style.item_value}>
                {info.isp|| info.isp === '' ? info.isp : 'Not Available'}
                </span>
			</li>
		</ul>
	);
};

export default IpInfo;
