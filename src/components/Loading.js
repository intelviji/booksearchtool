import React from "react";
const Loading = (props) => {
  if (props.loading)
    return (
      <div className="loading">
        <i className="fas fa-spinner fa-spin"></i>
        <p>Loading.... Please wait!....</p>
      </div>
    );
  else return "";
};
export default Loading;
