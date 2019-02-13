import React, { Component } from 'react';

  class Navbar extends Component{
      render(){
          return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand" href="some-link">Home Logo</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarsExample07">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                        <a className="nav-link" href="some-link">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="some-link">Sign In</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link " href="some-link">Create An Account</a>
                        </li>
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="some-link" id="dropdown07" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Other</a>
                        <div className="dropdown-menu" aria-labelledby="dropdown07">
                            <a className="dropdown-item" href="some-link">Account Support</a>
                            <a className="dropdown-item" href="some-link">News and Blogs</a>
                            <a className="dropdown-item" href="some-link">Contact</a>
                        </div>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-md-0">
                        <input className="form-control" type="text" placeholder="Search" aria-label="Search"></input>
                    </form>
                    </div>
                </div>
            </nav>
          );
      }
  }

  export default Navbar