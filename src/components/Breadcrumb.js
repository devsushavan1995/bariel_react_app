import React from 'react';
import { NavLink } from 'react-router-dom';


function Breadcrumb(props) {

  function isLast(index) {
    return index === props.crumbs.length - 1;
  }

  return (
    <nav className="row justify-content-center mt-2">
      <ol className="breadcrumb">
        {
          props.crumbs.map((crumb, ci) => {
            const disabled = isLast(ci) ? 'disabled' : '';
            let crumbPath = "";
            if(crumb === "home") {
              crumbPath = "";
            }
            else {
              crumbPath = crumb.replace(/\s+/g, '-');
            }
            return (
              <li
                key={ ci }
                className="breadcrumb-item align-items-center"
              >
                {/* <button className={ `btn btn-link ${ disabled }` } onClick={ () => props.selected(crumb) }>
                  { crumb }
                </button> */}
                <NavLink to={`/${crumbPath}`} activeClassName="active" className={ `text-capitalize ${ disabled }` }>
                  { crumb }
                </NavLink>
              </li>
            );
          })
        }
      </ol>
    </nav>
  );
}

export default Breadcrumb;