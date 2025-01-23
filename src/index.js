import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Componenets/Header';
import Recommendation from './Componenets/Recommendation';
import App from './App';
import Filters from './Componenets/Filters';
import Product_list from './Componenets/Product _list';
import Footer from './Componenets/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Helmet } from 'react-helmet';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <Helmet>
      {/* Generic Schema for the Website we can change it accordingly the website information */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Your Store Name",
            "url": "https://yourdomain.com",
            "description": "Browse our collection of amazing products.",
            "publisher": {
              "@type": "Organization",
              "name": "Your Store Name",
              "logo": "https://yourdomain.com/path-to-logo.jpg"
            },
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://yourdomain.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          }
        `}
      </script>

      {/* Open Graph Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Your Store Name" />
      <meta property="og:description" content="Browse our collection of amazing products." />
      <meta property="og:url" content="https://yourdomain.com" />
      <meta property="og:image" content="https://yourdomain.com/path-to-image.jpg" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Your Store Name" />
      <meta name="twitter:description" content="Browse our collection of amazing products." />
      <meta name="twitter:image" content="https://yourdomain.com/path-to-image.jpg" />
    </Helmet>

    {/* Main layout of your app */}
    <Header />
    <Filters />
    <Product_list />
    <Recommendation />
    <Footer />
    <App />
  </>
);
