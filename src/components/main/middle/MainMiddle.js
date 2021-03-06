import React, { Component } from 'react'

class MainMiddle extends Component{
    render(){
      return(
        <main role="main">
            <div className="jumbotron">
                <div className="col-sm-8 mx-auto">
                    <h1>Navbar examples// Test Zaizi-Gram</h1>
                    <p>This example is a quick exercise to illustrate how the navbar and its contents work. Some navbars extend the width of the viewport, others are confined within a <code>.container</code>. For positioning of navbars, checkout the <a href="/docs/4.3/examples/navbar-static/">top</a> and <a href="/docs/4.3/examples/navbar-fixed/">fixed top</a> examples.</p>
                    <p>At the smallest breakpoint, the collapse plugin is used to hide the links and show a menu button to toggle the collapsed content.</p>
                    <p>
                    <a className="btn btn-primary" href="/docs/4.3/components/navbar/" role="button">View navbar docs &raquo;</a>
                    </p>
                </div>
            </div>
        </main>
      );
    }
}

export default MainMiddle;