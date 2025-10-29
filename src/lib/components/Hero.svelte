<script>
  import { onMount } from 'svelte';
  import logo from '$lib/images/LaunchWeb DS Logo Zoomed.png';

  let displayText = '';
  const fullText = "Launch Your Digital Presence";
  let i = 0;

  onMount(() => {
    const type = () => {
      if (i < fullText.length) {
        displayText += fullText[i];
        i++;
        setTimeout(type, 50);
      }
    };
    setTimeout(type, 500);
  });
</script>

<section id="hero" class="hero-section" style="margin-top: 80px;">
  <div class="hero-container">
    <div class="hero-content">
      <h1 class="hero-title">{displayText}<span class="cursor">|</span></h1>
      <p class="hero-desc">
        We create stunning, high-performance websites that drive results for your business. From concept to launch, we're your trusted web development partner.
      </p>

      <div class="hero-buttons">
        <a href="#contact" class="btn-primary">Start Your Project</a>
        <a href="#portfolio" class="btn-secondary">View Our Work</a>
      </div>
    </div>

    <div class="hero-image">
      <img src={logo} alt="LaunchWebDS" class="logo-img" />
    </div>
  </div>
</section>

<style>
.hero-section {
  background: linear-gradient(135deg, #74b9ff 0%, #0984e3 100%);
  color: white;
  min-height: auto;
  padding-top: 240px;
  padding-bottom: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.hero-section::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 1;
}
.hero-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 2;
}
.hero-content {
  text-align: left;
}
.hero-image {
  display: flex;
  justify-content: center;
  align-items: center;
}
.logo-img {
  max-width: 350px;
  height: auto;
  border-radius: 12px;
}
.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  min-height: 4rem;
}
.cursor {
  animation: blink 1s infinite;
}
@keyframes blink {
  0%, 49% { opacity: 1; }
  50%, 100% { opacity: 0; }
}
.hero-desc {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.95;
  line-height: 1.7;
}
.hero-buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}
.btn-primary {
  background: #00b894;
  color: white;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s;
  box-shadow: 0 4px 15px rgba(0, 184, 148, 0.3);
  display: inline-block;
}
.btn-primary:hover {
  background: #00a085;
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0, 184, 148, 0.4);
}
.btn-secondary {
  border: 2px solid white;
  color: white;
  background: transparent;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s;
  display: inline-block;
}
.btn-secondary:hover {
  background: white;
  color: #0984e3;
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(255, 255, 255, 0.2);
}
@media (max-width: 768px) {
  .hero-container {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
  }
  .hero-content {
    text-align: center;
  }
  .hero-title { 
    font-size: 2.5rem;
    min-height: 3rem;
  }
  .hero-section { 
    padding-top: 100px; 
  }
  .hero-buttons { 
    justify-content: center;
  }
  .logo-img {
    max-width: 200px;
  }
}
</style>