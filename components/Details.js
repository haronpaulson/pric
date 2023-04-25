import React, { useState } from "react";
import {AiOutlineDown, AiOutlineArrowUp} from "react-icons/ai";


function Details () {
    
    var totalemploye=0;
    var userss;
    var grandtotal;
    var date = new Date().toLocaleDateString("en-IN");
    var today = new Date ();
    var base_price = 1;
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();
    var currenttime = `${hours}:${minutes}:${seconds}`;
    const[locations, setLocations] = useState(["Melbourne", "Perth","Adelaide", "Regional Victoria", "Queensland"]);
    console.log(typeof(locations));
    var[workhours, setWork] = useState("");
    const[totaldays, setTotaldays] = useState();
    const[dropdown, setDropdown] = useState();
    const[typeofday, setTypeofday] = useState(false);
    const[totalemployees, setTotalemployees] = useState();
    const[companyname, setCompanyname] = useState("");
    const[companynumber, setCompanynumber] = useState("");
    const[location, setLocation] = useState("");
    const[quote, setQuote] = useState(false);
    const[distancetravelled, setDistancetravelled] = useState();
    const[particular, setParticular] = useState("Select your Location"); 
    
    if (totalemployees > 20 ) {
        if(workhours == "normal" &&  particular == "Melbourne" ) {
            base_price = 39.95;  
        }
        if(workhours == "outside" &&  particular == "Melbourne" ) {
            base_price = 47.94;  
        }
        if(workhours == "normal" &&  particular == "Adelaide" ) {
            base_price = 39.95;  
        }
        if(workhours == "outside" &&  particular == "Adelaide" ) {
            base_price = 47.94;  
        }
        if(workhours == "normal" &&  particular == "Regional Victoria") {
            base_price = 40.50;  
        }
        if(workhours == "outside" &&  particular == "Regional Victoria" ) {
            base_price = 47.94;  
        }

        if(workhours == "normal" &&  particular == "Queensland" ) {
            base_price = 49.5;  
        }

        if(workhours == "outside" &&  particular == "Queensland" ) {
            base_price = 52.5;  
        }
        
        if(workhours == "outside") {
            totalemploye = typeofday == "weekend"? Number(totalemployees) * 79.90: Number(totalemployees) * 47.94; 
        }
        
        
    };    

    if (totalemployees >= 30 ) {
        if(workhours == "normal" &&  particular == "Melbourne" ) {
            base_price = 37.95;  
        }
        if(workhours == "outside" &&  particular == "Melbourne" ) {
            base_price = 45.94;  
        }
        if(workhours == "normal" &&  particular == "Adelaide" ) {
            base_price = 37.95;  
        }
        if(workhours == "outside" &&  particular == "Adelaide" ) {
            base_price = 45.94;  
        }
        if(workhours == "normal" &&  particular == "Regional Victoria") {
            base_price = 38.50;  
        }
        if(workhours == "outside" &&  particular == "Regional Victoria" ) {
            base_price = 46.94;  
        }

        if(workhours == "normal" &&  particular == "Queensland" ) {
            base_price = 47.5;  
        }

        if(workhours == "outside" &&  particular == "Queensland" ) {
            base_price = 50.5;  
        }
        
       
        
    }; 


    if (totalemployees <= 20) {
     //   totalemploye = workhours == "normal"? 995: workhours == "outside" 1194;
      //  if(workhours == "normal") {
        //    totalemploye = 995;
       // }
       
        if(workhours == "normal") {
         //   if(typeofday == "weekday") {
           //     totalemploye = 1990;
          //  };
            totalemploye = typeofday == "weekend"? 1990: 995 ;
        };
        if(workhours == "outside") {
            totalemploye = typeofday == "weekend"? 1990: 1194 ;
        }
       // if( typeofday == "weekend") {
         //   totalemploye = 2021;
       // }
        userss = "(0-20)"; 
       
        grandtotal = Number(totalemploye) * Number(totaldays) ;
    };
    if (totalemployees > 20 ) {
        if(workhours == "normal") {
            totalemploye = typeofday == "weekend"? Number(totalemployees) * 79.90: Number(totalemployees) * Number(base_price);
        }
        
        if(workhours == "outside") {
            totalemploye = typeofday == "weekend"? Number(totalemployees) * 79.90: Number(totalemployees) * Number(base_price); 
        }
        
        userss = "(21-29)";  
        grandtotal = Number(totalemploye) * Number(totaldays) ;    
    };
    if (totalemployees >= 30) {
        if(workhours == "normal") {
            totalemploye = typeofday == "weekend"? Number(totalemployees) * 75.90: Number(totalemployees) * Number(base_price); 
        }
        
        if(workhours == "outside") {
            totalemploye = typeofday == "weekend"? Number(totalemployees) * 75.90: Number(totalemployees) * Number(base_price); 
        }
        //totalemploye = Number(totalemployees) * 37.95;
        totalemploye = Math.round(totalemploye);
        userss = "(Above 30)"; 
        grandtotal = Number(totalemploye) * Number(totaldays) ;
    };
    if (totalemployees > 100) {
        if(workhours == "normal") {
            totalemploye = typeofday == "weekend"? Number(totalemployees) * 73.90: Number(totalemployees) * 36.95; 
        }
        
        if(workhours == "outside") {
            totalemploye = typeofday == "weekend"? Number(totalemployees) * 73.90: Number(totalemployees) * 44.34; 
        }
        //totalemploye = (Number(totalemployees) * 36.95);
        totalemploye = Math.round(totalemploye);
        userss = "(Above 100)"; 
        grandtotal = Number(totalemploye) * Number(totaldays) ;
    };    
    if(!totalemployees) {
        totalemploye = 0;
        userss = "(0)";
      
    }
    if(distancetravelled<100){
        var selector = document.querySelector('.checking').innerText = "Enter a value above 100";
    }


    var tax = Number(grandtotal) * Number(0.1);
    var distance = distancetravelled>100? Math.round(distancetravelled * 0.8): 1;
    var accomodation = Number(totaldays) * 120
    var travel_cost = Number(100 + 50) + Number(accomodation) + Number(distance);
    var overall_total =  distancetravelled<100?  Number(grandtotal) + Number(tax): Number(grandtotal) + Number(tax) + Number(travel_cost) ;
 

    
    return (
        <div className=" flex justify-between ">
           
            <div className=" space-y-2 w-2/6 pl-12 ">
                
                <div className="flex justify-between">
                    
                    <label><span className=" font-semibold">COMPANY NAME </span></label>
                    <input type='text' className=" border-2 p-1" placeholder="Enter company's name" onChange={(e) => setCompanyname(e.target.value)}></input>    
                </div>
                <div className="flex justify-between">
                    <label><span className=" font-semibold">CONTACT NUMBER</span></label>
                    <input type='text' className=" border-2 p-1" placeholder="Enter contact details" onChange={(e) => setCompanynumber(e.target.value)}></input>    
                </div>
                <div className="flex justify-between">
                    <label> <span className=" font-semibold">NO. OF EMPLOYEES</span></label>
                    <input type='text' className=" border-2 p-1" placeholder="Enter the no. of employees" onChange={(e) => setTotalemployees(e.target.value)}></input>    
                </div>
                <div className="flex justify-between">
                    <label><span className=" font-semibold">NUMBER OF DAYS</span></label>
                    <input type='text' className=" border-2 p-1" placeholder="Enter the no. of days" onChange={(e) => setTotaldays(e.target.value)}></input>    
                </div>
                <div className="flex justify-between">
                    <label><span className=" font-semibold">DISTANCE TO BE TRAVELLED</span><br/><span className=" text-sm justify-center ">(Required if location is more than 100 Kms)-Additional travel cost</span></label>
                    <div>
                    <input type='text' className=" border-2 p-1 ml-3" placeholder="Enter distance from office" onChange={(e) => setDistancetravelled(e.target.value)}></input> 
                    
                      <p1 className="checking text-red-600 pl-3" id="check">{selector}</p1> 
                    </div>
                    
                       
                </div>
                <div className="flex justify-between">
                    <label><span className=" font-semibold">LOCATION</span> </label>
                    <div>
                    <div className=" flex border-2 items-center">
                        <input type='text' className="  p-1" placeholder={particular} onChange={(e) => setLocation(e.target.value)} ></input> {!dropdown ? <div> <AiOutlineDown onClick={() => setDropdown(!dropdown)}/></div>: <div> <AiOutlineArrowUp onClick={() => setDropdown(!dropdown)}/></div>}
                    </div>
                    <div>
                    {dropdown && <ul className=" border-2 text-center pt-1">
                       <div>
                       {locations.map((locs, i) =>  
                        <li className=" border-b bg-black text-white hover:bg-gray-600 cursor-pointer"  id={locs.key} key={locs.i} name={locs} onClick={() => ((setParticular(locs)) ,setDropdown(false))} >{locs} </li>)
                       }
                       </div>
                    </ul>}</div>
                       
                    <p1 className="check"></p1>
                    </div>
                </div>
                <div className="flex justify-between">
                <label><span className=" font-semibold">SELECT WORK HOURS</span></label>
                <div className=" flex-col space-y-2">
                    <label><input type='radio' className="mb-2" value="normal" name="normal hours" onChange={(e) => setWork(e.target.value)} />Normal Work Hours <br/><span className=" pl-10">(9am-5pm)</span><br/></label>    
                    <label><input type='radio' className="" value="outside" name="normal hours" onChange={(e) => setWork(e.target.value)} />Outside normal work Hours <br/><span className="pl-10">(6pm-9am)</span></label>    
                </div>
                           
                </div>
                <div className="flex justify-between">
                <label><span className=" font-semibold">SERVICE DAY</span><br/>(Weekday/Weekend)</label>
                <div className=" flex-col space-y-2">
                    <label><input type='radio' className="mb-2" value="weekday" name="typeday" onChange={(e) => setTypeofday(e.target.value)} />Weekday <br/><span className=" pl-10">(Monday-Friday)</span><br/></label>    
                    <label><input type='radio' className="" value="weekend" name="typeday" onChange={(e) => setTypeofday(e.target.value)} />Weekend <br/><span className="pl-10">(Sat-Sun/Public Holidays)</span></label>    
                </div>
                           
                </div>

            {typeofday && totalemployees?<h1 className=" p-2 mr-2 font-bold  bg-gray-700 text-sm text-white">BASE PRICE per day as per your selections = <span className="  text-red-400 text-lg !important p-2   ml-5 "> {Math.round(totalemploye)} </span>$<br/> <span className=" text-red-400">({workhours.toUpperCase()} Work hours / </span><span className=" text-red-400">{typeofday.toUpperCase()} )</span> </h1>:<h1></h1>}
            <div className=" text-center  ">
            <button onClick={() => setQuote(!quote)} className=" border-4 p-2 rounded-sm bg-blue-800 font-bold text-white hover:bg-blue-300 hover:text-black">Get Quote</button>   
            </div>
            
            </div>
            {quote &&
            <div className=" bg w-3/6 shadow-2xl p-3 shadow-black ">
                <h1 className=" text-center text-blue-800 font-extrabold text-2xl">Service Quotation</h1>
                <div className="flex justify-between pt-5 bg-bl">
                    <div className="">
                        <h2 className=" text-blue-900 font-bold">QUOTATION TO:</h2>
                        <h1>[COMPANY NAME] : <span className=" font-bold">{companyname}</span></h1>
                        <p1>[LOCATION]</p1> :  <span className=" font-bold">{particular} </span><br/>
                        <p1>[CONTACT DETAILS]</p1> :  <span className=" font-bold">{companynumber}</span><br/>
                        
                    </div>
                    <div>
                    <h1 className=" text-blue-900 font-bold"> DETAILS</h1>
                    <h2>[DATE] <span className=" font-bold"> :{date}</span></h2>
                    <p1>[TIME] <span className=" font-bold"> :{currenttime}</span></p1><br/>
                    <p1>[CUSTOMER ID]</p1> : <span className=" font-bold">62537290</span>
                    </div>

               
                </div>
                <table className="  mx-auto border-2 w-full mt-10">
                <tr className=" bg-blue-700">
                    <th className=" p-3">S.No</th>
                    <th>Service Details </th>
                    <th>Price<br/>(Flat price)</th>
                    <th>Service duration<br/>(No.of days)</th>
                    <th> Total</th>
                </tr>
                <tr className=" text-center">
                    <td>1</td>
                    <td> Audiometric Assessment<br/>{userss}users</td>
                    <td>{Math.round(totalemploye)}  $</td>
                    <td>{totaldays}</td>
                    <td>{Math.round(grandtotal)} $</td>
                   


                    
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className=" text-end pr-5">SUB-TOTAL</td>
                    <td className=" pl-5">{Math.round(grandtotal)} $</td>
                    
                </tr>
                <tr>
                <td></td>
                <td></td>
                <td></td>
                <td className=" text-end pr-6">TAX @ 10%</td>
                <td className=" pl-5">{Math.round(tax )} $</td>
                
            </tr>
            <tr>
            <td></td>
            <td></td>
            <td></td>
            {distancetravelled>100?<td className=" text-end pr-6">TRAVELCOST</td>: <td className=" text-end pr-6"></td>}
            
            {distancetravelled>100?<td className=" pl-5">{travel_cost} $</td>: <td className=" pl-5"></td>}
          
            
        </tr>
            <tr className=" border-t-2 font-bold text-2xl">
            <td></td>
            <td></td>
            <td></td>
            <td className=" text-end pr-6"> GRAND TOTAL</td>
            <td className=" pl-5">{Math.round(overall_total, 1)} $</td>
            
        </tr>
            
            </table>
            
                <div>
                    <h1 className=" font-bold ml-10 mt-8 text-blue-700">Terms and conditions</h1>
                    <ol className=" list-outside text-black">
                    <li className=" ml-10  text-black">The prices displayed are fixed price</li>
                    <li className=" ml-10  text-black">Any payment made will be non-refundable</li>
                    </ol>
                    
                </div>
            </div>
            }
        </div>
    )
}


function Total () {
    var total;
    if (totalemployees < 10) {
        total = 995;
   }
   else total=2;

   return (<td>{total}</td>);
}


export default Details;
