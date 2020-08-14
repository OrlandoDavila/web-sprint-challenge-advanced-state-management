import React from "react";
import Smurf from './smurf'
import { connect } from "react-redux";

const SmurfList = (props) => {
  return (
    <div>
      {props.state.map((smurf) => (
        <Smurf
          smurf={smurf}
        />
      ))}
    
    </div>
  );
};



const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    state: state.smurfList,
    error: state.error,
  };
};

export default connect(mapStateToProps, {})(SmurfList);