import { Link,useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";


const Blog = () => {
  const [searchParams, setSearchParams] = useSearchParams();
 


  const { data, error, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }
  const handleChange = (e) => {
    let filter = e.target.value;
    setSearchParams({ filter:filter });
    console.log(e.target.value)
    console.log('change')
  }

  return (
    <>
            <h1>Blog</h1>
            <input type="text" onChange={handleChange} className="form-control my-3"   value={searchParams.get("filter") || ""}/>
      <ul className="list-group">
        
        {data
           .filter((item) => {
            let filter = searchParams.get("filter");
            if (!filter) return true;
            let name = item.title.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          })
          .map((item) => (
        
          <Link to={`/blog/${item.id}`} key={item.id} className="list-group-item">
            {item.id} - {item.title}
          </Link>
          
          
      ))}
     </ul>
            </>
  );
};

export default Blog;
