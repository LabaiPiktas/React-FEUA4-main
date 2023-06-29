import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const SpaNews = () => {
  const [news, setNews] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      const news = data.slice(0, 2);
      setNews(news);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <div className="layout">
        <h2> Spa Naujienos</h2>
        <div className="spa-news">
          {news.map((n) => (
            <div key={n.id} className="news-card">
              <h3>{n.title}</h3>
              <div>{n.body}</div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SpaNews;
