import InputForm from './InputForm';
import IpInfo from './IpInfo';
import style from './Top.module.css';

const Top = ({handleSubmit,handleChange,info,value}) => {
	return (
		<div className={style.container}>
			<header className={style.header}>
				<h1 className={style.title}>ip address tracker</h1>
			</header>
			<InputForm handleSubmit={(e) =>handleSubmit(e,value)} handleChange={handleChange} value={value} />
      <IpInfo info={info}/>
		</div>
	);
};

export default Top;
