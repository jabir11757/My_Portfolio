import React from 'react';
import mern from '../../../images/mern.png'

const Header = () => {

    const downloadResume = () => {
        fetch('Resume_Abdullah_Al-Mamun.pdf').then(response => {
            response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Resume_Abdullah_Al-Mamun.pdf';
                alink.click();
            })
        })
    }
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${mern})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center items-end text-neutral-content">
                <div className="max-w-md">
                    <button onClick={downloadResume} className="btn btn-success">Download Resume</button>
                    <h1>.</h1>
                    <h1>.</h1>
                </div>
            </div>
        </div>
    );
};

export default Header;