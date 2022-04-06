import React from 'react'

import './bottomComponentPage2Left.css'
import { AiOutlineSearch } from 'react-icons/ai'

import image from '../../assets/my pic.jpg'


const BottomComponentPage2Left = () => {
    return (
        <>
            <div className="bottomComponentPage2Left__container">
                <form>
                    <button type="submit"><AiOutlineSearch /></button>
                    <input type="text" placeholder="Try Merrisa Lewis" name="search" />
                </form>
                <div className="customerList__container">
                    
                    <div className="customer__details">
                        <img src={image} alt="" />
                        <div className="name__phNo">
                            <h4>Merrisa Lewis</h4>
                            <h5>+123456789</h5>
                        </div>
                    </div>
                    <div className="customer__details">
                        <img src={image} alt="" />
                        <div className="name__phNo">
                            <h4>Merrisa Lewis</h4>
                            <h5>+123456789</h5>
                        </div>
                    </div>
                    <div className="customer__details">
                        <img src={image} alt="" />
                        <div className="name__phNo">
                            <h4>Merrisa Lewis</h4>
                            <h5>+123456789</h5>
                        </div>
                    </div>
                    <div className="customer__details">
                        <img src={image} alt="" />
                        <div className="name__phNo">
                            <h4>Merrisa Lewis</h4>
                            <h5>+123456789</h5>
                        </div>
                    </div>
                    <div className="customer__details">
                        <img src={image} alt="" />
                        <div className="name__phNo">
                            <h4>Merrisa Lewis</h4>
                            <h5>+123456789</h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BottomComponentPage2Left