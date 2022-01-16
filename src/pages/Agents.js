import React from 'react'
import Pagetitle from '../components/Pagetitle'
import Agent from '../components/Agent';
import * as AgentsInfo from '../data/agentsData';

function Agents() {
    return (
        <div className='site-content'>
            <Pagetitle title="agents"/>
            <section className="section--padding agents-section">
                <div className="container">
                    <div className="row">
                    {AgentsInfo.agentsData.map(agent => <Agent agent={agent}/>)}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Agents
