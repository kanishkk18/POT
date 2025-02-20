import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Room.css';
import Roomcarsouel from '@/css/roomcarsouel';
import { BackgroundBeamsWithCollision } from '@/components/ui/background-beams-with-collision';

const HomePage = () =>{

 
    const [dateTime, setDateTime] = useState(new Date().toLocaleString());

    useEffect(() => {
        const timer = setInterval(() => {
            setDateTime(new Date().toLocaleString());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const [value, setValue] = useState();


    
  return (
    
  <BackgroundBeamsWithCollision>
    
    <div className="room h-screen relative overflow-auto">
   
    <div className="roomnav">
  <span className="navlogo"> 
    <Link to='/'> <img src="https://res.cloudinary.com/kanishkkcloud18/image/upload/v1718475378/CONFERIO/gbkp0siuxyro0cgjq9rq.png" alt="" />
    </Link></span> 
    
   
      <div className="nav-content">
        <span className="datetime">{dateTime}</span>
        <div className="setting">
          <img src="https://res.cloudinary.com/kanishkkcloud18/image/upload/v1718892271/CONFERIO/skei3mn1qhh70a33zymx.svg" alt="" height={40} width={40} />
        </div>
        <div className="profile">

        
        </div>
        </div>
    </div>

    <div className="h-full flex justify-center items-center">
    <div className="roomhero mt-[-150px]">
      <div className="roomtext">
      <h1>High-quality and secure video  <br/>calls and meetings </h1>
      <p>Connect, Collaborate and Share from anywhere with Conferio</p>
   
    <div className="roombuttons z-50">
    <Link to="https://8080-idx-briefinggit-1727187725691.cluster-nx3nmmkbnfe54q3dd4pfbgilpc.cloudworkstations.dev/"> <button className="roombtn">
        New meeting
      </button></Link> 
    <input 
        className='room-input' type="text" placeholder='Enter a code or link'/>
        <button className='joinbtn' >Join</button>
        </div>
         </div>

         <div className="w-[40%] flex justify-center items-center">
         <Roomcarsouel/>
         </div>
         
         </div>
        
      
        </div> 
       
</div>
 </BackgroundBeamsWithCollision>
  )
};

export default HomePage;
