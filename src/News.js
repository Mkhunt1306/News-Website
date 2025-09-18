import React, { Component } from 'react';
import Newsitem from "./Newsitem";
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

  
export class News extends Component {
  static defaultProps ={
      country : 'us',
      pageSize: 24,
      category: 'general',
      // apiKey :'3cb5df1df7c8478cb3cc3834df2e1c82'
      
  }

    static propTypes = {
      country : PropTypes.string,
      pageSize: PropTypes.number,
      category: PropTypes.string,
    }
  constructor(props){
    super(props);
    console.log("Working");
    this.state={
      articles: [], 
      loading :false,
      page : 1,
      totalResults :0
    }
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - ઝટપટ સમાચાર`;
  }
  async updatenews() {
      this.props.updateProgress(10);
    const url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;



     this.setState({loading:true});
    let data = await fetch(url);
    this.props.updateProgress(40);
    let parseData = await data.json();
    this.props.updateProgress(70);
    this.setState({articles: parseData.articles, 
      totalResults:parseData.totalResults,
      loading :false
    })
    this.props.updateProgress(100);
  }
  async componentDidMount(){
    this.updatenews();
  }

   handlepreclick = async()=>{  
    this.setState({page: this.state.page -1});
    this.updatenews();
  }
 
  handlenextclick = async ()=>{
    this.setState({page: this.state.page +1});
    this.updatenews();
  }
   capitalizeFirstLetter(val) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

     fetchMoreData = async () => {
    this.setState({page: this.state.page +1});
    const url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parseData.articles), 
      totalResults:parseData.totalResults
    })
  };
  

  render() {
    return (
        <>
      
            <h2 className='fw-bold text-center mb-4' style={{marginTop: "90px"}}>ઝટપટ સમાચાર - Top Headlines</h2>
            {this.state.loading && <Spinner/>}
            <InfiniteScroll
                dataLength={this.state.articles ? this.state.articles.length : 0}
                next={this.fetchMoreData}
                hasMore={this.state.articles && this.state.articles.length !== this.state.totalResults}
                loader={<h4>{<Spinner/>}</h4>}>

              <div className="container my-2">
                <div className="row  justify-content-center"> 
                      {this.state.articles && this.state.articles.map((element)  =>{
                      return <div className="col-12 col-sm-6 col-md-4" key={element.url}>
                        <Newsitem title={element.title? element.title.slice(0 , 130):""} description={element.description?element.description.slice(0 , 88):""} imageurl= {element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                      </div>
                      })}
                </div>
              </div>  
            </InfiniteScroll>
      

      </>
    )
  }
}

export default News
