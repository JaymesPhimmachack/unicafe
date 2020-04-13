import React from "react";

const Statistic = (props) => {
  return (
    <React.Fragment>
      <td>{props.text}</td> <td>{props.value}</td>
    </React.Fragment>
  );
};

export default Statistic;
