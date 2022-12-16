import React from 'react';
import { Link } from 'react-router-dom';

import Example from '../components/Example';

const Home2 = () => {

  return (
    <>
      <Example />
      <Link to='/'>Home</Link>
    </>
  );
}

export default Home2;