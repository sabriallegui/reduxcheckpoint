import { Modal, Button } from "antd";
import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../Actions/action";
class Add extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
      newTodo: ""
    });
  };

  handleOk = e => {
    console.log(e);

    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          +
        </Button>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={() => {
            this.props.addNewTodo({
              id: Math.random(),
              title: this.state.newTodo,
              checked: false,
              edited: false
            });
            this.handleOk();
          }}
          onCancel={this.handleCancel}
        >
          <input
            type="text"
            placeholder="todo..."
            onChange={e => {
              this.setState({ newTodo: e.target.value });
            }}
          />
        </Modal>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    addNewTodo: payload => dispatch(addTodo(payload))
  };
};
export default connect(null, mapDispatchToProps)(Add);
