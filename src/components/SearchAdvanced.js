import React from 'react';
import Select from 'react-select';

function SearchAdvanced({isShownClass}) {
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
  return (
    <div className={`row search-form__advanced-options-container ${isShownClass}`}>
      <div className='col-4 mb-3'>
        <label htmlFor='location' className='text--heading text--sm mb-2'>
          Min Beds
        </label>
        <Select options={bedOptions} />
      </div>
      <div className='col-4 mb-3'>
        <label htmlFor='location' className='text--heading text--sm mb-2'>
          Min Baths
        </label>
        <Select options={bathOptions} />
      </div>
      <div className='col-4 mb-3'>
        <label htmlFor='location' className='text--heading text--sm mb-2'>
          Min Garages
        </label>
        <Select options={garagesOptions} />
      </div>
    </div>
  );
}

export default SearchAdvanced;
