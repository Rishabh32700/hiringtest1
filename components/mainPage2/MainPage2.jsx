import React from 'react'

import SidePannel from '../sidePannel/SidePannel'
import TopComponent from '../topComponent/TopComponent'
import BottomComponentPage2 from '../bottomComponentPage2/BottomComponentPage2'


const MainPage2 = () => {
  return (
    <>
      <div className="mainPage1__container">
        <SidePannel />
        <div className="left__side">
          <TopComponent />
          <BottomComponentPage2 />
        </div>
      </div>

    </>
      )
}

export default MainPage2