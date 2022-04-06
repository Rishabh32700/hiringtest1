import React from 'react'
import BottomComponentPage2RightNavbar from '../bottomComponentPage2RightNavbar/BottomComponentPage2RightNavbar'

import image from '../../assets/my pic.jpg'

import { MdAddBox } from 'react-icons/md'


import './bottomComponentPage2right.css'

const bottomComponentPage2Right = () => {
    return (
        <>
            <div className="bottomComponentPage2Right__container">
                <BottomComponentPage2RightNavbar />
                <div className="edit__details__container">
                    <div className="edit__details">
                        <img src={image} alt="" />
                        <form>
                            <div className="inputs">
                                <label for="fname">First name:</label>
                                <input type="text" id="fname" name="fname" placeholder='Victor' />
                            </div>

                            <div className="inputs">
                                <label for="fname">Last name:</label>
                                <input type="text" id="fname" name="fname" placeholder='Bent' />
                            </div>

                            <div className="inputs">
                                <label for="fname">Mobile Number:</label>
                                <input type="text" id="fname" name="fname" placeholder='+1 123456789' />
                            </div>

                            <div className="inputs">
                                <label for="fname">Email Address:</label>
                                <input type="text" id="fname" name="fname" placeholder='bent@v.com' />
                            </div>
                        </form>
                    </div>
                    <form className='form2'>
                        <div className="inputs">
                            <label for="fname">Address <span className='span1'><MdAddBox /></span></label>
                            <input type="text" id="fname" name="fname" placeholder='251 Beeghely Street, Waco, Texas' />
                        </div>

                        <div className="inputs">
                            <label for="fname">Credit Card  <span className='span2'><MdAddBox /></span></label>
                            <input type="text" id="fname" name="fname" placeholder='Mastercard &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**** **** **** 1234' />
                        </div>

                        <div className="inputs">
                            <label for="fname">Notes</label>
                            <input type="text" id="fname" name="fname" placeholder='Does&apos;nt look too spicy' />
                        </div>
                    </form>

                    <div className="buttons">
                        <div className="button">
                            Create Order
                        </div>
                        <div className="button">
                            Edit Profile
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default bottomComponentPage2Right