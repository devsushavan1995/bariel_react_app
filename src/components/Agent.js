import React from 'react';
import '../css/Agent.css';

function Agent(props) {
let  agent = props.agent;
  return (
    <div className='col-12 col-sm-6 col-md-6 col-lg-3'>
      <div className='agent position-relative overflow-hidden mb-4'>
        <div className='agent__profile-image-container'>
          <img src={`/images/agents/${agent.image}`} alt='' />
        </div>
        <div className='agent__content'>
          <h6 className='agent__title text--heading mb-1'>{agent.title}</h6>
          <p className='agent__designation mb-2 text--sm text--secondary'>Real Estate Broker</p>
          <p className='agent__contact text--sm'>
            <span className='agent__contact-icon text--secondary'><i className="fa fa-phone"></i></span>
            <a href={`tel:${agent.phone}`} className='agent__contact-text'>
              {agent.phone}
            </a>
          </p>
          <p className='agent__contact text--sm'>
            <span className='agent__contact-icon text--secondary'><i class="fa fa-envelope"></i></span>
            <a href={`mailto:${agent.email}`} className='agent__contact-text'>
            {agent.email}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Agent;
