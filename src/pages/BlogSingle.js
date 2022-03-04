import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Pagetitle from '../components/Pagetitle';
import { posts } from '../data/blogPosts';

function BlogSingle() {
  const [post, showPost] = useState([]);
  const [errorStatus, showErrorStatus] = useState(false);
  let { id } = useParams();

  useEffect(()=> {
    if(posts.length > 0) {
      let post = posts.find((post) => {
        return post._id == id;
      });
      if(post) {
        showPost(post);
      }
      else {
        showErrorStatus(true);
      }
    }
    else {
      showErrorStatus(true);
    }
  }, []);

  return (
    <div className='site-content site-content--blog-single'>
      <Pagetitle title={post.title} crumbs={['home', 'blog', id]} />
      <section className='section--padding'>
        <div className='container'>
          {!errorStatus ? (
          <div className='row justify-content-center'>
            <div className='col-12 col-md-12 col-lg-10 col-xl-9'>
              <h3 className='text--heading post__title mb-5'>{post.title}</h3>
              <div className='post__image mb-5'>
                <img src={`/images/blog/${post.image}`} alt='' />
              </div>
              <div className='post__content text--para'>
                  ${post.content}
              </div>
            </div>
          </div>
          ) : (<h6 className='text-danger'>Sorry, this post is removed.</h6>)}
        </div>
      </section>
    </div>
  );
}

export default BlogSingle;
