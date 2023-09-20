import React from 'react';

function About() {

    const aboutStyle = {
        textAlign: 'center',
        backgroundColor: '#f0f0f0',
        padding: '20px',
    };

    const headingStyle = {
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '10px',
    };

    const paragraphStyle = {
        fontSize: '16px',
        lineHeight: '1.5',
        marginBottom: '10px',
    };

    return (
        <>
            <div style={aboutStyle} className="about-container">
                <h1 style={headingStyle}>About Us</h1>
                <p style={paragraphStyle}>
                    Welcome to our company! We are dedicated to providing high-quality products
                    and services to our customers.
                </p>
                <p style={paragraphStyle}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis turpis vel
                    nunc iaculis facilisis.
                </p>
            </div>

        </>
    )
}

export default About;