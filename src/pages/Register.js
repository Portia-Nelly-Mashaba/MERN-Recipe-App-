import React, { useState } from 'react';
import { FaAppleAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch('http://localhost:8080/api/v1/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password,
            }),
        });

        console.log(response);

        if (response.ok) {
            const user = await response.json();
            localStorage.setItem('user', JSON.stringify(user));
            setMessage('Registration successful!');
            navigate('/home');
        } else {
            const errorData = await response.json();
            console.error('Error response:', errorData);
            setMessage(errorData.error || 'Registration failed. Please try again.');
        }
    } catch (error) {
        console.error('Error:', error);
        setMessage('An error occurred. Please try again later.');
    }
};

  
  return (
    <section className="vh-100" style={{ backgroundColor: '#9A616D' }}>
      <div className="container py-5 vh-70">
        <div className="row d-flex justify-content-center align-items-center h-70">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: '1rem' }}>
              <div className="row g-0">
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form onSubmit={handleRegister}>
                      <div className="d-flex align-items-center mb-3 pb-1">
                        <FaAppleAlt className="me-3" style={{ color: '#9A616D', fontSize: '2rem' }} />
                        <span className="h1 fw-bold mb-0">Mzansi Flava App</span>
                      </div>
                      <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>Create your account</h5>

                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="form2ExampleName"
                          className="form-control form-control-lg"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                        <label className="form-label" htmlFor="form2ExampleName">Full Name</label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="form2ExampleEmail"
                          className="form-control form-control-lg"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                        <label className="form-label" htmlFor="form2ExampleEmail">Email address</label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="form2ExamplePassword"
                          className="form-control form-control-lg"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                        <label className="form-label" htmlFor="form2ExamplePassword">Password</label>
                      </div>

                      <div className="pt-1 mb-4">
                        <button
                          className="btn btn-block"
                          style={{ backgroundColor: '#9A616D', color: 'white' }}
                          type="submit"
                        >
                          Register
                        </button>
                      </div>

                      {message && <p className="text-center" style={{ color: '#9A616D' }}>{message}</p>}

                      <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>
                        Already have an account? <a href="/login" style={{ color: '#393f81' }}>Sign in here</a>
                      </p>
                    </form>
                  </div>
                </div>

                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src="https://images.pexels.com/photos/9589798/pexels-photo-9589798.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="register form"
                    className="img-fluid"
                    style={{ borderRadius: '0 1rem 1rem 0', objectFit: 'cover', height: '100%' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
