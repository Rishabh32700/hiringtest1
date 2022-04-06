import React from 'react'

import './MainPage1.css'

import SidePannel from '../sidePannel/SidePannel.jsx'
import TopComponent from '../topComponent/TopComponent.jsx'
import BottomComponent from '../bottomComponentPage1/BottomComponent'

const MainPage1 = () => {
  return (
    <>

      <div className="mainPage1__container">
        <SidePannel />
        <div className="left__side">
          <TopComponent />
          <BottomComponent />
        </div>
      </div>

    </>
  )
}

export default MainPage1