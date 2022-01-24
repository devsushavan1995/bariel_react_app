import React from 'react';
import { Link } from 'react-router-dom';
import '../css/BlogPost.css'

function BlogPost(props) {
  const post = props.data;
  return <div className='col-12 col-md-6 col-lg- mb-4'>
      <article className='post'>
          <Link to={`/blog/${post._id}`} className="post__image-container">
              <img src={`/images/blog/${post.image}`} alt="" />
          </Link>
          <div className="post__content px-3 pb-3 px-md-4 pb-md-4 pt-3">
              <div className="post__categories row mb-2 mx-1 d-none">
                    <Link to="/">Apartment</Link>
                    <Link to="/">Building</Link>
                    <Link to="/">Asset</Link>
              </div>
              <h6 className="post__title text--heading"><Link to={`/blog/${post._id}`} >{post.title}</Link></h6>
              <p className="text--para text--sm">{post.excerpt}</p>
              <p className="text--secondary text--sm m-0 post__publish-date">
                  <span><i className="fas fa-calendar-alt"></i></span>
                  <span>{post.publishedDate}</span>
              </p>
          </div>
      </article>
  </div>;
}

export default BlogPost;
