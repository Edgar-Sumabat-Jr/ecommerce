import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/axios';

function RegisterForm() {
    const [inputs, setInputs] = useState({});
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;

        setInputs(values => ({
            ...values,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const {
            username,
            email,
            password,
            password2
        } = inputs;

        setError('');
        setLoading(true);

        try {
            const response = await api.post(
                '/api/users/register/',
                {
                    username,
                    email,
                    password,
                    password2,
                }
            );

            console.log('Registration successful:', response.data);

            setLoading(false);

            // Registration succeeded.
            // Redirect to login for now.
            navigate('/login');

        } catch (err) {
            setLoading(false);

            if (err.response && err.response.data) {
                const errorData = err.response.data;

                if (errorData.detail) {
                    const messages = Array.isArray(errorData.detail)
                        ? errorData.detail.join('\n')
                        : errorData.detail;

                    setError(messages);
                } else {
                    const messages = Object.values(errorData)
                        .flat()
                        .join('\n');

                    setError(messages);
                }
            } else {
                setError('An unexpected error occurred.');
            }

            console.error('Registration error:', err);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input
                    type="text"
                    name="username"
                    value={inputs.username || ''}
                    onChange={handleChange}
                />
            </label>

            <br />

            <label>
                Email:
                <input
                    type="email"
                    name="email"
                    value={inputs.email || ''}
                    onChange={handleChange}
                />
            </label>

            <br />

            <label>
                Password:
                <input
                    type="password"
                    name="password"
                    value={inputs.password || ''}
                    onChange={handleChange}
                />
            </label>

            <br />

            <label>
                Confirm Password:
                <input
                    type="password"
                    name="password2"
                    value={inputs.password2 || ''}
                    onChange={handleChange}
                />
            </label>

            <br />

            <button type="submit" disabled={loading}>
                {loading ? 'Registering...' : 'Register'}
            </button>

            {error && (
                <div style={{ color: 'red', marginTop: '10px' }}>
                    {error.split('\n').map((msg, index) => (
                        <div key={index}>{msg}</div>
                    ))}
                </div>
            )}
        </form>
    );
}

export default RegisterForm;