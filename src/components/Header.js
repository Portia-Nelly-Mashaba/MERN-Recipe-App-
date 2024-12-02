import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FaAppleAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    const storedName = localStorage.getItem('userName');
    if (userId && storedName) {
      setUserName(storedName.split('@')[0]); // Show only the name part before the '@'
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userId');
    localStorage.removeItem('userName');
    setIsAuthenticated(false);
    setUserName('');
    navigate('/login');
  };

  return (
    <div className="header-container">
      <Navbar expand="lg" className="justify-content-between">
        <Nav className="left-links">
          <Nav.Link href="/home" style={{ color: '#9A616D' }}>HOME</Nav.Link>
          <Nav.Link href="/add-recipe">ADD RECIPE</Nav.Link>
        </Nav>
        <div className="title-container">
          <FaAppleAlt className="me-3" style={{ color: '#9A616D', fontSize: '2rem' }} />
          <span className="title">MZANSI FLAVA</span>
        </div>
        <Nav className="social-icons">
          {isAuthenticated ? (
            <>
              <Nav.Link href="/profile" style={{ color: '#9A616D', textTransform: 'uppercase' }}>
                {userName}
              </Nav.Link>
              <Nav.Link onClick={handleLogout}>LOGOUT</Nav.Link>
            </>
          ) : (
            <Nav.Link href="/login">LOGIN</Nav.Link>
          )}
          <Nav.Link href="#twitter" style={{ color: '#9A616D' }}>
            <i className="fab fa-twitter"></i>
          </Nav.Link>
          <Nav.Link href="#instagram" style={{ color: '#9A616D' }}>
            <i className="fab fa-instagram"></i>
          </Nav.Link>
        </Nav>
      </Navbar>
      <div className="image-container">
        <div className="gradient-overlay"></div>
        <img
          src="https://images.pexels.com/photos/106877/pexels-photo-106877.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Mzansi Flava"
          className="header-image"
        />
      </div>
    </div>
  );
};

export default Header;
