// Import React from "react"
import React from "react";

// Loading function
const Loading = () => {
  return (
    <React.Fragment>
      <div className="loader">
        <h4>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/d/de/Ajax-loader.gif"
            alt="Ajax-loader.gif"
          />
        </h4>
        <h6>Loading ...</h6>
      </div>
    </React.Fragment>
  );
};

// Export Loading
export default Loading;
