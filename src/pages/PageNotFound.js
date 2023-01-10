import { MdOutlineKeyboardBackspace } from 'react-icons/md';
import { Link } from 'react-router-dom';

const PageNotFound = () => (
  <div className="page-not-found">
    <Link to="/">
      <MdOutlineKeyboardBackspace />
&nbsp;Go Back
    </Link>
    <h2 className="page-not-found-heading">Error 404: Page Not Found</h2>
    <p>Requested page is not available</p>
  </div>
);

export default PageNotFound;
