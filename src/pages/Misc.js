import React, { useEffect, useState } from 'react';

function Misc() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('/news_data.json')
      .then((response) => response.json())
      .then((data) => setArticles(data))
      .catch((error) => console.error('Error loading news data:', error));
  }, []);

  return (
    <section className="py-16 px-6 bg-white text-center">
      <h2 className="text-3xl font-semibold text-green-800 mb-6">Market & Tech News</h2>
      <p className="mb-8 text-lg text-gray-700">Auto-updated daily from NewsAPI.org. Based on key-word search, displays news I'm likely to be interested in. Hopefully gives you some insight into how I keep track of what's going on in the world. Updates daily! Or whatever the max usage is for my free api...</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {articles.map((article, index) => (
          <a
            key={index}
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition duration-300"
          >
            <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden">
              {article.urlToImage && (
                <img
                  src={article.urlToImage}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-green-800">{article.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{article.source.name}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Misc;
