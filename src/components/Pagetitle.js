import React from 'react'

function Pagetitle(props) {
    return (
        <div className='page-title-section bg--center bg--cover bg--no-repeat'>
            <h3 className='page-title'>{props.title}</h3>
        </div>
    )
}

export default Pagetitle
