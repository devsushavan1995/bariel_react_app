import React from 'react';
import ServiceItem from './ServiceItem';
import '../css/Services.css';

function Services() {
  const services = [
    {
      thumbnailIcon: '/images/services/icon-img-1.png',
      title: 'Office Agency',
      desc: 'Lorem ipsum dolor sit amet, cons ectetur adipisicing elit, sed do i eiusmod tempor incididunt.',
    },
    {
      thumbnailIcon: '/images/services/icon-img-2.png',
      title: 'Retail Agency',
      desc: 'Lorem ipsum dolor sit amet, cons ectetur adipisicing elit, sed do i eiusmod tempor incididunt.',
    },
    {
      thumbnailIcon: '/images/services/icon-img-3.png',
      title: 'Industrial Agency',
      desc: 'Lorem ipsum dolor sit amet, cons ectetur adipisicing elit, sed do i eiusmod tempor incididunt.',
    },
    {
      thumbnailIcon: '/images/services/icon-img-4.png',
      title: 'Property & Asset',
      desc: 'Lorem ipsum dolor sit amet, cons ectetur adipisicing elit, sed do i eiusmod tempor incididunt.',
    },
    {
      thumbnailIcon: '/images/services/icon-img-5.png',
      title: 'Valuation & CPO',
      desc: 'Lorem ipsum dolor sit amet, cons ectetur adipisicing elit, sed do i eiusmod tempor incididunt.',
    },
    {
      thumbnailIcon: '/images/services/icon-img-6.png',
      title: 'Building Surviying',
      desc: 'Lorem ipsum dolor sit amet, cons ectetur adipisicing elit, sed do i eiusmod tempor incididunt.',
    },
    {
      thumbnailIcon: '/images/services/icon-img-7.png',
      title: 'Total Investment',
      desc: 'Lorem ipsum dolor sit amet, cons ectetur adipisicing elit, sed do i eiusmod tempor incididunt.',
    },
    {
      thumbnailIcon: '/images/services/icon-img-8.png',
      title: 'Commercial Work',
      desc: 'Lorem ipsum dolor sit amet, cons ectetur adipisicing elit, sed do i eiusmod tempor incididunt.',
    }
  ];
  return (
    <section className='services-section section--padding-top-only'>
      <div className='container'>
        <p className='section__subheading text-center text--secondary'>Services</p>
        <h2 className='section__heading text-center text--heading'>What we do</h2>
        <div className='row'>
          {services.map(service => (
            <ServiceItem content={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
