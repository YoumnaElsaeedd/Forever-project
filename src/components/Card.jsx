import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({obj} ) => {
  if (!obj) {
    return <div>Loading....</div>;
  }

  return (
    <div>
      <Link to={`/product/${obj._id}`}>
        <img src={obj.image[0]}className='hover:scale-105 my-4' alt={obj.name} />
      </Link>
      <h1 className="w-full">{obj.name}</h1>
      <p>{obj.price}$</p>
    </div>
  );
}

export default Card;
