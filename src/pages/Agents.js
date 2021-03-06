import React, { useState } from 'react';
import Pagetitle from '../components/Pagetitle';
import Agent from '../components/Agent';
import { agentsInfo } from '../data/agentsData';

function Agents() {
  const [crumbs, setCrumbs] = useState(['home', 'agents']);
  return (
    <div>
      <Pagetitle title='agents' crumbs={crumbs} bgImage='agents-pagetitle-bg.jpg' />
      <section className='section--padding agents-section'>
        <div className='container'>
          <div className='row'>
            {agentsInfo.map(agent => (
              <Agent key={agent._id} agent={agent} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Agents;
