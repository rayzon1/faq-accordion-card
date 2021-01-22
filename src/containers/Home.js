import React from 'react';
import Card from '../components/Card';
import illustrationDesktop from '../images/illustration-box-desktop.svg';

export default function Home() {

    return (
        <div className='home'>
            <img src={illustrationDesktop} alt='illustration-box-desktop' className='home__desktop-box'/>
            <Card />
        </div>
    )
}