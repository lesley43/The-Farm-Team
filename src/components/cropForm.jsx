import React from "react";

const CropForm = ({ match, history }) => {
  return (
    <div>
      <h1> Crop Info </h1>
      <h1> {match.params.name} </h1>
      <button
        className="btn btn-primary"
        onClick={() => history.push("/crops")}
      >
        Back
      </button>
    </div>
  );
};

export default CropForm;