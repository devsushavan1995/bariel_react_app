import React from 'react';
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { propertiesInfo } from '../data/propertyData';
import { agentsInfo } from '../data/agentsData';
import { Swiper } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import '../css/PropertySingle.css';
import '../css/Pages.css';
import { Tabs, Tab } from 'react-bootstrap';
import PropertySingleSlide from '../components/PropertySingleSlide';
import ContactForm from '../components/ContactForm';
import PropertyMoreFeatureSingle from '../components/PropertyMoreFeatureSingle';
import Property from '../components/Property';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function PropertySingle(props) {
  const [key, setKey] = useState('description');
  let { id } = useParams();
  id = parseInt(id);
  const property = propertiesInfo.find(x => {
    return x._id === id;
  });
  if (!property) {
    return <div>Property not found</div>;
  }
  let propertyTitle = property.title;
  let setCountMaxRecentlyAddedItems = 3;
  let count = 0;
  const agentInfo = agentsInfo.filter((agentSingle) => agentSingle._id === property.agentId);
  return (
    <div className='property-single site-content'>
      <section className='property__top-overview bg--center bg--cover bg--no-repeat' style={{ backgroundImage: `url(/images/properties/${property.coverBg})` }}>
        <div className='overview__overlay'></div>
        <div className='overview__content'>
          <h3 className='overview__title text--light mb-3'>{property.title}</h3>
          <ul className='overview__spec d-flex justify-content-center'>
            <li className='overview__spec-item'>
              <span className='spec-item__icon'>
                <i className='fas fa-bed'></i>
              </span>
              <span className='spec-item__text'>{property.noOfBeds}</span>
              <span className="spec-item__title">Beds</span>
            </li>
            <li className='overview__spec-item'>
              <span className='spec-item__icon'>
                <i className='fas fa-bath'></i>
              </span>
              <span className='spec-item__text'>{property.noOfBathrooms}</span>
              <span className="spec-item__title">Baths</span>
            </li>
            <li className='overview__spec-item'>
              <span className='spec-item__icon'>
                <i className='fas fa-home'></i>
              </span>
              <span className='spec-item__text'>{property.propertyArea}</span>
              <span className="spec-item__title">sqft</span>
            </li>
          </ul>
          <div className='overview__pricing d-flex justify-content-center align-items-center'>
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
            <div className='col-12 col-md-12 col-lg-8 mb-5 mb-md-0'>
              <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={20}
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
                  {property.gallery.map((slide)=> <PropertySingleSlide slide={slide}/>)}
                </div>
              </Swiper>
              <Tabs id='controlled-tab-example' defaultActiveKey='description' activeKey={key} onSelect={k => setKey(k)} className='mb-4'>
                <Tab eventKey='description' title='Description'>
                  <p className='text--sm text--para'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident libero recusandae nisi dolor assumenda earum repudiandae eius fugit quaerat ipsa quae iure similique tempora voluptatem soluta voluptate ea harum, error omnis sunt amet. Aperiam autem at alias, tenetur suscipit fuga?</p>
                </Tab>
                <Tab eventKey='amenities&features' title='Amenities & Features'>
                  <div className='amenities-features-wrapper'>
                    <h5 className='text--heading mt-5 mb-4'>Core Details</h5>
                    <div className='row'>
                      <div className='col-12 col-md-6 col-lg-6 mb-2'>
                        <div className='row'>
                          <div className='col-6'>
                            <p className='text--sm font-weight-medium text--heading'>Property Size</p>
                          </div>
                          <div className='col-6'>
                            <p className='text--sm text--secondary'>{`${property.propertyArea} sqft`}</p>
                          </div>
                        </div>
                      </div>
                      <div className='col-12 col-md-6 col-lg-6 mb-2'>
                        <div className='row'>
                          <div className='col-6'>
                            <p className='text--sm font-weight-medium text--heading'>Total Rooms</p>
                          </div>
                          <div className='col-6'>
                            <p className='text--sm text--secondary'>{property.noOfRooms}</p>
                          </div>
                        </div>
                      </div>
                      <div className='col-12 col-md-6 col-lg-6 mb-2'>
                        <div className='row'>
                          <div className='col-6'>
                            <p className='text--sm font-weight-medium text--heading'>Bedrooms</p>
                          </div>
                          <div className='col-6'>
                            <p className='text--sm text--secondary'>{property.noOfRooms}</p>
                          </div>
                        </div>
                      </div>
                      <div className='col-12 col-md-6 col-lg-6 mb-2'>
                        <div className='row'>
                          <div className='col-6'>
                            <p className='text--sm font-weight-medium text--heading'>Bathrooms</p>
                          </div>
                          <div className='col-6'>
                            <p className='text--sm text--secondary'>{property.noOfBathrooms}</p>
                          </div>
                        </div>
                      </div>
                      <div className='col-12 col-md-6 col-lg-6 mb-2'>
                        <div className='row'>
                          <div className='col-6'>
                            <p className='text--sm font-weight-medium text--heading'>Garage</p>
                          </div>
                          <div className='col-6'>
                            <p className='text--sm text--secondary'>{property.noOfGarages}</p>
                          </div>
                        </div>
                      </div>
                      <div className='col-12 col-md-6 col-lg-6 mb-2'>
                        <div className='row'>
                          <div className='col-6'>
                            <p className='text--sm font-weight-medium text--heading'>Year of Build</p>
                          </div>
                          <div className='col-6'>
                            <p className='text--sm text--secondary'>2021</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <h5 className='text--heading mt-5 mb-4'>More Features</h5>
                    <ul className='property-single__more-features'>
                      <div className='row'>
                        {property.moreFeatures.map((feature) => (
                          <PropertyMoreFeatureSingle feature={feature} />
                        ))}
                      </div>
                    </ul>
                    <h5 className='text--heading mt-5 mb-4'>Floor Plan</h5>
                    <p>
                      <img src='/images/dummy-800x400.png' alt='' />
                    </p>
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
                    <img src={`/images/agents/${agentInfo[0].image}`} alt='' className='mx-auto rounded-circle mb-4' width="200"/>
                  </div>
                  <div className='agent-profile__content'>
                    <h5 className='agent-profile__title text--heading text-center mb-3'>{agentInfo[0].title}</h5>
                    <p className='agent-profile__contact d-flex justify-content-center'>
                      <span className='agent-profile__contact-icon text--secondary'>
                        <i className='fas fa-phone-alt'></i>
                      </span>
                      <span className='agent-profile__contact-details text--secondary'>{agentInfo[0].phone}</span>
                    </p>
                    <p className='agent-profile__contact d-flex justify-content-center'>
                      <span className='agent-profile__contact-icon text--secondary'>
                        <i class='fas fa-envelope'></i>
                      </span>
                      <span className='agent-profile__contact-details text--secondary'>{agentInfo[0].email}</span>
                    </p>
                  </div>
                </div>
                <div className='agent-profile-cta-container'>
                  <p className='agent-profile-cta'>
                    <a href={`tel:${agentInfo[0].phone}`} className='profile-cta__btn btn__secondary d-block w-100 text-center'>
                      <span className='profile-cta__btn-icon'>
                        <i className='fas fa-phone-alt'></i>
                      </span>
                      <span className='profile-cta__btn-text'>Call The Agent Now</span>
                    </a>
                  </p>
                  <p className='agent-profile-cta'>
                    <Link to="/contact-us" className='profile-cta__btn btn__primary d-block w-100 text-center'>
                      <span className='profile-cta__btn-icon'>
                        <i class='fas fa-envelope'></i>
                      </span>
                      <span className='profile-cta__btn-text'>Get In Touch</span>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='section--padding bg--light'>
        <div className='container'>
          <p className='section__subheading text--secondary text--center text--lg-left'>More Properties</p>
          <h2 className='section__heading text--heading text--center text--lg-left'>Recently Added</h2>
          <div className='row'>
            { propertiesInfo.filter((propa) => propa.title !== propertyTitle).map((property,index) => {
              if(count < setCountMaxRecentlyAddedItems){
                count++;
                return <Property data={property} />; 
              }
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default PropertySingle;
