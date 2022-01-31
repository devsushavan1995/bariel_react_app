import React, { useState } from 'react';
import Select from 'react-select';
import { useForm, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

// const UserContext = createContext()

function SearchForm() {
  const [toggle, setToggle] = useState(false);
  const [user, setUser] = useState('');
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [locationVal, setLocationVal] = useState({
    value: '',
    label: '',
  });

  let navigate = useNavigate();

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
      value: 'rent',
      label: 'For Rent',
    },
    {
      value: 'buy',
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
  let isShownClass = '';
  if (!toggle) {
    isShownClass = 'd-none';
  }
  const onSubmit = (data, e) => {
    const queryStr = objectToQueryString(data);
    navigate({
      pathname: '/property-search',
      search: `?${queryStr}`
    })
  };
  function objectToQueryString(obj) {
    var str = [];
    for (var p in obj)
      if (obj.hasOwnProperty(p)) {
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
      }
    return str.join("&");
  }
  return (
    <form action='' className='search-form' onSubmit={handleSubmit(onSubmit)}>
      <div className='row'>
        <div className='col-12 mb-3'>
          <label htmlFor='location' className='text--heading text--sm mb-2'>
            Location*
          </label>
          <Controller control={control} name='searchLocation' render={({ field: { onChange, value, name, ref } }) => <Select inputRef={ref} options={locationOptions} value={locationOptions.find(c => c.value === value)} onChange={val => onChange(val.value)} />} rules={{ required: true }} />
          {errors.searchLocation && <div className='text--secondary'>Field is rquired</div>}
        </div>
        <div className='col-6 mb-3'>
          <label htmlFor='location' className='text--heading text--sm mb-2'>
            Property Status
          </label>
          <Controller control={control} name='searchByPropertyStatus' defaultValue='any' render={({ field: { onChange, value, name, ref } }) => <Select inputRef={ref} options={propertyStatusOptions} value={propertyStatusOptions.find(c => c.value === value)} onChange={val => onChange(val.value)} />} />
        </div>
        <div className='col-6 mb-3'>
          <label htmlFor='location' className='text--heading text--sm mb-2'>
            Property Type
          </label>
          <Controller control={control} name='searchByPropertyType' defaultValue='any' render={({ field: { onChange, value, name, ref } }) => <Select inputRef={ref} options={propertyTypeOptions} value={propertyTypeOptions.find(c => c.value === value)} onChange={val => onChange(val.value)} />} />
        </div>
      </div>
      <div className={`row search-form__advanced-options-container ${isShownClass}`}>
        <div className='col-4 mb-3'>
          <label htmlFor='Min Beds' className='text--heading text--sm mb-2'>
            Min Beds
          </label>
          <Controller control={control} name='minBeds' defaultValue='any' render={({ field: { onChange, value, name, ref } }) => <Select inputRef={ref} options={bedOptions} value={bedOptions.find(c => c.value === value)} onChange={val => onChange(val.value)} />} />
        </div>
        <div className='col-4 mb-3'>
          <label htmlFor='Min Baths' className='text--heading text--sm mb-2'>
            Min Baths
          </label>
          <Controller control={control} name='minBaths' defaultValue='any' render={({ field: { onChange, value, name, ref } }) => <Select inputRef={ref} options={bathOptions} value={bathOptions.find(c => c.value === value)} onChange={val => onChange(val.value)} />} />
        </div>
        <div className='col-4 mb-3'>
          <label htmlFor='Garage Options' className='text--heading text--sm mb-2'>
            Min Garages
          </label>
          <Controller control={control} name='minGarages' defaultValue='any' render={({ field: { onChange, value, name, ref } }) => <Select inputRef={ref} options={garagesOptions} value={garagesOptions.find(c => c.value === value)} onChange={val => onChange(val.value)} />} />
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
