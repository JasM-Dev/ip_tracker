import style from './InputForm.module.css';

const InputForm = ({ handleChange, handleSubmit, value }) => {
	return (
		<form className={style.ip_form} onSubmit={handleSubmit}>
			<div className={style.bttn_input_container}>
				<input
					type='text'
					value={value}
					onChange={(e)=> handleChange(e)}
					className={style.ip_input}
				/>
				<button className={style.form_bttn} type='submit'>
					<svg
						width='11'
						height='16'
						viewBox='0 0 11 16'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<path d='M2 2L8 8L2 14' />
					</svg>
				</button>
			</div>
		</form>
	);
};

export default InputForm;
