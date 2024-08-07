import React, { useState } from 'react'
import '../Sidebar/Sidebar.css'
import {assets} from '../../assets/assets'

const Sidebar = () => {

  const [extended ,setExtended] =useState(false)



  return (
    <div className='sidebar'>
      <div className="top">
          <img onClick={()=>setExtended(prev=>!prev)}  className='menu' src={assets.menu_icon} 
          style={{
            height:'20px',
            width:'20px'
          }}
          />

          <div className="new-chat">
            <img src={assets.plus_icon} style={{height:'20px', width:'20px'}} />
            {extended ? <p>New Chat</p> : null} 
          </div>
          {extended ? 
           <div className="recent">
            <p className="recent-title">Recent</p>
            <div className="recent-entry">
              <img src={assets.message_icon} style={{height:'20px', width:'20px'}} />
              <p>What is react...</p>
            </div>
            <div className="recent-entry">
              <img src={assets.message_icon} style={{height:'20px', width:'20px'}} />
              <p>What is javascript...</p>
            </div>
            <div className="recent-entry">
              <img src={assets.message_icon} style={{height:'20px', width:'20px'}} />
              <p>What is dom...</p>
            </div>
          </div>
          : null
          } 
      </div>
      <div className="bottom">
          <div className="bottom-item recent-entry">
            <img src={assets.question_icon} style={{height:'20px', width:'20px'}} />
            {extended ? <p>Help</p> : null} 
          </div>

          <div className="bottom-item recent-entry">
            <img src={assets.history_icon} style={{height:'20px', width:'20px'}} />
            {extended ? <p>Activity</p> : null}
          </div>
          <div className="bottom-item recent-entry">
            <img src={assets.setting_icon} style={{height:'20px', width:'20px'}} />
            {extended ? <p>Setting</p> : null}
          </div>
      </div>
    </div>
  )
}

export default Sidebar

