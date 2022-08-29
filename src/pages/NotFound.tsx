import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <>
    <Helmet>
      <title>Not found!</title>
    </Helmet>
    <div className="h-[calc(100vh-100px)] flex flex-col items-center justify-center">
      <div className="max-w-md text-center">
        <h1 className="text-5xl font-bold">404 Not found</h1>
        <Link to="/" className="mt-5 btn btn-primary">Go home</Link>
      </div>
    </div>
  </>
);

export default NotFound;
