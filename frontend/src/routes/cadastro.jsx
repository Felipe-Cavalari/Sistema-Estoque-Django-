import '../styles/cadastro.css'
import { useState } from 'react';

function Login(){
  const [email, setEmail] = useState('');
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');


  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleUserChange = (event) => {
    setUser(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Email:', email);
    console.log('User:', user)
    console.log('Password:', password);
  };

  return (
    <div className='RegisterPage'>
        <div className="RegisterContainer">
            <h1>Sistema de Estoque</h1>
            <form onSubmit={handleSubmit}>
                <h4>Cadastro</h4>
                <div className='form-group'>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={handleEmailChange}
                        required
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor="user">Usuario:</label>
                    <input
                        type='text'
                        id="user"
                        value={user}
                        onChange={handleUserChange}
                        required
                    />
                </div>
                
                <div className='form-group'>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                        required
                    />
                </div>
                <button id='btn_login' type="submit">Login</button>
            </form>
        </div>
    </div>

  );
}



export default Login