import React, { useEffect, useState } from 'react';
import './news.scss';

function NewsList() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch('/data/news.json')
      .then(res => res.json())
      .then(data => setNews(data))
      .catch(err => console.error("Erro ao carregar notícias:", err));
  }, []);

  return (
    <div className="news-list">
      {news.map((item) => (
        <div key={item.id} className="news-card">
          <img src={item.image} alt={item.title} />
          <h2>{item.title}</h2>
          <p>{item.content}</p>
          <small>{item.date}</small>
        </div>
      ))}
    </div>
  );
}

export default NewsList;
