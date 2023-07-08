import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  constructor() {
    super();

    this.state = { articles: [], loading: false };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=277ec0fd0f244d9e96eb195720830264";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles });
  }

  render() {
    const { articles } = this.state;

    return (
      <div className="container my-3">
        <h2>NewsDemon - Top Headlines</h2>

        <div className="row">
          {articles.map((element) => (
            <div className="col md 4" key={element.url}>
              <NewsItem
                title={element.title ? element.title.slice(0, 40) : ""}
                description={
                  element.description ? element.description.slice(0, 64) : ""
                }
                imageUrl={element.urlToImage}
                newsUrl={element.url}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
