import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Pagetitle from '../components/Pagetitle';
import { posts } from '../data/blogPosts';

function BlogSingle() {
  let { id } = useParams();
  id = parseInt(id);
  const [crumbs, setCrumbs] = useState(['home', 'blog', `${id}`]);
  let post = posts.filter(x => {
    if (x._id === id) {
      return x;
    }
  });
  if (post) {
    post = post[0];
  }
  //   console.log(post.title);
  return (
    <div className='site-content site-content--blog-single'>
      <Pagetitle title={post.title} crumbs={crumbs} />
      <section className='section--padding'>
        <div className='container'>
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
        </div>
      </section>
    </div>
  );
}

export default BlogSingle;
