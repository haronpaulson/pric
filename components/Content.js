import React from 'react';
import Image from 'next/image';
import {AiOutlineSearch, AiOutlineRight} from "react-icons/ai";
import {BsHandThumbsUpFill} from "react-icons/bs";
import Link from "next/link";



function Content() {
    const prefix = "/author-web";
  return (
    <div className='flex images justify-between' >
        <div className='w-5/12  justify-end pl-2 space-y-[90px] md:space-y-[74px] xl:space-y-[78px] '>
            <div className='mt-20' >
            
                <p1 className=' mb-5 text-sm   shadow-xl  text-white p-1 font-serif md:text-lg lg:text-xl'><span className=' font-extrabold text-black'>Explore the </span> <span className=' sm: text-center text-md  lg:pl-0 lg:text-2xl ' >Author's World</span></p1>
            </div>
                <h1 className=' w-3/4 text-slate-300  pl-1 pt-6 p-2 font-serif text-lg mb-9 font-bold shadow-lg  shadow-cyan-400 rounded-md mt-20  lg:text-2xl md:pl-5'>Read to  Succeed</h1>
            <div>
            
            </div>
            <div className='hidden absolute top-[-3%] text-center left-5 bg-yellow-600 font-bold text-md w-full type md:text-lg'>
                Buy your favourite books at the best price.
            </div>
            
            <div className='mt-7   rounded-full items-center w-60  '>
                <h1>.</h1>
              
            </div>
            
            <Link href="/About"><button type="text" className='hidden md:inline-flex bg-black border-2 font-serif items-center  rounded-md p-1 font-semibold absolute top-[450px] left-[52%] lg:left-[69%] xl:left-[73%] text-yellow-800 '>Know more about the Author<AiOutlineRight className=' ml-1 text-white '/></button></Link>
          

        </div>
        <div className='hidden pl-12 pt-9 lg:pl-28 lg:pt-36'> 
            <a href="https://www.amazon.in/gp/product/B0B68YVLGJ/ref=dbs_a_def_rwt_hsch_vapi_tkin_p1_i3"><Image src="/book4.jpeg" alt="bookimage" width='90' height='50' objectFit='contain' className='lg:w-[150px]'/></a>
            <h1 className='font-bold mt-1 font-serif text-2xl text-white pl-3 decoration-clone md:text-3xl'>Read to succeed</h1>
        </div>
        <div className='  md:ml-10 mr-0 pr-0 mt-10 md:inline-flex xl:ml-3'>
            <div className=' hidden  pt-44 text-center'>
                
                <input type='text' placeholder="E-mail" className="w-48 h-8 rounded-sm p-2 border-2 bg-slate-300 " ></input>
                <button className='flex border-2 border-gray-400 font-serif items-center rounded-full  bg-white text-black font-bold p-1 mt-3 w-32 justify-center ml-8'>Subscribe<BsHandThumbsUpFill className='ml-2'/></button>
            </div>
            
            <div className=' ml-0  w-[140px]  h-[200px] text-center  space-y-3 rounded-lg  font-bold lg:ml-6'>
                <Image src="/author-web/author1.jpeg" alt="author" width="130" height="80" className=' rounded-full hidden '/>
                <img src="author1.jpeg" className='w-28 pr-0 object-contain rounded-full' alt='authh' /> 
                <h1 className=' font-extrabold text-white pr-5'>JYOTINDRA NATH PRASAD's <br/>Collection</h1>
                <p1><span className='text-sm text-orange-300 pr-6'>12  books</span></p1>
                
            </div>
        </div>
      
    </div>
  )
};
export default Content;
