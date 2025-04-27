import React from 'react';
import '../App.css';

function Blog() {
  return (
    <section className="py-16 px-6 bg-white text-center">
      <h2 className="text-3xl font-semibold text-green-800 mb-6">Blog</h2>

      {/* San Jose Corporate Tour Blog Post */}
      <div className="max-w-3xl mx-auto text-left bg-gray-100 p-8 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold text-green-800 mb-2">
          MSBA Corporate Tour | San Jose
        </h3>
        <p className="text-md text-gray-600 mb-4 italic">4/22/2025</p>

        <p className="text-lg mb-4">
          As part of the MSBA program, I had the opportunity to participate in a corporate tour in San Jose, visiting the campuses of Netflix, Oracle, and Google.
          Throughout the day, we engaged in insightful discussions about the development of AI, the evolving role of analytics in business strategy, and career-related questions with industry professionals.
        </p>

        <p className="text-lg mb-4">
          It was inspiring, exciting, and terrifying to hear firsthand how these major companies are implementing data-driven decision-making and AI innovation across their operations.
        </p>

        <p className="text-lg mb-6">
          During the 4-hour bus ride there and back, I made the most of my time by using my free trial of Wondery to listen to the American Scandal podcast — which definitely helped the long ride fly by!
        </p>

        {/* Pictures */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
          <img
            src={`${process.env.PUBLIC_URL}/netflix.jpg`}
            alt="San Jose Tour 1"
            className="rounded-lg shadow-md object-cover w-full h-64"
          />
          <img
            src={`${process.env.PUBLIC_URL}/oracle.jpg`}
            alt="San Jose Tour 2"
            className="rounded-lg shadow-md object-cover w-full h-64"
          />
          <img
            src={`${process.env.PUBLIC_URL}/google.jpg`}
            alt="San Jose Tour 3"
            className="rounded-lg shadow-md object-cover w-full h-64"
          />
        </div>
      </div>
    </section>
  );
}

export default Blog;
