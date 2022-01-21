import React from 'react';
import Breadcrumb from './Breadcrumb';

function Pagetitle(props) {
    const crumbs = props.crumbs;
    const selected = props.selected;
    return (
        <div className='page-title-section bg--center bg--cover bg--no-repeat'>
            <h3 className='page-title'>{props.title}</h3>
            <Breadcrumb crumbs={ crumbs } selected={ selected}/>
        </div>
    )
}

export default Pagetitle
