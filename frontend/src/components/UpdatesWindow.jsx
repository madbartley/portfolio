import InfiniteScroll from "react-infinite-scroll-component";
import { useState, useEffect } from 'react'; 
import { render } from "react-dom";
import axios from 'axios';
import UpdatesCard from './UpdatesCard';

const API_URL = import.meta.env.VITE_API_URL;

function UpdatesWindow(props) {

  const projectName=props;
  const project_name = props.project;
  let ending = " ";

  if (project_name === "Coming soon - robotics" || project_name === "Coming soon - data science and ML" ) {
    ending = "for now"
  } else {
    ending = " for " + project_name;
  }

  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [nextPage, setNextPage] = useState(null);


  const fetchData = async () => {
    try {
      // store the response in variable "response"
      const response = await axios(`${API_URL}?page=${page}`);
      // set state with the new response data
      setNextPage(response.data.next);
      setData(data.concat(response.data.results));
      if(!response.data.next) {
        setHasMore(false);
      }
      console.log("Data response: ", response.data);
    } catch (error) {
      console.log(error)
    }
  };

  console.log("NEXT: ", nextPage);

  
    useEffect(() => {
      
      (async () => {
        await fetchData();
        setPage(page+1);
        
      })();
    }, []);

  
  return (
    <div>
      <InfiniteScroll
      dataLength={data ? data.length : 1} //This is important field to render the next data
      next={fetchData}
      hasMore={hasMore}
      loader={<h4>loading...</h4>}
      height={550}
      scrollThreshold={0.1}
      endMessage={
        <p style={{ textAlign: 'center' }}>
          <b>End {ending}</b>
        </p>
      }
    >
      <div>{console.log("DATA OVER HERE: ", data)}</div>
      <div className="updates-card-container">
      {data ? (data.map(item => (
                <div className="updates-flex-items">
                <UpdatesCard key={item.id}
                id = {item.id}
                post = {item.post}
                project = {item.project}
                date = {item.date}
                projectName={projectName}
                />
                </div>
          ))) : "Loading..."}
      </div>
    </InfiniteScroll>
    </div>
  );
}

export default UpdatesWindow;