import React, { useEffect, useState } from 'react';
import Pagetitle from '../components/Pagetitle';
import BlogPost from '../components/BlogPost';
import { Link } from 'react-router-dom';
import { posts } from '../data/blogPosts.js';
function Blog() {
  const [crumbs, setCrumbs] = useState(['home', 'blog']);
  const [showPosts, setShowPosts] = useState([]);
  const [searchVal, setSearchVal] = useState('');
  const [errorStatus, setErrorStaus] = useState(false);

  useEffect(()=> {
    if(!posts.length == 0) {
      setShowPosts(posts);
    }
    else {
      setErrorStaus(true);
    }
  },[]);

  let recentPostCounter = 0;

  let postsCategories = [];
  posts.forEach(post => {
    post.categories.forEach(cat => {
      postsCategories.push(cat);
    });
  });
  let finalCategories = postsCategories.filter((cat, inx) => postsCategories.indexOf(cat) === inx);
  //   console.log(finalCategories);
  let popularCategoriesCounter = 0;

  const handleChange = e => {
    const data = e.target.value;
    setSearchVal(data);
    blogFilter(data);
  };

  const blogFilter = val => {
    if (val === '') {
      setShowPosts(posts);
      setErrorStaus(false);
    } else {
      const updatedPosts = showPosts.filter(post => post.title.toLowerCase().replace(/\s/g, '').includes(val.toLowerCase())).map(filteredPost => filteredPost);
      setShowPosts(updatedPosts);
      if (updatedPosts.length <= 0) {
        setErrorStaus(true);
      }
    }
  };
  return (
    <div>
      <Pagetitle title='blog' crumbs={crumbs} bgImage='blog-pagetitle-bg.jpg' />
      <section className='blog-section section--padding'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-8 col-lg-8'>
              <div className='blog__posts-wrapper'>
                {errorStatus ? <h6 className='text--secondary text--center'>Sorry, No match found!</h6> : null}
                <div className='row'>
                  {showPosts.reverse().map(post => (
                    <BlogPost key={post._id} data={post} />
                  ))}
                </div>
              </div>
            </div>
            <div className='col-12 col-md-4 col-lg-4'>
              <div className='blog-sidebar bg--light p-4 position-sticky mt-5 mt-md-0'>
                <div className='blog__search-input-container'>
                  <input type='text' name='blogSearchText' placeholder='Search post here...' value={searchVal} className='blog__search-input bg--light-white' onChange={handleChange} />
                </div>
                <h6 className='text--heading mb-3'>Recent Posts</h6>
                <ul className='blog__recent-posts'>
                  {posts.reverse().map(post => {
                    if (recentPostCounter < 4) {
                      recentPostCounter++;
                      return (
                        <li className='recent-post mb-3'>
                          <Link to={`/blog/${post._id}`} className='d-flex align-items-center'>
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
                  <div className='row mx-1'>
                    {finalCategories.map(cat => {
                      if (popularCategoriesCounter < 7) {
                        popularCategoriesCounter++;
                        return (
                          <Link to={`/blog/category=${cat.replace(/\s+/g, '-')}`} className='text-capitalize'>
                            {cat}
                          </Link>
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
