import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function BreadCrumbAll() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  return (
    <div className="bread-crumb">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <ul className="breadcrumb">
              <li>
                <Link to="/">Home</Link>
              </li>
              {pathnames.map((name, index) => {
                const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                const isLast = index === pathnames.length - 1;
                return (
                  <li key={name} className={isLast ? "active" : ""}>
                    {isLast ? (
                      name
                    ) : (
                      <Link to={routeTo}>{name}</Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BreadCrumbAll;
