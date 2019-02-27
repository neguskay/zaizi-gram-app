import React, {Component} from 'react'
import { connect } from 'react-redux'
import Navbar from '../../components/NavBar'
import MainMiddle from '../../components/MainMiddle'
import {userActions} from '../../redux/_actions'

class HomePage extends Component{

  componentDidMount() {
    this.props.dispatch(userActions.getAll());
  }

  handleDeleteUser(id) {
    return (e) => this.props.dispatch(userActions.delete(id));
  }


  render(){
    const { user, users } = this.props
    return(
      <div>
        <Navbar/>
        <hr/>
        <MainMiddle/>

      </div>
    );
  }

}

function mapStateToProps(state) {
  const { users, authentication } = state
  const { user } = authentication
  return {
      user,
      users
  }
}

const connectedHomePage = connect(mapStateToProps)(HomePage)
//export {connectedHomePage as HomePage}
export {connectedHomePage as HomePage}





