import React, { useState } from 'react';
import Pagetitle from '../components/Pagetitle';

function BlogSingle() {
    const [crumbs, setCrumbs] = useState(['home', 'blog', 'blog single']);
  return (
      <div className="site-content">
          <Pagetitle title="Blog Single" crumbs={crumbs}/>
      </div>
  );
}

export default BlogSingle;
