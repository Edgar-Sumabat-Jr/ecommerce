import { useState } from 'react'
import axios from 'axios';

function LoginForm() {
  const [inputs, setInputs] = useState({});
  const [error, setError] = useState('');
  
    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
      console.log(inputs)
    };
    
    const handleSubmit = async (event) => {
      event.preventDefault();
      const { email, password } = inputs; // Destructure from inputs state
      try {
        const response = await axios.post('http://localhost:8000/api/login/', {
          email: email,
          password: password
        });
        const { access, refresh } = response.data;
        localStorage.setItem('access_token', access);
        console.log("access: ", access)
        localStorage.setItem('refresh_token', refresh);
        console.log("refresh: ", refresh)
        // Redirect or update UI as needed
        console.log('Login successful');
        alert(JSON.stringify(inputs, null, 2));
      }
      catch (err) {
        setError('Invalid Credentials');
        console.error(err);
      }
    };

  return (
    <form onSubmit={handleSubmit}>
      {/* <label>Username:
        <input
          type="text"
          name="username" 
          value={inputs.username || ""}
          onChange={handleChange} 
        />
      </label> */}

      <label>Email:
        <input
          type="email"
          name="email" 
          value={inputs.email || ""}
          onChange={handleChange} 
        />
      </label>
<br />

      <label>Password:
        <input 
          type="password"
          name="password"
          value={inputs.password || ""}
          onChange={handleChange}
          />
      </label>
<br />
      <input type="submit" />
    </form>
  )
}

export default LoginForm