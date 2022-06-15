import React from 'react'

import UnitCard from './UnitCard/UnitCard'

function SideBar() {

    const Data = [
        {
            id: 1,
            completeStatus: true,
            title: 'Blockchain foundations',
            timeDuration: '12:33',
            unitIndex: '1.',
            bookMark: true
        },
        {
            id: 2,
            completeStatus: false,
            title: 'Blockchain foundations',
            timeDuration: '32:02',
            unitIndex: '2.',
            bookMark: true
        },
        {
            id: 3,
            completeStatus: true,
            title: 'Blockchain foundations',
            timeDuration: '12:33',
            unitIndex: '3.',
            bookMark: false
        },
        {
            id: 4,
            completeStatus: true,
            title: 'Blockchain foundations',
            timeDuration: '12:33',
            unitIndex: '4.',
            bookMark: false
        },
        {
            id: 5,
            completeStatus: true,
            title: 'Blockchain foundations',
            timeDuration: '12:33',
            unitIndex: '5.',
            bookMark: true
        }
    ]
    


  return (
    <div className='sidebar'>
        <div className="sidebar__header">
            <h4>Blockchain foundations</h4>
            <div className="progress_bar">
                <div className="progress"></div>
            </div>
        </div>

        {
            Data.map((data, key) => {
                return(
                    <UnitCard
                        key = { data.id }
                        title={ data.title }
                        timeDuration = { data.timeDuration }
                        completeStatus = { data.completeStatus }
                        unitIndex = { data.unitIndex }
                        bookmark = { data.bookMark } 
                    />
                )
            })
        }

    </div>
  )
}

export default SideBar