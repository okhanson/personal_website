import React from 'react';

function Projects() {
  return (
    <section className="py-16 px-6 bg-white text-center">
      <h2 className="text-3xl font-semibold text-green-800 mb-6">Projects</h2>

      {/* CLARITAS AI PROJECT */}
      <div className="max-w-3xl mx-auto text-left bg-gray-100 p-8 rounded-lg shadow-md mb-10">
        <h3 className="text-2xl font-bold text-green-800 mb-2">
          AI Industry Project | Claritas
        </h3>
        <p className="text-md text-gray-600 mb-4 italic">
          March 2025 – June 2025
        </p>
        <p className="text-lg mb-4">
          As part of my Master’s program, I am currently working with Claritas on an applied AI industry project focused on enhancing marketing intelligence through Retrieval-Augmented Generation (RAG) pipelines.
          This involves identifying high-value data sources, embedding text data using Amazon Bedrock (Titan, Cohere) and SpaCy models, and comparing similarity scores via cosine similarity.
          
        </p>

        <p className="text-md text-gray-700 mb-6">
          Tools Used: Python, Amazon Bedrock, Cohere API, SpaCy, cosine similarity, vector stores, RAG pipelines.
        </p>

        {/* Example file links */}
        <div className="flex justify-center space-x-6">
          <a
            href="/Claritas_AI_Project_Slides.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-500 hover:underline"
          >
            
          </a>
          <a
            href="/Claritas_RAG_Model_Summary.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-500 hover:underline"
          >
            
          </a>
        </div>
      </div>
      {/* F5 Project Section */}
      <div className="max-w-3xl mx-auto text-left bg-gray-100 p-8 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold text-green-800 mb-2">
          F5 Customer Churn Prediction & Segmentation
        </h3>
        <p className="text-md text-gray-600 mb-4 italic">
          January 2025 – March 2025
        </p>
        <p className="text-lg mb-4">
          As a Student Analytics Consultant at F5, I led a project using a Cox time-varying survival model to predict customer churn up to one year in advance, achieving a 72% F1 score.
          The model remained statistically significant across longer time horizons (3-year and 5-year forecasts), with performance measured using log-likelihood ratio (LLR), recall, and F1 metrics.
          I further identified distinct churn profiles through clustering of high-risk customers and developed actionable insights via executive-ready visualizations.
        </p>

        <p className="text-md text-gray-700 mb-6">
          Tools Used: Python (pandas, scikit-learn, lifelines, matplotlib), clustering techniques, Cox Proportional Hazards model.
        </p>

        {/* Example file links */}
        <div className="flex justify-center space-x-6">
          <a
            href="/F5 Final Pres.pptx"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-500 hover:underline"
          >
            📄 View Project Slides
          </a>
          <a
            href="/F5_Churn_Model_Results.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-500 hover:underline"
          >
       
          </a>
        </div>
      </div>

    
      {/* WINE SUBSCRIPTION MYSQL PROJECT */}
      <div className="max-w-3xl mx-auto text-left bg-gray-100 p-8 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold text-green-800 mb-2">
          Wine Subscription Service | MySQL Database Design
        </h3>
        <p className="text-md text-gray-600 mb-4 italic">
          December 2024
        </p>
        <p className="text-lg mb-4">
          Designed and implemented a relational MySQL database for a fictional wine subscription service.
          Developed schema architecture from scratch, created optimized table relationships, and wrote complex SQL queries for customer segmentation, order tracking, and sales insights.
          Included data validation, indexing, and ER diagrams to ensure relational integrity and performance.
        </p>
        <p className="text-md text-gray-700 mb-6">
          Tools Used: MySQL, SQL schema design, ER diagrams, data validation, querying techniques.
        </p>
        <div className="flex justify-center space-x-6">
          <a
            href="/mysqler.png"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-500 hover:underline"
          >
            🗂️ View ER Diagram
          </a>
          <a
            href="/Wine_Subscription_Query_Examples.p"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-500 hover:underline"
          >
            
          </a>
        </div>
      </div>

      {/* NYC SUBWAY DELAY PREDICTION PROJECT */}
      <div className="max-w-3xl mx-auto text-left bg-gray-100 p-8 rounded-lg shadow-md mt-10">
        <h3 className="text-2xl font-bold text-green-800 mb-2">
          NYC Subway Delay Prediction
        </h3>
        <p className="text-md text-gray-600 mb-4 italic">
          August 2024 – September 2024
        </p>
        <p className="text-lg mb-4">
          Built a machine learning pipeline to predict NYC subway delays and on-time performance using publicly available MTA datasets.
          Scraped, cleaned, and joined multiple data sources including real-time train performance data, weather conditions, and schedule information.
          Compared a variety of scikit-learn model specifications — including Random Forest, Logistic Regression, and Support Vector Machines — to identify the best-performing model for delay classification.
          Evaluated model accuracy, precision, recall, and ROC-AUC scores to ensure robust predictive performance.
        </p>
        <p className="text-md text-gray-700 mb-6">
          Tools Used: Python (pandas, scikit-learn, BeautifulSoup, requests), classification models, hyperparameter tuning, data scraping and joining.
        </p>
        <div className="flex justify-center space-x-6">
          <a
            href="/NYC Subway Delay Predictions.pptx"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-500 hover:underline"
          >
            📄 View Project Slides
          </a>
          <a
            href="/NYC_Subway_Model_Performance.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-500 hover:underline"
          >
            
          </a>
        </div>
      </div>
      {/* Placeholder for future projects */}
      <div className="mt-12">
        <p className="max-w-2xl mx-auto text-lg leading-relaxed text-gray-600">
         
        </p>
      </div>
    </section>
  );
}

export default Projects;
