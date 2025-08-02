import InfiniteScroll from "react-infinite-scroll-component";
import { useState, useEffect } from 'react'; 
import { render } from "react-dom";
import axios from 'axios';
import UpdatesCard from './UpdatesCard';

function UpdatesWindow() {
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [nextPage, setNextPage] = useState(null);


  const fetchData = async (page) => {
    try {
      // store the response in variable "response"
      const response = await axios(`http://127.0.0.1:8000/updates/?page=${page}`);
      // set state with the new response data
      setData(response.data.results);
      setNextPage(response.data.next);
      if(!response.data.next) {
        setHasMore(false);
      }
      setData(data.concat(response.data.results));
      console.log("Data response: ", response.data);
    } catch (error) {
      console.log(error)
    }
  };

  console.log("NEXT: ", nextPage);

  
    useEffect(() => {
      
      (async () => {
        await fetchData(page);
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
      endMessage={
        <p style={{ textAlign: 'center' }}>
          <b>Yay! You have seen it all</b>
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
                />
                </div>
          ))) : "Loading..."}
      </div>
    </InfiniteScroll>
    </div>
  );
}

export default UpdatesWindow;