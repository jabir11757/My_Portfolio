import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../shared/Loading';
import Project from './Project';

const Projects = () => {
    const { data: myProjects = [], isLoading } = useQuery({
        queryKey: ["myProjects"],
        queryFn: async () => {
            const res = await fetch('https://personal-portfolio-server-pi.vercel.app/projects');
            const data = await res.json();
            return data;
        }
    })

    if (isLoading) {
        return <Loading />
    }
    const skills = [
        {
            skillName: 'JavaScript',
            value: 70
        },
        {
            skillName: 'Express',
            value: 50
        },
        {
            skillName: 'TypeScript',
            value: 80
        },
        {
            skillName: 'Node',
            value: 60
        },
        {
            skillName: 'Mongo',
            value: 40
        }
    ]

    return (
        <div>
            <h1 id='projects' className='text-2xl font-bold text-center my-10'>Projects & Skills</h1>

            <div className='projects grid grid-cols-1 lg:grid-cols-2'>
                <div className='text-center'>
                    <h1 className='text-success text-xl font-bold'>Skills</h1>
                    <div className='flex justify-center'>
                        <div className='grid gap-6 grid-cols-1 lg:grid-cols-2 '>
                            {
                                skills.map((skill, index) =>
                                    <div key={index} className='text-start my-4'>
                                        <h1 className='mb-3'>{skill.skillName}</h1>
                                        <progress className="progress progress-success w-56" value={skill.value} max="100"></progress>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
                <div className='text-center'>
                    <h1 className='text-success text-xl font-bold'>Projects</h1>
                    <div>
                        {
                            myProjects.map(projects => <Project key={projects._id} projects={projects} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;