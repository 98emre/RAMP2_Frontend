import React from 'react';
import '../../../Section/Section.css';
import { Button } from '../../../Button/Button';
import { Link } from 'react-router-dom';
import InputForm from "../InputForm"
import "../InputData.css"

function SectionsInputData({
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
  buttonLabel,
  imgOne,
  imgTwo,
  imgThree,
  altOne,
  altTwo,
  altThree,
  imageOneText,
  imageTwoText,
  imageThreeText,
  imgStart
}){
    return(
        <>
            <div className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'} >
                <div className='container'>
                    <div
                        className='row home__hero-row'
                        style={{
                            display: 'flex',
                            flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'
                        }}
                    >
                        <div className='col'>
                            <div className='home__hero-text-wrapper'>
                                <div className='top-line'>{topLine}</div>
                                <h1 className={lightText ? 'heading' : 'heading dark'}>
                                    {headline}
                                </h1>
                                <p className={lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}>
                                    {description}
                                </p>
                                    <h2 className={lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}> {descriptionOneHeader}</h2>

                                    <p className={lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}>
                                        {descriptionOne}
                                    </p>
                                    <h2 className={lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}> {descriptionTwoHeader}</h2>
                                    <p className={lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}>
                                        {descriptionTwo}
                                    </p>
                                    <h2 className={lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}> {descriptionThreeHeader}</h2>
                                    <p className={lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}>
                                        {descriptionThree}
                                    </p>
                                    <h2 className={lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}> {descriptionFourHeader}</h2>
                                    <p className={lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}>
                                        {descriptionFour}
                                    </p>
                            </div>
                            <div className = 'inputDataContainer'>
                                <InputForm className={lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SectionsInputData;