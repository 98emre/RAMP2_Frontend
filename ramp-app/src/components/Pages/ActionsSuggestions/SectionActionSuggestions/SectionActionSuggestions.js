import { connect } from "react-redux";
import "../../../Section/Section.css";
import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import bootstrap from "bootstrap";
import { useNavigate } from "react-router-dom";
import { Component } from "react";

const mapStateToProps = (state) => ({
  inputDataProps: state.inputDataState,
});

function SectionsActionSuggestions({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  inputDataProps,
}) {
  return (
    <>
      <div
        className={lightBg ? "home__hero-section" : "home__hero-section darkBg"}
      >
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="top-line">{topLine}</div>
              <h1 className={lightText ? "heading" : "heading dark"}>
                {headline}
              </h1>
              <p
                className={
                  lightTextDesc
                    ? "home__hero-subtitle"
                    : "home__hero-subtitle dark"
                }
              >
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default connect(mapStateToProps, {})(SectionsActionSuggestions);
