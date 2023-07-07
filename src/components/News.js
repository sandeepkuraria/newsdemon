import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
    {
      source: { id: "bbc-news", name: "BBC News" },
      author: "BBC News",
      title: "Russian jets 'harassing' US drones over Syria - US Air Force",
      description:
        "The US has released video reportedly showing its aircraft being forced to take evasive action during a mission.",
      url: "http://www.bbc.co.uk/news/world-us-canada-66119404",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/116AC/production/_130304317_p0fz7vg4.jpg",
      publishedAt: "2023-07-06T10:37:21.6250863Z",
      content:
        'The US Air Force has released video footage that it says shows Russian jets "harassing" US drones over the skies of Syria.\r\nAir Force Lieutenant General Alexus Grynkewich said that, at the time of th… [+89 chars]',
    },
    {
      source: { id: "bbc-news", name: "BBC News" },
      author: "BBC News",
      title:
        "Wagner boss Prigozhin is in Russia, Belarus ruler Lukashenko says",
      description:
        "Alexander Lukashenko says Prigozhin, who led a short-lived mutiny in Russia, is in St Petersburg.",
      url: "http://www.bbc.co.uk/news/world-europe-66118007",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/83B3/production/_115651733_breaking-large-promo-nc.png",
      publishedAt: "2023-07-06T08:22:18.2339677Z",
      content:
        "The head of the Wagner mercenary group Yevgeny Prigozhin - who led a short-lived armed rebellion in Russia last month - is in Russia, longtime Belarus leader Alexander Lukashenko says.\r\nPrigozhin's w… [+259 chars]",
    },
    {
      source: { id: "bbc-news", name: "BBC News" },
      author: "BBC News",
      title: "Coco Lee: The pioneering singer who charmed the world",
      description:
        "Coco Lee was one of the first Asian singers to gain prominence in the US pop music world.",
      url: "http://www.bbc.co.uk/news/world-asia-66117306",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/285A/production/_130303301_gettyimages-1060543514.jpg",
      publishedAt: "2023-07-06T07:52:21.7810911Z",
      content:
        "Millions of Asians tuned in on their television and mobile screens on what a Monday in March 2001 to watch Coco Lee sing A Love Before Time - the stirring theme from the acclaimed film Crouching Tige… [+4199 chars]",
    },
    {
      source: { id: "bbc-news", name: "BBC News" },
      author: "BBC News",
      title: "Can 'good cop' Janet Yellen help fix US-China relations?",
      description:
        "The US Treasury secretary's trip to Beijing comes as tensions between the two countries remain high.",
      url: "http://www.bbc.co.uk/news/business-66083740",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/43BB/production/_130293371_gettyimages-1244770277-1.jpg",
      publishedAt: "2023-07-06T07:37:20.0625426Z",
      content:
        "US Treasury Secretary Janet Yellen is due to arrive in China as part of high-stakes attempts to rebuild bridges between the world's two biggest economies.\r\nIt is the second visit to Beijing by a seni… [+5627 chars]",
    },
    {
      source: { id: "bbc-news", name: "BBC News" },
      author: "BBC News",
      title: "Ukraine war: Injuries reported in Russian rocket strike on Lviv",
      description:
        "Eight people are hurt after apartments were hit in the western Ukrainian city, the mayor says.",
      url: "http://www.bbc.co.uk/news/world-europe-66117111",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/83B3/production/_115651733_breaking-large-promo-nc.png",
      publishedAt: "2023-07-06T02:52:16.0467329Z",
      content:
        "A Russian rocket has hit an apartment building in the western Ukrainian city of Lviv, injuring at least eight people, the local mayor has said.\r\nAndriy Sadovyi said one person was in a serious condit… [+253 chars]",
    },
    {
      source: { id: "bbc-news", name: "BBC News" },
      author: "BBC News",
      title: "Oil giant Shell warns cutting production ‘dangerous’",
      description:
        "The world's need for fossil fuels is \"desperate\", Shell's chief executive told the BBC.",
      url: "http://www.bbc.co.uk/news/business-66108553",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/0528/production/_130302310_shell-index-getty.jpg",
      publishedAt: "2023-07-06T00:07:17.655491Z",
      content:
        'Cutting oil and gas production would be "dangerous and irresponsible", the boss of energy giant Shell has told the BBC.\r\nWael Sawan insisted that the world still "desperately needs oil and gas" as mo… [+5358 chars]',
    },
  ];
  constructor() {
    super();
    console.log("Hello I am a constructor from news component.");
    this.state = { articles: this.articles };
  }
  render() {
    return (
      <div className="container my-3">
        <h2>NewsDemon - Top Headlines</h2>
        <div className="row">
          <div className="col md 4">
            <NewsItem
              title="My title"
              description="This is the description"
              imageUrl="https://ichef.bbci.co.uk/news/1024/branded_news/116AC/production/_130304317_p0fz7vg4.jpg"
            />
          </div>
          <div className="col md 4">
            <NewsItem
              title="My title"
              description="This is the description"
              imageUrl=""
            />
          </div>
          <div className="col md 4">
            <NewsItem
              title="My title"
              description="This is the description"
              imageUrl=""
            />
          </div>
        </div>
      </div>
    );
  }
}

export default News;