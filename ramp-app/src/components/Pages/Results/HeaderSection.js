import react from 'react';
import '../../Section/Section.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap';
function HeaderSection({
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
            <div className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'} >
                <div className='container'>
                    <div className='col'>
                        <div className='row'>
                            <div className='col-8'>
                                <div className='top-line'>{topLine}</div>
                                <h1 className={lightText ? 'heading' : 'heading dark'}>{headline}</h1>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}
export default HeaderSection;