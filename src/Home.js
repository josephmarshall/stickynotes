import React from 'react'
import { connect, } from 'react-redux'
import BlogForm from './BlogForm'
import { Link, } from 'react-router-dom'
import { Container, Header, } from 'semantic-ui-react'

class Home extends React.Component {

  deleteBlog = (id) => {
    this.props.dispatch({type: "DELETE_BLOG", id, })
  }

  render(){
    return (

      <Container>
        <h1>This are your blogs</h1>
        <BlogForm />
        {this.props.blogs.map(b=> 
          <div key={b.id}>
            <Header as={Link} to={`/blogs/${b.id}`} >{b.name}</Header>
            <button onClick={()=>this.deleteBlog(b.id)}>x</button>
          </div>)}
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {blogs: state.blogs}
}

export default connect(mapStateToProps)(Home)