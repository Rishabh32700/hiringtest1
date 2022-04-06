import React from 'react'

import './BottomComponent.css'
import { Link,useNavigate } from "react-router-dom";

import {BsThreeDotsVertical} from 'react-icons/bs'

import image from '../../assets/my pic.jpg'

const BottomComponent = () => {

    const navigate = useNavigate()

    return (
        <>
            <div className="bottomComponent__container">
                <table>
                    <tr>
                        <th>PROFILE</th>
                        <th>FIRST NAME</th>
                        <th>LAST NAME</th>
                        <th>MOBILE</th>
                        <th>EMAIL ADDRESS</th>
                        <th>CREDIT CARD</th>
                        <th>TOTAL SALES</th>
                        <th>LAST ORDER</th>
                    </tr>
                    <tr onClick={()=>{
                        navigate('/page2',{replace:true})
                    }}>
                        
                        <td><img src={image} alt="" /></td>
                        <td>Merrisa</td>
                        <td>Lewis</td>
                        <td>+123456789</td>
                        <td>m@lewi.com</td>
                        <td>**** **** 7981</td>
                        <td>$ 130.00</td>
                        <td>12/01/2022</td>
                        <td><BsThreeDotsVertical /></td>
                        
                    </tr>
                    <tr onClick={()=>{
                        navigate('/page2',{replace:true})
                    }}>
                        <td><img src={image} alt="" /></td>
                        <td>Fredy</td>
                        <td>Henry</td>
                        <td>+123456789</td>
                        <td>m@lewi.com</td>
                        <td>**** **** 7981</td>
                        <td>$ 130.00</td>
                        <td>12/01/2022</td>
                        <td><BsThreeDotsVertical /></td>

                    </tr>
                    <tr onClick={()=>{
                        navigate('/page2',{replace:true})
                    }}>
                        <td><img src={image} alt="" /></td>
                        <td>Victor</td>
                        <td>Bent</td>
                        <td>+123456789</td>
                        <td>m@lewi.com</td>
                        <td>**** **** 7981</td>
                        <td>$ 130.00</td>
                        <td>12/01/2022</td>
                        <td><BsThreeDotsVertical /></td>

                    </tr>
                    <tr onClick={()=>{
                        navigate('/page2',{replace:true})
                    }}>
                        <td><img src={image} alt="" /></td>
                        <td>Cria</td>
                        <td>Zeneva</td>
                        <td>+123456789</td>
                        <td>m@lewi.com</td>
                        <td>**** **** 7981</td>
                        <td>$ 130.00</td>
                        <td>12/01/2022</td>
                        <td><BsThreeDotsVertical /></td>

                    </tr>
                    <tr onClick={()=>{
                        navigate('/page2',{replace:true})
                    }}>
                        <td><img src={image} alt="" /></td>
                        <td>Moris</td>
                        <td>Thomson</td>
                        <td>+123456789</td>
                        <td>m@lewi.com</td>
                        <td>**** **** 7981</td>
                        <td>$ 130.00</td>
                        <td>12/01/2022</td>
                        <td><BsThreeDotsVertical /></td>

                    </tr>

                    <tr onClick={()=>{
                        navigate('/page2',{replace:true})
                    }}>
                        <td><img src={image} alt="" /></td>
                        <td>Liana</td>
                        <td>Rivata</td>
                        <td>+123456789</td>
                        <td>m@lewi.com</td>
                        <td>**** **** 7981</td>
                        <td>$ 130.00</td>
                        <td>12/01/2022</td>
                        <td><BsThreeDotsVertical /></td>
                    </tr>
                </table>
            </div>
        </>
    )
}

export default BottomComponent