import React from "react";
import AddFishForm from "./AddFishForm"
import EditFishForm from './EditFishForm'
import PropTypes from 'prop-types'

class Inventory extends React.Component {
  static propTypes = {
    fishes: PropTypes.object,
    updateFish: PropTypes.func,
    deleteFish: PropTypes.func,
    loadSampleFishes: PropTypes.func
  }

  render() {
    return (
      <div className="AddFishForm">
      <h2>Inventory</h2>
        {Object.keys(this.props.fishes).map(key =>
        <EditFishForm
        key={key}
        fish={this.props.fishes[key]}
        index={key}
        deleteFish={this.props.deleteFish}
        updateFish={this.props.updateFish} />)}
        <AddFishForm addFish={this.props.addFish} />
        <button onClick={this.props.loadSampleFishes}>Load Sample Fishes</button>
      </div>
    )
  }
}

export default Inventory;
