import React, {Component} from 'react'

function updateLogoArea(){
    return(
        <div className="container">
            <a className="nav-brand mr-0 mr-md-2" href="https://www.zaizi.com" width="36" height="36"> 
                <img src={require('./zaizi.logo.ico')} alt="logo" />
            </a>
        </div>
    )
}

class Logo extends Component{

    render(){
        return updateLogoArea();
    }

}

export default Logo