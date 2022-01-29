import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Pagetitle from '../components/Pagetitle';
import Property from '../components/Property';
import { propertiesInfo } from '../data/propertyData';

function SearchResult() {
  const [crumbs, setCrumbs] = useState(['home', 'search result']);
  const search = useLocation().search;
  const searchLocation = new URLSearchParams(search).get('searchLocation');
  const searchByPropertyStatus = new URLSearchParams(search).get('searchByPropertyStatus');
  const searchByPropertyType = new URLSearchParams(search).get('searchByPropertyType');
  const minBeds = new URLSearchParams(search).get('minBeds');
  const minBaths = new URLSearchParams(search).get('minBaths');
  const minGarages = new URLSearchParams(search).get('minGarages');

  let showError = false;

  //filter properties
  const filteredProperties = propertiesInfo
    .filter(property => property.location.toLowerCase().replace(/\s/g, '') === searchLocation.toLowerCase().replace(/\s/g, ''))
    .filter(property => {
      if (searchByPropertyStatus === 'any') {
        return true;
      } else if (searchByPropertyStatus === 'rent') {
        return property.isRent;
      } else if (searchByPropertyStatus === 'buy') {
        return !property.isRent;
      } else {
        return false;
      }
    });

  if (filteredProperties.length <= 0) {
    showError = true;
  }
  return (
    <div>
      <Pagetitle title='Search Result' crumbs={crumbs} />
      <section className='section--padding'>
        <div className='container'>
          {showError ? <h4 className='text--center text--secondary'>Oops, no item found!</h4> : null}
          <div className='row'>
            {filteredProperties.map(property => (
              <Property data={property} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default SearchResult;
