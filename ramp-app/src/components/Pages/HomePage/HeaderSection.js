import react from 'react';
import '../../Section/Section.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap';

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
    imgOneWidth,
    imgTwo,
    imgThree,
    altOne,
    altTwo,
    altThree,
    imageOneText,
    imageTwoText,
    imageThreeText,
}) {
    return (
        <>
            <div className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'} style={{height:'1100px'}}>
                <div className='container slideIn' style={{marginTop:'250px'}}>
                    <div className='row'>
                        <div className='col-8'>
                            <div className='top-line' style={{ borderBottom: '1px solid #1954A6' }}>{topLine}</div>
                            <h1 className={lightText ? 'heading' : 'heading dark'}>{headline}</h1>
                        </div>
                        <div className='col-sm-4'>
                            <figure className='figure'>
                                <img src={imgOne} alt={altOne} className='home__hero-img' width={imgOneWidth} />
                                <figcaption className='figure-caption'> {imageOneText} </figcaption>

                                <img src={imgTwo} alt={altTwo} className='home__hero-img' />
                                <figcaption className='figure-caption'> {imageTwoText} </figcaption>

                                <img src={imgThree} alt={altThree} className='home__hero-img' />
                                <figcaption className='figure-caption'> {imageThreeText} </figcaption>
                            </figure>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-sm-5' style={{ marginTop: '-100px' }}>
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
                        </div>
                    </div>









                </div>

            </div>

        </>
    )
}
export default Sections;