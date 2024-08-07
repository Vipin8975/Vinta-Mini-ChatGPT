import React from 'react'
import '../Main/Main.css'
import {assets} from "../../assets/assets"

const Main = () => {
  return (
    <div className='main' >
        <div className="nav">
            <p>Vinta</p>
            <img src={assets.user_icon} style={{height:"70px", width:"70px"}} />
        </div>
        <div className="main-container">
          <div className="greet">
            <p><span>Hello, Dev.</span></p>
            <p>How can I help you Today?</p>
          </div>
          <div className="cards">
            <div className="card">
              <p>Sugget Beautiful place to see on an India</p>
              <img src={assets.compass_icon} style={{height:"30px" , width:"30px"}} />
            </div>
            <div className="card">
              <p>Briefy summarize this concept: urban planning</p>
              <img src={assets.bulb_icon} style={{height:"30px" , width:"30px"}} />
            </div>
            <div className="card">
              <p>Brainstorm team bonding activities for our work return</p>
              <img src={assets.message_icon} style={{height:"30px" , width:"30px"}} />
            </div>
            <div className="card">
              <p>Improve the readability of the following code.</p>
              <img src={assets.code_icon} style={{height:"30px" , width:"30px"}}  />
            </div>
          </div>

            <div className="main-bottom">
              <div className="search-box">
                <input type="text" placeholder='Message Vinta '/>
                <div>
                  <img src={assets.gallery_icon} style={{height:'30px' ,width: '30px'}} />
                  <img src={assets.mic_icon} style={{height:'30px' ,width: '30px'}} />
                  <img src={assets.send_icon} style={{height:'30px' ,width: '30px'}} />
                </div>
              </div>
              <p className="bottom-info">Vinta can make mistakes. Check important info.</p>
            </div>

        </div>
    </div>
  )
}

export default Main
