import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, fetchAllUsers } from '~/store/actions/adminActions';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }
  handleOnchangeInput = (e) => {
    this.setState({
      text: e.target.value,
    });
  };
  componentDidMount() {
    this.props.fetchAllUsers();
  }
  render() {
    let { addTodo, todos } = this.props;
    console.log('check prop todo', todos);
    let { text } = this.state;
    return (
      <>
        <input value={this.state.text} onChange={(e) => this.handleOnchangeInput(e)} />
        <button onClick={() => addTodo(text)}>Add</button>
        {todos &&
          todos.length > 0 &&
          todos.map((item, index) => {
            return <li key={index}>{item.name}</li>;
          })}
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    todos: state.admin.todos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return { addTodo: (text) => dispatch(addTodo(text)), fetchAllUsers: () => dispatch(fetchAllUsers()) };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
