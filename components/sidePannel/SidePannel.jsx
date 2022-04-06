import React from 'react'

import {BiUserCircle} from 'react-icons/bi'
import {FaBars} from 'react-icons/fa'
import {CgCalculator} from 'react-icons/cg'


import './SidePannel.css'

const SidePannel = () => {
  return (
    <>
        <div className="sidePannel__container">
            <ul>
                <li><BiUserCircle /></li>
                <li><BiUserCircle /></li>
                <li><BiUserCircle /></li>
                <li><FaBars /></li>
                <li><CgCalculator /></li>
            </ul>
        </div>
    </>
  )
}

export default SidePannel