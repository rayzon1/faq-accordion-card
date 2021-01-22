import React from 'react';
import desktopWoman from '../images/illustration-woman-online-desktop.svg';
import arrowdown from '../images/icon-arrow-down.svg';

export default function Card() {

    return (
        <div className='card'>        
            <img src={desktopWoman} alt="desktop-woman-icon" className='card__desktop-image-woman'/>
            <div className='card__desktop-faq'>
                <h1 className='card__desktop-faq--title'>FAQ</h1>
                <div className='card__desktop-section-container'>
                <p className='card__desktop-faq--information'>How many team members can I invite?</p>
                <img src={arrowdown} alt="icon-arrow-down" className='card__desktop-icon-arrow'/>
                </div>
                <hr className='card__desktop-faq--divider'/>
                <div className='card__desktop-section-container'>
                <p className='card__desktop-faq--information'>How many team members can I invite?</p>
                <img src={arrowdown} alt="icon-arrow-down" className='card__desktop-icon-arrow'/>
                </div>
                <hr className='card__desktop-faq--divider'/>
                <div className='card__desktop-section-container'>
                <p className='card__desktop-faq--information'>How many team members can I invite?</p>
                <img src={arrowdown} alt="icon-arrow-down" className='card__desktop-icon-arrow'/>
                </div>
                <hr className='card__desktop-faq--divider'/>
                <div className='card__desktop-section-container'>
                <p className='card__desktop-faq--information'>How many team members can I invite?</p>
                <img src={arrowdown} alt="icon-arrow-down" className='card__desktop-icon-arrow'/>
                </div>
                <hr className='card__desktop-faq--divider'/>
            </div>
        </div>
    )
}