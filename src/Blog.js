import React from 'react'
import { connect, } from 'react-redux'
import PostForm from './PostForm'

class Blog extends React.Component {

  render(){
    return(
      <div>Blog Page
        <PostForm blog_id={this.props.match.params.blog_id}/>
        {this.props.blogs.map(b=>
        { if (b.id == this.props.match.params.blog_id) 
          return (
            <div>
              {b.posts.map(p=>
                <div>{p.body}
                </div>)}
            </div>) 
            return
          }
        )}
        
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {blogs: state.blogs}
}

export default connect(mapStateToProps)(Blog)