import React from 'react';
import { Button } from '../../../Button/Button';
import { Link } from 'react-router-dom';
import Table from '../../../Table/Table';
import {list, listTwo, listThree, listFour, listFive,  colNames, colNamesTwo, colNamesThree, colNamesFour, colNamesFive, listTitle, colNamesTitle} from '../TableData';

function SectionsActionModel({
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
  imgStart,

}){
    return(
        <>
            <div className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'} >
                <div className='container'>
                        <div className='row'>
                            <Table list={listTitle} colNames={colNamesTitle}/>
                            <Table list={list} colNames={colNames}/>
                            <Table list={listTwo} colNames={colNamesTwo}/>
                            <Table list={listThree} colNames={colNamesThree}/>
                            <Table list={listFour} colNames={colNamesFour}/>
                            <Table list={listFive} colNames={colNamesFive}/>

                            <div className='home__hero-img-wrapper'>
                                    <img src={imgOne} alt={altOne} className='actionModel-img' />
                                    <p className={lightTextDesc ? 'home__hero-subtitleimg' : 'home__hero-subtitle dark'}>{imageOneText}</p> 
                  
                                    <img src={imgTwo} alt={altTwo} className='home__hero-img' />                              
                                    <p className={lightTextDesc ? 'home__hero-subtitleimg' : 'home__hero-subtitle dark'}>{imageTwoText}</p> 

                                    <img src={imgThree} alt={altThree} className='home__hero-img' />
                                    <p className={lightTextDesc ? 'home__hero-subtitleimg' : 'home__hero-subtitle dark'}>{imageThreeText}</p> 
                            </div>
                        </div>
                    
                   
                </div>
            </div>
        </>
    )
}
export default SectionsActionModel;