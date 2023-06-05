import React, { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";


export default function News(props){

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, settotalResults] = useState(0);
  
  // Bookmark
  const [count,setCount] = useState(1);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };


  const capitalizeFirstLetter = (string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const pageUpdate = async()=>{
    props.setProgress(0);
    const url = `https://newsapi.org/v2/top-headlines?&category=${props.category}&country=${props.country}&apiKey=70d43845db1d4e84ba17f770ad200985&page=${page}&pageSize=${props.pageSize}`
    setLoading(true)
    let data = await fetch(url)
    props.setProgress(30);
    let parsedData = await data.json()
    props.setProgress(70);
    // console.log(parsedData)

    setArticles(parsedData.articles)
    settotalResults(parsedData.totalResults)
    setLoading(false)

    props.setProgress(100);
  }

  useEffect(()=>{
    document.title = `ArticUpdate - ${capitalizeFirstLetter(props.category)}`;
    pageUpdate();
  }, [])

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?&category=${props.category}&country=${props.country}&apiKey=70d43845db1d4e84ba17f770ad200985&page=${page+1}&pageSize=${props.pageSize}`
    setPage(page+1)
    let data = await fetch(url)
    let parsedData = await data.json()
    console.log(parsedData)
    setArticles(articles.concat(parsedData.articles))
    settotalResults(parsedData.totalResults)
  };

    // console.log("rendered")
    return (
      <>
        <h2 className="text-center" style={{marginTop: '80px', color:'white'}}>Artic Update : Top {capitalizeFirstLetter(props.category)} headlines</h2>
        {loading && <Spinner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >
          <div className="container">
          <div className="row">
            {articles.map((element) => {
              return <div className="item col-md-4 my-3" key={element.url}>
                <NewsCard
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={element.description ? element.description.slice(0, 200) : "Overview not available! Sorry for the inconvenience. Please click on the cover image to read the detailed article"}
                  imageURL={element.urlToImage}
                  url={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                  count = {count}
                  incrementCount = {incrementCount}
                  decrementCount = {decrementCount}
                />
              </div>
            })}
          </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }

News.defaultProps = {
  pageSize: 8,
  country: 'in',
  category: 'general'
}

News.propTypes = {
  pageSize: PropTypes.number,
  country: PropTypes.string,
  category: PropTypes.string
}

