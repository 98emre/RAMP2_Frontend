import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap';
import InputDataLogIn from './InputDataLogIn';
function SectionActionSuggestionWholePage({
    lightBg,
    topLine,
    lightText,
    lightTextDesc,
    headline,
    description,
    descriptionOne,
    descriptionTwo,
    descriptionThree,
    descriptionFour,
    descriptionOneHeader,
    descriptionTwoHeader,
    descriptionThreeHeader,
    descriptionFourHeader,
    inputDataLoggedIn
}) {
    return (
        <>
            <div className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'} >
                <div className='container'>
                    <div className='col'>
                        <InputDataLogIn/>
                        <div className='top-line'>{topLine}</div>
                        <h1 className={lightText ? 'heading' : 'heading dark'}>{headline}</h1>
                        <p className={lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}>{description}</p>

                        <h2 className={lightTextDesc ? 'home__hero-subtitle' : 'h3 dark'}>{descriptionOneHeader}</h2>
                        <p className={lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}> {descriptionOne}</p>

                        <h2 className={lightTextDesc ? 'home__hero-subtitle' : 'h3 dark'}> {descriptionTwoHeader}</h2>
                        <p className={lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}> {descriptionTwo}</p>

                        <h2 className={lightTextDesc ? 'home__hero-subtitle' : 'h3 dark'}> {descriptionThreeHeader}</h2>
                        <p className={lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}>{descriptionThree}</p>

                        <h2 className={lightTextDesc ? 'home__hero-subtitle' : 'h3 dark'}> {descriptionFourHeader}</h2>
                        <p className={lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}>{descriptionFour} </p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SectionActionSuggestionWholePage;