import React from 'react';
import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import bootstrap from 'bootstrap';


function Footer({
  lightBg,
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
}) {
  return (
    <>
      <footer className='bg-dark text-center text-white'>
        <div className='container p-4'>
          <section className='mb-4'>
            <a className="btn btn-primary btn-floating m-1" href='https://www.kth.se/en'> KTH Home</a>
          </section>
          <section className="mb-4">
            <p>
              More information about Ramp and PDF-versions of RAMP I and RAMP II is available at KTH:s homepage, School of Technology and Health.
            </p>
          </section>
        </div>
        <div className="text-center p-3" >
          © 2022 Copyright:
          <a className="text-decoration-none" href="https://www.ramp.proj.kth.se/ramp-risk-management-assessment-tool-for-manual-handling-proactively-1.730128">Ramp.se</a>
        </div>
      </footer>
    </>
  )
}
export default Footer;

