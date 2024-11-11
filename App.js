import { useState } from 'react'; // Import useState
import './App.css';
import Navbar from './components/NavBar';
import TheForm from './components/TheForm';
import cookies from './components/images/cookies.mp4';
import nutty from './components/images/nutty.avif';
import Marquee from "react-fast-marquee";
import nutty1 from './components/images/nutty1.webp'

function App() {


  const [currentIndex, setCurrentIndex] = useState(0); // Initialize useState

  const products = [
    { id: 1, name: "Chocolate Chip Walnuts", price: "from $2.99", image: nutty, label: "Nutty Cookie" },
    { id: 2, name: "Oatmeal Raisin", price: "from $2.79", image: nutty, label: "Oatmeal Cookie" },
    { id: 3, name: "Double Chocolate", price: "from $3.50", image: nutty, label: "Chocolate Cookie" },
    { id: 1, name: "Chocolate Chip Walnuts", price: "from $2.99", image: nutty, label: "Nutty Cookie" },
    { id: 3, name: "Double Chocolate", price: "from $3.50", image: nutty, label: "Chocolate Cookie" },
    { id: 1, name: "Chocolate Chip Walnuts", price: "from $2.99", image: nutty, label: "Nutty Cookie" },
    
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };

  

  return (
    <div className="App">
      <Navbar />

      <div className="video-container">
        <video
          autoPlay
          playsInline
          muted
          loop
          className="video"
          height="2160"
          width="3840"
          poster="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
          src={cookies}
          style={{ aspectRatio: "16 / 9" }}
        ></video>

        {/* Overlay Text and Button */}
        <div className="video-overlay">
          <h1 className="overlay-heading">Cozy up with our <br />new cookie collection</h1>
          <a href="/shop" className="overlay-button">Shop now</a>
        </div>
      </div>

      <div className="freshly-baked-container">
        <h3 className="freshly-baked-heading">Freshly Baked</h3>
        <div className="navigation-arrows">
          <button className="arrow-button" onClick={prevSlide} disabled={currentIndex === 0}>
            <img src="/icons/arrow-left-accent.svg" alt="Previous" className="arrow-icon" />
          </button>
          <button className="arrow-button" onClick={nextSlide} disabled={currentIndex === products.length - 1}>
            <img src="/icons/arrow-right-accent.svg" alt="Next" className="arrow-icon" />
          </button>
        </div>
      </div>

      <div className="carousel-container">
        {products.map((product, index) => (
          <div
            className={`product-card ${index === currentIndex ? "active" : "inactive"}`}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            key={product.id}
          >
            <div className="product-card-image-container">
              <img
                alt={product.name}
                width="450"
                height="450"
                decoding="async"
                className="product-card-image"
                srcSet={product.image}
                src={product.image}
              />
              <div className="product-card-label">{product.label}</div>
            </div>
            <div className="product-card-info">
              <div className="product-card-title">{product.name}</div>
              <div className="product-card-price">{product.price}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="where-to-buy-container">
      <a className="where-to-buy-button" href="/products">Where to Buy</a>
      </div>

      <section className="centered-text-section">
        <div className="centered-text-box">
          <div className="centered-text-content">
            Munchies is a premium chocolate company specializing in crafting high-quality chocolate chips for baking enthusiasts and professionals alike.
          </div>
        </div>
      </section>

      

      <div className="marquee-wrapper">
  <Marquee autoFill="true" pauseOnHover="true" speed="100" className="marquee-container">
    <span className="marquee-text">100% Vegan</span>
    <span className="marquee-text">Healthy Ingredients</span>
    <span className="marquee-text">MUNCHIES</span>
  </Marquee>
</div>

<div className="shop-heading-container">
  <h3 className="shop-heading">Shop our cookies</h3>
</div>

<div class="container">
    <div class="scrollable-container">

        <div class="item">
            <a class="item-link" href="/products?collection=pcol_01J99YBSZS0TYAZ1BN7TJ62Q3F">
                <img class="item-image" src={nutty1} alt="Signature cookies"/>
                <div class="text-overlay">
                    <div class="text-wrapper">
                        <svg class="text-background" fill="none" viewBox="0 0 305 80">
                            <path class="path" d="M303.454 39.8975C303.454 44.995 299.503 50.0477 291.856 54.7901C284.25 59.5072 273.193 63.7827 259.464 67.3839C232.017 74.5834 194.059 79.045 152.102 79.045C110.145 79.045 72.1868 74.5834 44.74 67.3839C31.011 63.7827 19.9546 59.5072 12.3482 54.7901C4.70131 50.0477 0.75 44.995 0.75 39.8975C0.75 34.8001 4.70131 29.7473 12.3482 25.005C19.9546 20.2878 31.011 16.0124 44.74 12.4112C72.1868 5.21167 110.145 0.75 152.102 0.75C194.059 0.75 232.017 5.21167 259.464 12.4112C273.193 16.0124 284.25 20.2878 291.856 25.005C299.503 29.7473 303.454 34.8001 303.454 39.8975Z"></path>
                        </svg>
                        <div class="text">Signature cookies</div>
                    </div>
                </div>
            </a>

            <a class="item-link" href="/products?collection=pcol_01J99YBSZS0TYAZ1BN7TJ62Q3F">
                <img class="item-image" src={nutty1} alt="Signature cookies"/>
                <div class="text-overlay">
                    <div class="text-wrapper">
                        <svg class="text-background" fill="none" viewBox="0 0 305 80">
                            <path class="path" d="M303.454 39.8975C303.454 44.995 299.503 50.0477 291.856 54.7901C284.25 59.5072 273.193 63.7827 259.464 67.3839C232.017 74.5834 194.059 79.045 152.102 79.045C110.145 79.045 72.1868 74.5834 44.74 67.3839C31.011 63.7827 19.9546 59.5072 12.3482 54.7901C4.70131 50.0477 0.75 44.995 0.75 39.8975C0.75 34.8001 4.70131 29.7473 12.3482 25.005C19.9546 20.2878 31.011 16.0124 44.74 12.4112C72.1868 5.21167 110.145 0.75 152.102 0.75C194.059 0.75 232.017 5.21167 259.464 12.4112C273.193 16.0124 284.25 20.2878 291.856 25.005C299.503 29.7473 303.454 34.8001 303.454 39.8975Z"></path>
                        </svg>
                        <div class="text">Signature cookies</div>
                    </div>
                </div>
            </a>

            <a class="item-link" href="/products?collection=pcol_01J99YBSZS0TYAZ1BN7TJ62Q3F">
                <img class="item-image" src={nutty1} alt="Signature cookies"/>
                <div class="text-overlay">
                    <div class="text-wrapper">
                        <svg class="text-background" fill="none" viewBox="0 0 305 80">
                            <path class="path" d="M303.454 39.8975C303.454 44.995 299.503 50.0477 291.856 54.7901C284.25 59.5072 273.193 63.7827 259.464 67.3839C232.017 74.5834 194.059 79.045 152.102 79.045C110.145 79.045 72.1868 74.5834 44.74 67.3839C31.011 63.7827 19.9546 59.5072 12.3482 54.7901C4.70131 50.0477 0.75 44.995 0.75 39.8975C0.75 34.8001 4.70131 29.7473 12.3482 25.005C19.9546 20.2878 31.011 16.0124 44.74 12.4112C72.1868 5.21167 110.145 0.75 152.102 0.75C194.059 0.75 232.017 5.21167 259.464 12.4112C273.193 16.0124 284.25 20.2878 291.856 25.005C299.503 29.7473 303.454 34.8001 303.454 39.8975Z"></path>
                        </svg>
                        <div class="text">Signature cookies</div>
                    </div>
                </div>
            </a>
        </div>



    </div>
</div>

<section data-section="section.mediaText" id="body__7addfb4ffff1" className="how-to-section mx-auto flex w-full max-w-screen-lg flex-col items-stretch justify-center gap-2 px-4 py-8 lg:px-8 lg:py-16 lg:flex-row">
  <section className="how-to-centered-text-section">
        <div className="how-to-centered-text-box">
          <div className="how-to-text">HOW-TO</div>
          <div className="how-to-container">
          Every batch is crafted with the finest ingredients, mixed to perfection, and baked with love to create a treat that's not just delicious, but memorable.
          </div>
        </div>
      </section>
  <div className="image-container aspect-square rounded-lg lg:w-1/2">
    <img
      alt="how-to-process"
      decoding="async"
      loading="lazy"
      className="aspect-square object-cover rounded-lg w-full h-full"
      src={nutty1} // replace with the path to your image
    />
  </div>
</section>

<h1>Subscribe to get 10% off.</h1>

<input type="email" placeholder="Email address"/>
<button>Subscribe</button>

<p>By signing up to receive emails from Munchies, you agree to our <a href="#">privacy policy</a>. We treat your info responsibly.</p>



     
    </div>


  );
}

export default App;
