import React from 'react'

import BottomComponentPage2Left from '../bottomComponentPage2Left/BottomComponentPage2Left'
import BottomComponentPage2Right from '../bottomComponentPage2Right/BottomComponentPage2Right'

import './BottomComponentPage2.css'

const BottomComponentPage2 = () => {
  return (
    <>
        <div className="bottomComponentPage2__container">
            <BottomComponentPage2Left />
            <BottomComponentPage2Right />
        </div>
    </>
  )
}

export default BottomComponentPage2