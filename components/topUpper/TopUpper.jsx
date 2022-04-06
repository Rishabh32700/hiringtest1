import React from 'react'

import './TopUpper.css'

import { MdAddBox } from 'react-icons/md'
import { AiOutlineSearch } from 'react-icons/ai'

import { Link } from "react-router-dom";


const TopUpper = () => {
  return (
    <>
      <div className="topUpper__container">
        <div className="topUpper__left">Customers</div>

        <div className="topUpper__right">
          <form action="/action_page.php">
            <button type="submit"><AiOutlineSearch /></button>
            <input type="text" placeholder="Try &quot;Merrisa Lewis&quot;" name="search" />
          </form>
          <Link to={'/page2'} className="topUpper__addCustomer__button">
              <MdAddBox />
              <span>Add Customer</span>
          </Link>
        </div>
      </div>
    </>
  )
}

export default TopUpper