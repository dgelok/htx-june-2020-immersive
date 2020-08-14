import React, { Component } from 'react'

class News extends Component {

    constructor() {
        
        super();

        this.state = {
            articles: [],
            searchResults: ""
        }
    }

    componentDidMount = async () =>{

        // console.log('Component Did Mount')
        let URL = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=0cf790498275413a9247f8b94b3843fd"
        
        let response = await fetch(URL);
        
        let results = await response.json();
        let resultsArr = results.articles

        console.log(this.state.articles)

        this.setState({
            articles: resultsArr
        }, () => {
          console.log(this.state.articles)
        }
        )
    }

    news() {
        let {articles, searchResults} = {...this.state}
        let articleList = articles.map((article, index) =>{

            return <li key={index}>
                <h4>{article.title}</h4>
                <img src={article.urlToImage} />
                <p>{article.description}</p>

            </li>
        })

        return articleList
    }

    handleChange = (e) => {


        this.setState({
            searchResults: e.target.value
        })

    }


    render() {

        // let num = [1,2,3,4,5,6,7]
        // let newArray = num.filter(obj =>{
        //     return (obj > 5)
        // })


        let {articles, searchResults} = {...this.state};

        let filteredList = articles.filter(article =>{
            return article.title.toLowerCase().includes(searchResults.toLowerCase())
        })

        let articleList = filteredList.map((article, index) =>{

            return <li key={index}>
                <h4>{article.title}</h4>
                <img src={article.urlToImage} />
                <p>{article.description}</p>

            </li>

        })
        console.log('rendered component')
        return (
        <>
            <h1>News Articles</h1>

            <input type="text" onChange={this.handleChange}/>
            {articleList}
        </>
        )
    }
}

export default News
