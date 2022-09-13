import React from "react";

const Summary = () => {
    return (
        <div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingNine">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-result" aria-expanded="false" aria-controls="flush-result">
                        Result Summary
                    </button>
                </h2>
                <div id="flush-result" className="accordion-collapse collapse" aria-labelledby="flush-headingNine" data-bs-parent="#result">
                    <div className="accordion-body">
                        <div className="card-body bg-light">
                            <table className="table table-bordered">
                                <tbody>
                                    <tr>
                                        <th>Total risk Score</th>
                                        <td>Totala poäng</td>
                                    </tr>

                                    <tr>
                                        <th>Number Of Red Assessments (high risk)</th>
                                        <td>Röd för runt om samt antalet nummer</td>
                                    </tr>

                                    <tr>
                                        <th>Number Of Yellow Assessments (risk)</th>
                                        <td>Gul för runt om samt antalet nummer</td>
                                    </tr>

                                    <tr>
                                        <th>Number Of Green Assessments (low risk)</th>
                                        <td>Grön för runt om samt antalet nummer</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <br />
        </div>
    );
};

export default Summary;