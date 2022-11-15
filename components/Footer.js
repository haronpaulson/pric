import React from 'react';
import Link from 'next/link';

function Footer() {
  return (
    <div className=''>
        <div >
            <div className='h-4/6 bg-slate-800 text-red-200 '>
             
                    <ul className='flex justify-center space-x-2 p-2'>
                        <Link href="/"><li className='margin-right'>
                            Home
                        </li></Link>
                        <Link href="/About"><li className="margin-right">About</li></Link>
                        <Link href="/Books"><li className="margin-right">Books</li></Link>
                    </ul>
             
            </div>
            <div className=' h-2/6 text-white bg-slate-800 p-1 text-center'>
                <ul className='flex justify-center text-sm space-x-2 font-bold'>
                    <li>KNOWLEDGE -</li>
                    <li>WISDOM -</li>
                    <li>COMES</li>
                    <li>WITH READING</li>
                </ul>
                <p1 className="text-sm">Author - Jyotindra Nath Prasad</p1>
            </div>
        </div>
       
      
    </div>
  )
}

export default Footer;
