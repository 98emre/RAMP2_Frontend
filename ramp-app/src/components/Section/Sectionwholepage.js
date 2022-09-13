import React from 'react';
import './Section.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap';
import InputData from '../Pages/ActionPlan/InputData/InputData';
import "../Pages/HomePage/homepage.css"

function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 200;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);

function Sectionwholepage({
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

                        <section>
                            <div className='container reveal'>
                                <div style={{ textAlign: 'center', borderBottom: '2px solid #242424' }} className='top-line'>{topLine}</div>
                                <h3 className={lightText ? 'heading' : 'heading dark'}>{headline}</h3>
                                <p className={lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}>{description}</p>

                                <h3 className={lightTextDesc ? 'home__hero-subtitle' : 'h3 dark'}>{descriptionOneHeader}</h3>
                                <p className={lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}> {descriptionOne}</p>

                                <h3 className={lightTextDesc ? 'home__hero-subtitle' : 'h3 dark'}> {descriptionTwoHeader}</h3>
                                <p className={lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}> {descriptionTwo}</p>

                                <h3 className={lightTextDesc ? 'home__hero-subtitle' : 'h3 dark'}> {descriptionThreeHeader}</h3>
                                <p className={lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}>{descriptionThree}</p>

                                <h3 className={lightTextDesc ? 'home__hero-subtitle' : 'h3 dark'}> {descriptionFourHeader}</h3>
                                <p className={lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}>{descriptionFour} </p>
                            </div>
                        </section>


                    </div>
                </div>
            </div>
        </>
    )
}
export default Sectionwholepage;