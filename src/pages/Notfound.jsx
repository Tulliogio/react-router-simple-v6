import { Link } from "react-router-dom";

const Notfound = () => {
     return (
          <>
               <h1>404</h1>
               <Link to="/" className="btn btn-dark">Volver a inicio</Link>
          </>
     )
};
export default Notfound;