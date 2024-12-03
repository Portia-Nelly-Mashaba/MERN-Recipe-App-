import React from 'react';
import { FaTrash, FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Badge from './Badge';

const formatDate = (isoDate) => {
  const date = new Date(isoDate);
  return date.toLocaleDateString('en-GB'); // Formats as DD-MM-YYYY
};
const Card = ({ name, ingredients, instructions, category, imageUrl, handleDelete, createdAt, _id }) => {
  return (
    <div className="card p-2 shadow-sm" style={{ maxWidth: '450px' }}>
      <img
        src={imageUrl}
        className="img-fluid mb-3"
        alt={name}
        style={{ height: '300px', objectFit: 'cover' }}
      />
      <div className="d-flex align-items-center mb-2 text-muted">
        <img
          src="https://via.placeholder.com/30"
          alt="Admin"
          className="rounded-circle me-2"
        />
        <div>
        Posted &middot; {formatDate(createdAt)} &middot;
        </div>
      </div>
      {/* Name with hover styling */}
      <Link
        to={`/recipe/${_id}`}
        className="name-link"
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        <h5 className="fw-bold" style={{ cursor: 'pointer' }}>{name}</h5>
      </Link>
      <p className="fw-bold mb-0">Ingredients</p>
      <p className="text-muted" style={{ fontSize: '0.9rem' }}>
        {ingredients}
      </p>
      <p className="fw-bold mb-0">Instructions</p>
      <p className="text-muted" style={{ fontSize: '0.9rem' }}>
        {instructions}
        <Link to={`/recipe/${
_id}`} style={{ textDecoration: 'none', color: 'blue' }}>
          Read More
        </Link>
      </p>
      <hr />
      <div className="d-flex justify-content-between align-items-center text-muted">
        <span><Badge>{category}</Badge></span>
        <div className="d-flex align-items-center">
          <button
          onClick={() => handleDelete(_id)}
            className="btn"
            style={{ border: 'none', background: 'transparent', padding: 0 }}
          >
            <FaTrash color="red" style={{ cursor: 'pointer', fontSize: '1.2rem' }} />
          </button>
          <Link to={`/edit/${_id}`} style={{ textDecoration: 'none', marginLeft: '10px' }}>
            <FaEdit color="blue" style={{ cursor: 'pointer', fontSize: '1.3rem', color:'#04babf' }} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
