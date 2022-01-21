import React, { useState } from 'react';
import Pagetitle from '../components/Pagetitle';
import '../css/Pagetitle.css';
import '../css/Pages.css';
import Property from '../components/Property';
import { propertiesInfo } from '../data/propertyData';

function Properties() {
  const [crumbs, setCrumbs] = useState(['home', 'properties']);
  return (
    <div className='site-content site-content--properties'>
      <Pagetitle title='properties' crumbs={crumbs} style="{backgroundImage: url('/images/properties-page-bg.jpg')}"/>
      <section className='section--padding'>
        <div className='container'>
          <div className='row'>
            {propertiesInfo.map(property => (
              <Property key={property._id} data={property}></Property>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Properties;
