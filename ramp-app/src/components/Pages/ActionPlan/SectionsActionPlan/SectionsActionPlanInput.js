import React from 'react';
import '../../../Section/Section.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap';
import { connect } from "react-redux";
import FindCheckList from '../FindCheckList';
import FindActionPlan from '../FindActionPlan';
import FindActionPlanStartNew from '../FindActionPlanStartNew';
import FindAllActionPlan from '../FindAllActionPlan';
import {
    setActionPlanId,
    setActionPlan,
    setActionPlanName,
    setDate,
    setFormedBy,
    setNote,
    setOrderBy,
    setUpdateActionPlan
} from "../../../../actions/actionPlanActions/actionPlanActions"

const mapStateToProps = (state) => ({
    actionPlansProps: state.actionPlanState,
});

const SectionsActionPlanInput = ({
    setActionPlanId,
    setActionPlan,
    setActionPlanName,
    setUpdateActionPlan, 
    actionPlansProps,
    setOrderBy,
    setFormedBy,
    setDate,
    setNote,
    lightBg, topLine, lightText, headline }) => {
    (() => {
        'use strict';
        const forms = document.querySelectorAll('.needs-validation');
        Array.prototype.slice.call(forms).forEach((form) => {
            form.addEventListener('submit', (event) => {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    })();

    return (
        <>
            <div className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'} >
                <div className='container'>
                    <div className='row'>
                        <div className="col">
                            <div className="top-line">{topLine}</div>
                            <h1 className={lightText ? "heading" : "heading dark"}>
                                {headline}
                            </h1>
                        </div>
                    </div>
                    <form className='inputdata-form needs-validation' noValidate>
                        <div className='row'>
                            <div className='form-group col'>
                                <input
                                    required
                                    maxLength={65}
                                    placeholder='Ordered by'
                                    className='form-control'
                                    type='text'
                                    value={actionPlansProps.orderBy}
                                    onChange={(e) => {
                                        setOrderBy(e.target.value);
                                    }}
                                />
                                <div className="invalid-feedback">*Please enter ordered by</div>
                            </div>
                            <div className='form-group col'>
                                <input
                                    required
                                    maxLength={65}
                                    placeholder='Formed by'
                                    className='form-control'
                                    type='text'
                                    value={actionPlansProps.formedBy}
                                    onChange={(e) => {
                                        setFormedBy(e.target.value);
                                    }}
                                />
                                <div className="invalid-feedback">*Please enter formed by </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='form-group col-2'>
                                <input
                                    required
                                    maxLength={65}
                                    placeholder='Date'
                                    className='form-control'
                                    type='date'
                                    value={actionPlansProps.date}
                                    onChange={(e) => {
                                        setDate(e.target.value);
                                    }}
                                />
                                <div className="invalid-feedback">*Enter a date </div>
                            </div>
                            <div className='form-group col'>
                                <input
                                    maxLength={65}
                                    placeholder='Note'
                                    className='form-control'
                                    type='text'
                                    value={actionPlansProps.note}
                                    onChange={(e) => {
                                        setNote(e.target.value);
                                    }}
                                />
                            </div>
                        </div>
                        <br />
                    </form>
                    <div>
                        <button className='btn btn-primary btn-lg' type='submit'
                            data-bs-dismiss="modal" data-bs-toggle='modal' data-bs-target="#FetchOldActionPlan">
                            Search for an existing checklist
                        </button>
                        <FindCheckList />
                    </div>
                    <div style={{ "paddingTop": "2rem" }}>
                        <button className='btn btn-primary btn-lg' type='submit'
                            data-bs-dismiss="modal" data-bs-toggle='modal' data-bs-target="#ActionPlandFind">
                             Search for an existing Action plan
                        </button>
                        <FindActionPlan />
                    </div>
                    <div style={{ "paddingTop": "2rem" }}>
                        <button className='btn btn-primary btn-lg' type='submit'
                            data-bs-dismiss="modal" data-bs-toggle='modal' data-bs-target="#ActionPlandFindStartNew">
                             Create new from an existing Action plan
                        </button>
                        <FindActionPlanStartNew />
                    </div>   
                    <div style={{ "paddingTop": "2rem" }}>
                        <button className='btn btn-primary btn-lg' type='submit'
                            data-bs-dismiss="modal" data-bs-toggle='modal' data-bs-target="#FindAllActionPlan">
                            Find all Action plans
                        </button>
                        <FindAllActionPlan />
                    </div>
                </div>
            </div>
        </>
    )
}
export default connect(mapStateToProps, {
    setActionPlanId,
    setActionPlan,
    setActionPlanName,
    setOrderBy,
    setFormedBy,
    setDate,
    setNote,
    setUpdateActionPlan
})(SectionsActionPlanInput);