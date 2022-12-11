import React from 'react';
import { Link } from 'react-router-dom';

const Project = ({ projects }) => {
    const { _id, projectName, picture, descriptions } = projects;

    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row">
                <img src={picture} alt='' className="rounded-lg shadow-2xl" style={{ height: '18vh', width: '12vw' }} />
                <div>
                    <h1 className="text-xxl font-bold">{projectName}</h1>
                    <p className="py-2">{descriptions}</p>
                    <Link to={`/projects/${_id}`} ><span className='text-success'>See details</span></Link>
                </div>
            </div>
        </div>
    );
};

export default Project;