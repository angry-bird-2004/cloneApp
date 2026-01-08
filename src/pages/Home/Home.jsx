import React from 'react';
import Aside from './Aside/Aside';
import Main from './Main/Main';


const Home = () => {
  return (
    <>
    <div className='flex min-h-screen bg-[#030712]'>
      <Aside />
      <Main />
    </div>
    </>
  );
};

export default Home;
