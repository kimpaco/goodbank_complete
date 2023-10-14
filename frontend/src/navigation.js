import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js.map';
import { Tooltip } from 'bootstrap/dist/js/bootstrap.esm.min.js';

const NavBar = () => {
    

    useEffect(() => {
        //init tooltip
        Array.from(document.querySelectorAll('button[data-bs-toggle="tooltip"]'))
        .forEach(tooltipNode => new Tooltip(tooltipNode))
        });

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="nav nav-underline">
                        <li className="nav-item">
                            <a className="nav-link" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Click here to go to this site's homepage." href="#/">Home</a>                          
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Click here to login or sign-up if you don't have an account." href="#/Account/">Account</a>                          
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Want to add funds to your account? Click here!" href="#/deposit/">Deposit</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Need to withdraw funds from your account?" href="#/withdraw/">Withdraw</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Here's a list of all of our clients!" href="#/data/">All Data</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;