import React from 'react';
import Pagetitle from '../components/Pagetitle';
import '../css/Pagetitle.css';
import Property from '../components/Property';
import * as propertyData from '../data/propertyData';

function Properties() {
  return (
    <div className='site-content'>
      <Pagetitle title='properties' />
      <section className='section--padding'>
        <div className='container'>
          <div className='row'>
            {propertyData.propertiesInfo.map(property => (
              <Property key={property._id} data={property}></Property>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Properties;
