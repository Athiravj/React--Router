import { Link, Outlet } from "react-router-dom";

export const Products = () => {
  return (
    <div className="products">
      <div>
        {" "}
        <input type="search" placeholder="search products" />
      </div>
      <nav className="relative-link">
          <Link to='featured'>Featured</Link>
          <Link to='new'>New</Link>

      </nav>
      <Outlet/>
    </div>
  );
};


// these are the relative link, they does not start with back slash
// if a slash is given before new and featured it will result page not found, if we want to give like that we can simply give it like '/produts/new or /products/feaured'
{/* <nav>
<Link to='featured'>Featured</Link>
<Link to='new'>New</Link>

</nav> */}
