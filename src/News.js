import React, { Component } from 'react';
import Newsitem from "./Newsitem";
import Spinner from './Spinner';
import PropTypes from 'prop-types'


  
export class News extends Component {
  static defaultProps ={
      country : 'us',
      pageSize: 24,
      category: 'general'
      
  }

    static propTypes = {
      counrty : PropTypes.string,
      pageSize: PropTypes.number,
      category: PropTypes.string,
    }
  constructor(){
    super();
    console.log("Working");
    this.state={
      articles: [], 
      loading :false,
      page : 1
    }
  }
  async componentDidMount() {
    let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6c5fc8678ebc459a97ed10ab59fa9bd3&page=1&pageSize=${this.props.pageSize}`;
  
     this.setState({loading:true});
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({articles: parseData.articles, 
      totalResults:parseData.totalResults,
      loading :false
    })
  }

   handlepreclick = async()=>{
      let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6c5fc8678ebc459a97ed10ab59fa9bd3&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parseData.articles,
       loading :false
    })
  }
  

 
  handlenextclick = async ()=>{
     if(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)){

    }
    else{
       let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6c5fc8678ebc459a97ed10ab59fa9bd3&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
       this.setState({loading:true});
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      page: this.state.page + 1,
      articles: parseData.articles,
      loading :false
    })
    
  }
  }

  render() {
    return (
        <>
      <div className='container my-4 '>
            <h2 className='fw-bold text-center my-5 '>ઝટપટ સમાચાર - Top Headlines</h2>
            {this.state.loading && <Spinner/>}
            <div className="row  justify-content-center"> 
                  {!this.state.loading && this.state.articles.map((element) =>{
                  return <div className="col-12 col-sm-6 col-md-4" key={element.url}>
                    <Newsitem title={element.title? element.title.slice(0 , 130):""} description={element.description?element.description.slice(0 , 88):""} imageurl= {element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                  </div>
                  })}
            </div>
            <div className="container d-flex justify-content-between">
                <button disabled={this.state.page <=1} type='button' className='btn btn-danger'  onClick={this.handlepreclick}><i className="fa-solid fa-backward"></i> Pervious</button>
                <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type='button' className='btn btn-danger' onClick={this.handlenextclick}>Next <i className="fa-solid fa-forward"></i></button>
            </div>
      </div>

      </>
    )
  }
}

export default News
