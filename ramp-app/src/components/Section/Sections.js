import react from 'react';
import './Section.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap';

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

function Sections({
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
    imgOne,
    imgTwo,
    imgThree,
    altOne,
    altTwo,
    altThree,
    imageOneText,
    imageTwoText,
    imageThreeText,
    descriptionFive,
    descriptionSix,
    descriptionSeven,
    descriptionEigth,
    descriptionNine
}) {
    return (
        <>
            <div className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'} >
                <div className='container'>
                    <div className='row justify-content-md-center'>

                        <div className='col'>

                            <section>
                                <div className='container reveal'>
                                    <div className='top-line'>{topLine}</div>
                                    <h1 className={lightText ? 'heading' : 'heading dark'}>{headline}</h1>
                                    <p className={lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}>{description}</p>
                                    <h2 className={lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}>{descriptionOneHeader}</h2>
                                    <p className={lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}> {descriptionOne}</p>
                                    <h2 className={lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}> {descriptionTwoHeader}</h2>
                                    <p className={lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}> {descriptionTwo}
                                    </p>
                                    <h2 className={lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}> {descriptionThreeHeader}</h2>
                                    <p className={lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}>
                                        {descriptionThree}
                                    </p>
                                    <h2 className={lightTextDesc ? 'home__hero-subtitle2' : 'home__hero-subtitle2 dark'}> {descriptionFourHeader}</h2>
                                    <p className={lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}>
                                        {descriptionFour}
                                    </p>
                                    <p className={lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}>
                                        {descriptionFive}
                                    </p>
                                    <p className={lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}>
                                        {descriptionSix}
                                    </p>
                                    <p className={lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}>
                                        {descriptionSeven}
                                    </p>
                                    <p className={lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}>
                                        {descriptionEigth}
                                    </p>
                                    <p className={lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}>
                                        {descriptionNine}
                                    </p>
                                </div>
                            </section>

                        </div>
                        <div className='col'>
                            <section>
                                <div className='container reveal'>
                                    <figure className='figure'>
                                        <img src={imgOne} alt={altOne} className='home__hero-img' />
                                        <figcaption className='figure-caption'> {imageOneText} </figcaption>

                                        <img src={imgTwo} alt={altTwo} className='home__hero-img' />
                                        <figcaption className='figure-caption'> {imageTwoText} </figcaption>

                                        <img src={imgThree} alt={altThree} className='home__hero-img' />
                                        <figcaption className='figure-caption'> {imageThreeText} </figcaption>
                                    </figure>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Sections;