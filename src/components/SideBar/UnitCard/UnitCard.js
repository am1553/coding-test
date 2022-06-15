import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import { style } from '@mui/system'

function UnitCard({ 
    title,
    timeDuration,
    completeStatus,
    unitIndex, bookmark }) {
  return (
    <div className='unit_card'>
        <div className="sidebar__units">
            <div className="status">
                
                <CheckCircleIcon style={{color: '#00FFC4'}} className="tick_mark"/>
                <span className='unit_text'>
                    unit
                </span>
                <BookmarkIcon style={ bookmark ? {color: '#00FFC4'} : {display: 'none'}}/>

                <span className="unit_complete" style={completeStatus ? null : {display: 'none'}}>completed</span>
            </div>
            <div className="unit">
                <h4> <span className='unit_index'>{ unitIndex }</span> Blockchain foundations</h4>
                <span className="time_duration">
                    12:33
                </span>
            </div>
            <div className="hr_wrapper">
                <div className="line"></div>
            </div>
            
        </div>
    </div>
  )
}

export default UnitCard