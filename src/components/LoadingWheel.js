import React from "react";

export const LoadingWheel = ({ checking }) => {
  return (
    <div className={`loadingwheel ${checking && "loadingwheel__full"}`}>
      <div className="loadingio-spinner-rolling-akosfotwlei">
        <div className="ldio-jolz3mwiuo">
          <div></div>
        </div>
      </div>
    </div>
  );
};
