import React, { useState } from 'react';
import Pagetitle from '../components/Pagetitle';
import '../css/Pagetitle.css';
import '../css/Pages.css';
import Property from '../components/Property';
import { propertiesInfo } from '../data/propertyData';
import { Offcanvas } from 'react-bootstrap';
import Select from 'react-select';

function Properties() {
  const [crumbs, setCrumbs] = useState(['home', 'properties']);
  const [show, setShow] = useState(false);

  const [showProperties, setShowProperties] = useState(propertiesInfo);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  const optionPropertyStatus = [
    {
      value: 'any',
      label: 'Any',
    },
    {
      value: 'rent',
      label: 'For Rent',
    },
    {
      value: 'buy',
      label: 'For Buy',
    },
  ];
  const handleSelect = (e) => {
    filterByPropStatus(e.value);
  }

  const filterByPropStatus = (filtValue) => {
    if(filtValue === "any") {
        const filteredProperties = propertiesInfo.map((propertySingle) => propertySingle);
        setShowProperties(filteredProperties);
    }
    else if(filtValue === "rent") {
      const filteredProperties = propertiesInfo.filter((propertySingle) => propertySingle.isRent);
        setShowProperties(filteredProperties);
    }
    else {
      const filteredProperties = propertiesInfo.filter((propertySingle) => !propertySingle.isRent);
        setShowProperties(filteredProperties);
    }

  }
  return (
    <div className='site-content site-content--properties'>
      <Pagetitle title='properties' crumbs={crumbs} style="{backgroundImage: url('/images/properties-page-bg.jpg')}" />
      <section className='section--padding'>
        <div className='container'>
          <div className='properties-filter-wrapper d-flex justify-content-between mb-5'>
            <button className='btn__primary py-2 px-3 text--sm' onClick={handleShow}>
              <i class='fa fa-filter'></i>
              <span>&nbsp;</span>
              Advance Filter
            </button>
            <div className='d-flex align-items-center'>
              <label htmlFor='propertyStatus' className='text--heading text--sm'>
                Property Status
              </label>
              <Select options={optionPropertyStatus} defaultValue={{ label: 'Any', value: 'any' }} onChange={handleSelect} />
            </div>
          </div>
          <div className='row'>
            {showProperties.map(property => (
              <Property key={property._id} data={property}></Property>
            ))}
          </div>
        </div>
      </section>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.</Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default Properties;
