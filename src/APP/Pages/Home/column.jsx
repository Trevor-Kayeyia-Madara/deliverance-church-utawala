import React from 'react';

const ThreeColumnSection = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">Column 1</h5>
              <p className="card-text">This is the content of the first column.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">Column 2</h5>
              <p className="card-text">This is the content of the second column.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">Column 3</h5>
              <p className="card-text">This is the content of the third column.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeColumnSection;
