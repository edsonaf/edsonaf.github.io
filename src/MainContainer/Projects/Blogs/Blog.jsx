import React from "react";
import "./Blog.scss";

export default function Blog() {
  const articles = [
    {
      title: "How I Built My Portfolio",
      date: "2025-07-01",
      summary: "A walkthrough of the tools and techniques I used to build this site.",
      link: "#"
    },
    {
      title: "React Tips for Beginners",
      date: "2025-06-15",
      summary: "Some practical advice for those starting out with React.",
      link: "#"
    }
  ];

  return (
    <div className="blog-container">
      <h2>Blog</h2>
      <div className="articles">
        {articles.map((article, idx) => (
          <div className="article" key={idx}>
            <h3>{article.title}</h3>
            <p className="date">{article.date}</p>
            <p>{article.summary}</p>
            <a href={article.link} target="_blank" rel="noopener noreferrer">Read more</a>
          </div>
        ))}
      </div>
    </div>
  );
}
