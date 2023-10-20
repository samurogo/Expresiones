function Input({ name, title, type, onChange }) {
    return ( 
      <div>
        <label htmlFor={name}>{title}</label>
        <input id={name} type={type} onChange={onChange}/>
      </div>
    );
  }
  
  export default Input;
  