import React, { useState } from 'react';
import Select from 'react-select';

function SearchForm() {
  const [toggle, setToggle] = useState(false);

  const locationOptions = [
    { value: 'New Town, Kolkata', label: 'New Town, Kolkata' },
    { value: 'Salt Lake, Kolkata', label: 'Salt Lake, Kolkata' },
    { value: 'Jadavpur, South 24 Paragana', label: 'Jadavpur, South 24 Paragana' },
    { value: 'Dumdum, North 24 Paragana', label: 'Dumdum, North 24 Paragana' },
    { value: 'Siliguri, Jalpaiguri', label: 'Siliguri, Jalpaiguri' },
    { value: 'Bishnupur, Bankura', label: 'Bishnupur, Bankura' },
  ];
  const propertyStatusOptions = [
    {
      value: 'any',
      label: 'Any',
    },
    {
      value: 'for rent',
      label: 'For Rent',
    },
    {
      value: 'for buy',
      label: 'For Buy',
    },
  ];
  const propertyTypeOptions = [
    {
      value: 'any',
      label: 'Any',
    },
    {
      value: 'shop',
      label: 'Shop',
    },
    {
      value: 'office',
      label: 'Office',
    },
    {
      value: 'apartment',
      label: 'Apartment',
    },
    {
      value: 'villa',
      label: 'Villa',
    },
  ];
  const bedOptions = [
    {
      value: 'any',
      label: 'Any',
    },
    {
      value: 1,
      label: 1,
    },
    {
      value: 2,
      label: 2,
    },
    {
      value: 3,
      label: 3,
    },
    {
      value: 4,
      label: 4,
    },
  ];

  const bathOptions = [
    {
      value: 'any',
      label: 'Any',
    },
    {
      value: 1,
      label: 1,
    },
    {
      value: 2,
      label: 2,
    },
    {
      value: 3,
      label: 3,
    },
    {
      value: 4,
      label: 4,
    },
  ];

  const garagesOptions = [
    {
      value: 'any',
      label: 'Any',
    },
    {
      value: 1,
      label: 1,
    },
    {
      value: 2,
      label: 2,
    },
    {
      value: 3,
      label: 3,
    },
    {
      value: 4,
      label: 4,
    },
  ];
  let isShownClass = "";
  if(!toggle) {
    isShownClass = "d-none";
  }
  return (
    <form action='' className='search-form'>
      <div className='row'>
        <div className='col-12 mb-3'>
          <label htmlFor='location' className='text--heading text--sm mb-2'>
            Location
          </label>
          <Select options={locationOptions} />
        </div>
        <div className='col-6 mb-3'>
          <label htmlFor='location' className='text--heading text--sm mb-2'>
            Property Status
          </label>
          <Select options={propertyStatusOptions} defaultValue={{ label: 'Any', value: 'any' }}/>
        </div>
        <div className='col-6 mb-3'>
          <label htmlFor='location' className='text--heading text--sm mb-2'>
            Property Type
          </label>
          <Select options={propertyTypeOptions} defaultValue={{ label: 'Any', value: 'any' }} />
        </div>
      </div>
      <div className={`row search-form__advanced-options-container ${isShownClass}`}>
      <div className='col-4 mb-3'>
        <label htmlFor='location' className='text--heading text--sm mb-2'>
          Min Beds
        </label>
        <Select options={bedOptions} defaultValue={{ label: 'Any', value: 'any' }}/>
      </div>
      <div className='col-4 mb-3'>
        <label htmlFor='location' className='text--heading text--sm mb-2'>
          Min Baths
        </label>
        <Select options={bathOptions} defaultValue={{ label: 'Any', value: 'any' }} />
      </div>
      <div className='col-4 mb-3'>
        <label htmlFor='location' className='text--heading text--sm mb-2'>
          Min Garages
        </label>
        <Select options={garagesOptions} defaultValue={{ label: 'Any', value: 'any' }} />
      </div>
    </div>
      <div className='d-flex justify-content-between align-items-center'>
        <div>
          <input type='checkbox' name='advance-filter' className='search-form__checkbox--advanced-filter-trigger' onClick={() => setToggle(!toggle)} />
          <label htmlFor='advance-filter' className='text--heading text--sm'>
            Advanced Filter
          </label>
        </div>
        <button type='submit' class='btn__secondary'>
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
