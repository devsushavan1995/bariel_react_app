import React, { useState } from 'react';
import Pagetitle from '../components/Pagetitle';
import BlogPost from '../components/BlogPost';
import { Link } from 'react-router-dom';
import { posts } from '../data/blogPosts.js';
function Blog() {
  const [crumbs, setCrumbs] = useState(['home', 'blog']);
  const [showPosts, setShowPosts] = useState(posts);
  let recentPostCounter = 0;

  let postsCategories = [];
  posts.forEach((post) => {
      post.categories.forEach((cat) => {
        postsCategories.push(cat);
      })
  })
  let finalCategories = postsCategories.filter((cat,inx) => postsCategories.indexOf(cat) === inx);
//   console.log(finalCategories);
 let popularCategoriesCounter = 0;
  return (
    <div className='site-content'>
      <Pagetitle title='blog' crumbs={crumbs} />
      <section className='blog-section section--padding'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-8 col-lg-8'>
              <div className='blog__posts-wrapper'>
                <div className='row'>
                  {showPosts.reverse().map(post => (
                    <BlogPost key={post._id} data={post} />
                  ))}
                </div>
              </div>
            </div>
            <div className='col-12 col-md-4 col-lg-4'>
              <div className='blog-sidebar bg--light p-4 position-sticky'>
                <div className='blog__search-input-container'>
                  <input type='text' name='blogSearchText' placeholder='Search here...' className='blog__search-input bg--light-white' />
                </div>
                <h6 className='text--heading mb-3'>Recent Posts</h6>
                <ul className='blog__recent-posts'>
                  {posts.reverse().map(post => {
                    if (recentPostCounter < 4) {
                      recentPostCounter++;
                      return (
                        <li className='recent-post mb-3'>
                          <Link to='/' className='d-flex align-items-center'>
                            <span className='recent-post__image'>
                              <img src={`/images/blog/${post.image}`} alt='' width='64' />
                            </span>
                            <span className='recent-post__title'>{post.title}</span>
                          </Link>
                        </li>
                      );
                    }
                  })}
                </ul>
                <h6 className='text--heading mb-3'>Popular Categories</h6>
                <div className='blog__popular-categories'>
                  <div className='row'>
                     {finalCategories.map((cat) => {
                         if(popularCategoriesCounter < 7) {
                            popularCategoriesCounter++;
                            return (
                                <Link to={`/blog/${cat.replace(/\s+/g, '-')}`} className='text-capitalize'>{cat}</Link> 
                            );
                         }
                     })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;
