import React, { useEffect, useState } from 'react';
import './componentCSS/NewsTicker.css';

const NewsTicker = () => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=agriculture&apiKey=1ce0d43aae0f45ea8ad5c2d077a1bcfd`
        );
        const data = await response.json();
        if (data.status === 'ok') {
          setNews(data.articles.slice(0, 5)); // Limit to top 5 news articles
        } else {
          setError('Failed to fetch news');
        }
      } catch (err) {
        setError(err.message);
      }
    };

    fetchNews();

    // Optionally set up a timer to fetch news periodically
    const intervalId = setInterval(fetchNews, 60000); // Fetch news every 60 seconds
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    let scrollInterval;

    const startScrolling = () => {
      scrollInterval = setInterval(() => {
        const container = document.querySelector('.news-ticker');
        if (container) {
          if (container.scrollTop + container.clientHeight >= container.scrollHeight) {
            container.scrollTop = 0;
          } else {
            container.scrollTop += 1;
          }
        }
      }, 50); // Adjust speed of auto-scrolling
    };

    const stopScrolling = () => {
      clearInterval(scrollInterval);
    };

    const container = document.querySelector('.news-ticker');
    if (container) {
      container.addEventListener('mouseenter', stopScrolling);
      container.addEventListener('mouseleave', startScrolling);
    }

    startScrolling();

    return () => {
      clearInterval(scrollInterval);
      if (container) {
        container.removeEventListener('mouseenter', stopScrolling);
        container.removeEventListener('mouseleave', startScrolling);
      }
    };
  }, []);

  if (error) {
    return <div className="news-ticker">Error fetching news: {error}</div>;
  }

  return (
    <div className="news-ticker">
      <h2>Latest Agricultural News</h2>
      <div className="news-cards">
        {news.map((article, index) => (
          <div key={index} className="news-card">
            <img src={article.urlToImage} alt={article.title} />
            <div className="news-content">
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                <h3>{article.title}</h3>
              </a>
              <p>{article.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsTicker;
