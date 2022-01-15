import React from 'react';
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import * as propertyData from '../data/propertyData';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import '../css/PropertySingle.css';
import '../css/Pages.css';
import { Tabs, Tab } from 'react-bootstrap';
import ContactForm from '../components/ContactForm';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function PropertySingle(props) {
  const [key, setKey] = useState('description');
  let { id } = useParams();
  id = parseInt(id);
  console.log(typeof id);
  const property = propertyData.propertiesInfo.find(x => {
    return x._id === id;
  });
  console.log(property);
  if (!property) {
    return <div>Property not found</div>;
  }
  return (
    <div className='property-single'>
      <section className='property__top-overview bg--center bg--cover bg--no-repeat' style={{ backgroundImage: `url(/images/properties/${property.coverBg})` }}>
        <div className='overview__overlay'></div>
        <div className='overview__content'>
          <h2 className='overview__title text--light'>{property.title}</h2>
          <ul className='overview__spec d-flex justify-content-center'>
            <li className='overview__spec-item'>
              <span className='spec-item__icon'>
                <i className='fas fa-bed'></i>
              </span>
              <span className='spec-item__text'>{property.noOfBeds}</span>
            </li>
            <li className='overview__spec-item'>
              <span className='spec-item__icon'>
                <i className='fas fa-bath'></i>
              </span>
              <span className='spec-item__text'>{property.noOfBathrooms}</span>
            </li>
            <li className='overview__spec-item'>
              <span className='spec-item__icon'>
                <i className='fas fa-home'></i>
              </span>
              <span className='spec-item__text'>{property.propertyArea}</span>
            </li>
          </ul>
          <div className='overview__pricing d-flex justify-content-center'>
            <span className='pricing-container d-flex'>
              <span className='pricing__currency'>$</span>
              <span className='pricing__value'>{property.isRent ? property.monthlyRent : property.buyingPrice}</span>
              <div className='pricing__suffix'>{property.isRent ? '/m' : ''}</div>
            </span>
            <span className='overview__tag'>{property.isRent ? 'RENT' : 'BUY'}</span>
          </div>
        </div>
      </section>
      <section className='section--padding'>
        <div className='container'>
          <div className='row property-single__desc'>
            <div className='col-12 col-md-12 col-lg-8'>
              <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation={true}
                pagination={false}
                // pagination={{
                //   clickable: true,
                //   renderBullet: function (index, className) {
                //     return '<span class="' + className + '">' + '0' + (index + 1) + '</span>';
                //   },
                // }}
                className='mb-5'
              >
                <div className='swiper-wrapper'>
                  <SwiperSlide>
                    <img src='/images/dummy-800x400.png' alt='' />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src='/images/dummy-800x400.png' alt='' />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src='/images/dummy-800x400.png' alt='' />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src='/images/dummy-800x400.png' alt='' />
                  </SwiperSlide>
                </div>
              </Swiper>
              <Tabs id='controlled-tab-example' defaultActiveKey='description' activeKey={key} onSelect={k => setKey(k)} className='mb-4'>
                <Tab eventKey='description' title='Description'>
                  <p className='text--sm text--para'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident libero recusandae nisi dolor assumenda earum repudiandae eius fugit quaerat ipsa quae iure similique tempora voluptatem soluta voluptate ea harum, error omnis sunt amet. Aperiam autem at alias, tenetur suscipit fuga?</p>
                </Tab>
                <Tab eventKey='amenities&features' title='Amenities & Features'>
                  <div className='amenities-features-wrapper'>
                    <h5 className='text--heading my-5'>Core Details</h5>
                    <div className='row'>
                      <div className='col-12 col-md-6 col-lg-6 mb-2'>
                        <div className='row'>
                          <div className='col-6'>
                            <p className='text--sm font-weight-medium'>Property Size</p>
                          </div>
                          <div className='col-6'>
                            <p className='text--sm text--secondary'>1500sqft</p>
                          </div>
                        </div>
                      </div>
                      <div className='col-12 col-md-6 col-lg-6 mb-2'>
                        <div className='row'>
                          <div className='col-6'>
                            <p className='text--sm font-weight-medium'>Property Size</p>
                          </div>
                          <div className='col-6'>
                            <p className='text--sm text--secondary'>1500sqft</p>
                          </div>
                        </div>
                      </div>
                      <div className='col-12 col-md-6 col-lg-6 mb-2'>
                        <div className='row'>
                          <div className='col-6'>
                            <p className='text--sm font-weight-medium'>Property Size</p>
                          </div>
                          <div className='col-6'>
                            <p className='text--sm text--secondary'>1500sqft</p>
                          </div>
                        </div>
                      </div>
                      <div className='col-12 col-md-6 col-lg-6 mb-2'>
                        <div className='row'>
                          <div className='col-6'>
                            <p className='text--sm font-weight-medium'>Property Size</p>
                          </div>
                          <div className='col-6'>
                            <p className='text--sm text--secondary'>1500sqft</p>
                          </div>
                        </div>
                      </div>
                      <div className='col-12 col-md-6 col-lg-6 mb-2'>
                        <div className='row'>
                          <div className='col-6'>
                            <p className='text--sm font-weight-medium'>Property Size</p>
                          </div>
                          <div className='col-6'>
                            <p className='text--sm text--secondary'>1500sqft</p>
                          </div>
                        </div>
                      </div>
                      <div className='col-12 col-md-6 col-lg-6 mb-2'>
                        <div className='row'>
                          <div className='col-6'>
                            <p className='text--sm font-weight-medium'>Property Size</p>
                          </div>
                          <div className='col-6'>
                            <p className='text--sm text--secondary'>1500sqft</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <h5 className='text--heading my-5'>More Features</h5>
                    <ul className="property-single__more-features">
                      <div className="row">
                        <div className="col-6 col-md-4 col-lg-4 mb-2">
                          <div className="more-featured-container">
                            <span className="more-feature__icon text--secondary text--sm"><i class="fas fa-check"></i></span>
                            <span className="more-feature__text text--heading text--sm">Featured 1</span>
                          </div>
                        </div>
                      </div>
                    </ul>
                    <h5 className='text--heading my-5'>Floor Plan</h5>
                    <p><img src="/images/dummy-800x400.png" alt="" /></p>
                  </div>
                </Tab>
              </Tabs>
              <div className='mt-5 mb-4'>
                <h5 className='text--heading'>Get In Touch</h5>
              </div>
              <ContactForm />
            </div>
            <div className='col-12 col-md-12 col-lg-4'>
              <div className='agent-details-wrapper p-3 p-md-4 p-lg-5 bg--light'>
                <div className='agent-profile-container'>
                  <div className='agent-profile__image'>
                    <img src='/images/agents/munica-regoni.jpg' alt='' className='mx-auto rounded-circle mb-4' />
                  </div>
                  <div className='agent-profile__content'>
                    <h5 className='agent-profile__title text--heading text-center mb-3'>Munia Regoni</h5>
                    <p className='agent-profile__contact d-flex justify-content-center'>
                      <span className='agent-profile__contact-icon text--secondary'>
                        <i className='fas fa-phone-alt'></i>
                      </span>
                      <span className='agent-profile__contact-details text--secondary'>+123 4567890</span>
                    </p>
                    <p className='agent-profile__contact d-flex justify-content-center'>
                      <span className='agent-profile__contact-icon text--secondary'>
                        <i class='fas fa-envelope'></i>
                      </span>
                      <span className='agent-profile__contact-details text--secondary'>contact@agentname.com</span>
                    </p>
                  </div>
                </div>
                <div className='agent-profile-cta-container'>
                  <p className='agent-profile-cta'>
                    <Link to='/' className='profile-cta__btn btn__secondary d-block w-100 text-center'>
                      <span className='profile-cta__btn-icon'>
                        <i className='fas fa-phone-alt'></i>
                      </span>
                      <span className='profile-cta__btn-text'>Call The Agent Now</span>
                    </Link>
                  </p>
                  <p className='agent-profile-cta'>
                    <button className='profile-cta__btn btn__primary d-block w-100 text-center'>
                      <span className='profile-cta__btn-icon'>
                        <i class='fas fa-envelope'></i>
                      </span>
                      <span className='profile-cta__btn-text'>Get In Touch</span>
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PropertySingle;
