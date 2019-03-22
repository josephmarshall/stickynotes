import React from 'react'
import { connect, } from 'react-redux'

class PostForm extends React.Component {
  state = {body: "", id: "", blog_id: ""}
  //TOTO add a time to post data
  handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch, id, } = this.props;
    const { body, } = this.state
    const post = { body, id, blog_id: parseInt(this.props.blog_id) }
    dispatch({ type: 'ADD_POST', post, });
    dispatch({ type: 'INC_ID', })
    this.setState({ body: '', });
  }

  handleChange = (e) => {
    this.setState({ body: e.target.value, });
  }

  render() {
    const { body, } = this.state;

    return (
      <div>
        <h3>Add A Blog</h3>
        <form id="postform" onSubmit={this.handleSubmit}>
          <textarea form="postform" value={body} onChange={this.handleChange} />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { id: state.nextId, };
};

export default connect(mapStateToProps)(PostForm)
