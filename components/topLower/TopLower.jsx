import React from 'react'

import './TopLower.css'
import { Link } from "react-router-dom";

function TopLower() {
    return (
        <>
            <div className="topLower__container">
                <div className="card__container">
                    <Link to={'/page2'} className="card">
                        <h5>TOTAL REVENUE</h5>
                        <h1> $ 1,200.00</h1>
                    </Link>

                    <Link to={'/page2'} className="card1">
                        <h5>Number 1</h5>
                        <h1> # 100</h1>
                        <hr />
                        <div className="est__rev">
                            <span>EST. REVENUE</span>
                            <span>$ 1,200.00</span>
                        </div>
                    </Link>

                    <Link to={'/page2'} className="card1">
                        <h5>Number 2</h5>
                        <h1> # 120</h1>
                        <hr />
                        <div className="est__rev">
                            <span>EST. REVENUE</span>
                            <span>$ 1,200.00</span>
                        </div>
                    </Link>

                    <Link to={'/page2'} className="card1">
                        <h5>Number 3</h5>
                        <h1> # 10</h1>
                        <hr />
                        <div className="est__rev">
                            <span>EST. REVENUE</span>
                            <span>$ 1,200.00</span>
                        </div>
                    </Link>

                </div>
            </div>
        </>
    )
}

export default TopLower