import React from 'react'
import './Access.css'
import { RiParkingBoxLine } from "react-icons/ri";
import { IoIosPin } from "react-icons/io";
import { FaWheelchair } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const Access = () => {
  return (
    <div className='access'>
        <div className='access-content container'>
            <div className='access-flex'>

                <div className='access-flex-item'>
                    <h1><IoIosPin /></h1>
                    <h2>Central Location</h2>
                    <p>Centrally Located for Your Convenience.</p>
                </div>

                <div className='access-flex-item'>
                    <h1><RiParkingBoxLine /></h1>
                    <h2>Metered Parking Available</h2>
                    <p>Convenient Metered Parking Available</p>
                </div>

                <div className='access-flex-item'>
                    <h1><FaWheelchair /></h1>
                    <h2>Wheelchair-Accessible</h2>
                    <p>Wheelchair-Friendly Spaces for Everyone.</p>
                </div>

                <div className='access-flex-item'>
                    <h1><FaStar /></h1>
                    <h2>Quick Easy In/Out</h2>
                    <p>Experience Quick, Easy In-and-Out at Our Clinic</p>
                </div>



            </div>

        </div>
    </div>
  )
}

export default Access
