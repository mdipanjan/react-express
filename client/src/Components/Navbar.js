import React from 'react'
import {Link} from 'react-router-dom';

export default function Navbar() {
    return (
        <div className="navigation">
					<nav className="navbar navbar-expand-lg navbar-light bg-light">
						<div className="container">
							<Link to="" className="navbar-brand" >Navbar</Link>
							<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
								<span className="navbar-toggler-icon"></span>
							</button>
							<div className="collapse navbar-collapse" id="navbarNav">
								<ul className="ml-auto navbar-nav">
									<li className="nav-item active">
										<Link to="/home" className="nav-link">Home</Link>
									</li>
									<li className="nav-item">
										<Link to="/" className="nav-link" >Features</Link>
									</li>
									<li className="nav-item">
										<Link to="/" className="nav-link" >Pricing</Link>
									</li>
								</ul>
							</div>
						</div>
					</nav>
        </div>
    )
}
