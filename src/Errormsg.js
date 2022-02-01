import style from './ErrorMsg.module.css'

const Errormsg = ({msg}) => {
  return( 
  <div className={style.msg_container}>
    {msg}
  </div>
  );
};

export default Errormsg;
