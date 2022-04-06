import React from 'react'

import TopUpper from '../topUpper/TopUpper'
import TopLower from '../topLower/TopLower'

const TopComponent = () => {
  return (
    <>
        <div className="topComponent__container">
          <TopUpper />
          <TopLower />
        </div>
    </>
  )
}

export default TopComponent