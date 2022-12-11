import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProjectsDetail = () => {
    const projectsDetail = useLoaderData();
    const { projectName, screenshots, bulletPoints, liveSite, gitRepoClient, gitRepoServer, gitRepo } = projectsDetail;

    return (
        <div className='bg-slate-200'>
            <h1 className='text-xl text-center font-bold'>{projectName}</h1>
            <div className='flex justify-center'>
                <div className='grid gap-6 grid-cols-1 lg:grid-cols-2  p-10'>
                    <img style={{ height: '30vh', width: '50vw' }} src={screenshots[0].image1} alt='' />
                    <img style={{ height: '30vh', width: '50vw' }} src={screenshots[0].image2} alt='' />
                    <img style={{ height: '30vh', width: '50vw' }} src={screenshots[0].image3} alt='' />
                    <img style={{ height: '30vh', width: '50vw' }} src={screenshots[0].image4} alt='' />
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
                <div>
                    <h1 className='text-xl font-bold text-center'>Projects Features</h1>
                    <div className='p-10'>
                        <p>* {bulletPoints[0].point1}</p>
                        <p>* {bulletPoints[0].point2}</p>
                        <p>* {bulletPoints[0].point3}</p>
                        <p>* {bulletPoints[0].point4}</p>
                    </div>
                </div>
                <div>
                    <h1 className='text-xl font-bold text-center'>Projects Information</h1>
                    <div className='p-10'>
                        <p className='text-center text-success'><a href={liveSite}>Site Link</a></p>
                        <p className='text-center text-success'><a href={gitRepoClient ? gitRepoClient : gitRepo}>Git Repo Client</a></p>
                        <p className='text-center text-success'><a href={gitRepoServer ? gitRepoServer : ' '}>Git Repo Server</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsDetail;