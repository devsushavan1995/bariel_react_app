import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Pagetitle from '../components/Pagetitle';
import { posts } from '../data/blogPosts.js';
import BlogPost from '../components/BlogPost';

function BlogCategoryArchive() {
  let { category } = useParams();
  const [crumbs, setCrumbs] = useState(['home', 'blog', `${category}`]);
  const [showPosts, setShowPosts] = useState(posts);
  return (
    <div className='site-content'>
      <Pagetitle title={`Blog Category=${category.replace(/-+/g, ' ')}`} crumbs={crumbs} />
      <section className='section--padding'>
          <div className="container">
              <div className="row">
                  {showPosts.filter((postItem) => {
                       return (postItem.categories.indexOf(category.replace(/-+/g, ' ')) >= 0)
                  }).map(finalItem => <BlogPost data={finalItem}/>)}
              </div>
          </div>
      </section>
    </div>
  );
}

export default BlogCategoryArchive;
