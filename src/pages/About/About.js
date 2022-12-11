import React from 'react';
import jabir from '../../images/jabir.jpg'

const About = () => {
    return (
        <div>
            <h1 className='text-2xl text-center font-bold mb-10'>About Me</h1>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={jabir} alt='' className="w-1/2 rounded-lg shadow-2xl" />
                    <div>
                        <p className='font-bold text-success mt-2'>My Thinking</p>
                        <p className="py-2">I prefer to take decisions based on feelings or instinct
                            rather than rely on evidence. As a result,I tends to pay
                            attention to different views and opinions rather than spending their
                            time analysing data.
                            I usually prefers following established and proven approaches
                            when dealing with any obstacles. I appreciates the need for
                            authority and rules and can adjust easily to this. I'm
                            generally practical and down to earth but at times may benefit from
                            keeping an open mind to new or novel approaches to problems.
                        </p>
                        <p className='font-bold text-success mt-2'>Progressing</p>
                        <p className="py-2">Abdullah is comfortable with working in rapidly changing
                            environments.
                            Abdullah recovers quickly from setbacks and does not let negativity
                            pull them down.
                            Abdullah is focused and drives their team towards desired
                            outcomes irrespective of obstacles</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;