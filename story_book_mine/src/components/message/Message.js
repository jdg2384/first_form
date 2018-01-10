import React from 'react'
import 'materialize-css/dist/css/materialize.min.css'

export default class Message extends React.Component {
    // constructor (){
    //     super()
    //     this.store = this.props.data.map(ele => {return ele.stories})
    // }
    render () {
      return (
        <div className="container">
        <div className="row">
          <nav>
            <div className="nav-wrapper teal lighten-2">
              <div className="col s12">
                <a href="#" className="brand-logo">Joe's Example Component</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                  <li><a href="#">React</a></li>
                  <li><a href="#">Redux</a></li>
                  <li><a href="#">React Router</a></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div className="row">
          <div className="col s12">
            <ul className="collection with-header">
            <li className="collection-header"><h4>Messages List</h4></li>
                {this.props.data.map(ele => {
                    return  <li className="collection-item"  key={ele.id} ><div>{ele.stories}<a href="#!" className="secondary-content"><i className="material-icons">send</i></a></div></li>
                
                })}
            </ul>
         </div>
        </div>
    </div>  
    
      );
    }
  }