import Navigation from '../components/Navigation';
import Content from '../components/Content';
import React from 'react';
import BooksList from '../components/BooksList';
import Footer from "../components/Footer";


function Home() {
  return (
    <div className=' flex-wrap'>
      
      <div className=" bg-black mt-11 ml-9 mr-0 w-10/12 h-[430px] rounded-2xl shadow-2xl shadow-pin-700 lg:w-11/12 ">
 
        <Navigation />
    
        <Content />
      </div>
      <div className=" bg-black text-white mt-4 ml-9 w-10/12  rounded-2xl lg:w-11/12 pb-9   ">
        <BooksList/>

        
      </div>
      <div className='w-screen mt-0.5 h-full'>
        <Footer/>
      </div>
      
  
    
  </div>)
};


export default Home;