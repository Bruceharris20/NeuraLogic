import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="container">
    <header class="header">
      <nav class="nav">
        <div class="logo">
          <h1>NeuraLogic</h1>
        </div>
        <div class="navigation">
          <a href="#solutions">Solutions</a>
          <a href="#industries">Industries</a>
          <a href="#use-cases">Use Cases</a>
          <a href="#pricing">Pricing</a>
          <a href="#resources">Resources</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#search" class="search-icon">🔍</a>
        </div>
        <button class="mobile-menu">☰</button>
      </nav>
    </header>

    <main class="main">
      <section class="hero">
        <div class="hero-content">
          <h2 class="hero-title">Advanced AI Solutions for Your Business</h2>
          <p class="hero-subtitle">Harness the power of artificial intelligence to transform your operations, enhance decision-making, and drive innovation.</p>
          <div class="hero-buttons">
            <button class="btn btn-primary">Get Started</button>
            <button class="btn btn-secondary">Learn More</button>
          </div>
        </div>
        <div class="hero-visual">
          <div class="ai-robot-container">
            <img src="/public/image (1).png" alt="AI Robot" class="ai-robot-image" />
          </div>
          <div class="ai-graphic">
            <div class="neural-node"></div>
            <div class="neural-node"></div>
            <div class="neural-node"></div>
            <div class="neural-connection"></div>
            <div class="neural-connection"></div>
          </div>
        </div>
      </section>

      <section class="services">
        <h3>Our AI Solutions</h3>
        <div class="services-grid">
          <div class="service-card">
            <div class="service-icon">🧠</div>
            <h4>Machine Learning</h4>
            <p>Custom ML models tailored to your specific business needs and data patterns.</p>
          </div>
          <div class="service-card">
            <div class="service-icon">💬</div>
            <h4>Natural Language Processing</h4>
            <p>Advanced text analysis, chatbots, and language understanding systems.</p>
          </div>
          <div class="service-card">
            <div class="service-icon">👁️</div>
            <h4>Computer Vision</h4>
            <p>Image recognition, object detection, and visual analysis solutions.</p>
          </div>
          <div class="service-card">
            <div class="service-icon">📊</div>
            <h4>Predictive Analytics</h4>
            <p>Data-driven insights and forecasting to optimize your business decisions.</p>
          </div>
        </div>
      </section>
    </main>

    <footer class="footer">
      <p>&copy; 2025 NeuraLogic. All rights reserved.</p>
    </footer>
  </div>
`