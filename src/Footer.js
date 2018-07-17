import React, { Component } from 'react';
import Copyright from './icons/copyright.svg';



class Footer extends Component {
  render () {
    return (

      <footer className="app-copyright">

          <div
            style={{
              backgroundImage: `url(${Copyright})`,
              backgroundPosition: "top center",
              backgroundRepeat: "no-repeat",
              textAlign: "center"
            }}>
          </div>

      </footer>

    )
  }
}

export default Footer
