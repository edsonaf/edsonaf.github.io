import React, { useState } from "react";
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import "./Blog.scss";

const Blog = () => {
  const articles = [
    {
      title: "VS Code shortcuts",
      date: "2025-07-09",
      summary: "Some useful shortcuts to speed up your workflow in Visual Studio Code.",
      file: "article-2.md"
    },
    {
      title: "How I Built My Portfolio",
      date: "2025-07-01",
      summary: "A walkthrough of the tools and techniques I used to build this site.",
      file: "article-1.md"
    }
  ];

  const [showModal, setShowModal] = useState(false);
  const [markdown, setMarkdown] = useState("");
  const [modalTitle, setModalTitle] = useState("");

  const openModal = async (article) => {
    try {
      // fetch from public directory
      const response = await fetch(article.file);
      const text = await response.text();
      // check if the response is HTML (e.g., index.html fallback)
      if (text.trim().startsWith("<!DOCTYPE html")) {
        setMarkdown("Failed to load article. (Not found)");
      } else {
        setMarkdown(text);
      }
      setModalTitle(article.title);
      setShowModal(true);
    } catch (e) {
      setMarkdown("Failed to load article.");
      setModalTitle(article.title);
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setMarkdown("");
    setModalTitle("");
  };

  return (
    <div className="blog-container">
      <h2>Blog</h2>
      <div className="articles">
        {articles.map((article, idx) => (
          <div className="article" key={idx}>
            <h3>{article.title}</h3>
            <p className="date">{article.date}</p>
            <p>{article.summary}</p>
            <button onClick={() => openModal(article)}>Read more</button>
          </div>
        ))}
      </div>
      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>×</button>
            <h2>{modalTitle}</h2>
            <div className="markdown-body">
              <Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Blog;
