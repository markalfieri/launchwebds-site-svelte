<script>
  import { onMount } from 'svelte';

  let aboutSection;

  onMount(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
        }
      });
    }, observerOptions);

    if (aboutSection) {
      observer.observe(aboutSection);
    }

    return () => {
      if (aboutSection) {
        observer.unobserve(aboutSection);
      }
    };
  });
</script>

<section id="about" class="about" bind:this={aboutSection}>
  <div class="about-content">
    <h2>Why Choose LaunchWeb DS?</h2>
    <p style="margin-bottom: 2rem;">
      We're a team of passionate developers and designers committed to delivering exceptional digital experiences. With years of experience and a focus on innovation, we help businesses thrive online.
    </p>
    
    <div class="stats">
      <div class="stat">
        <h3>150+</h3>
        <p>Projects Completed</p>
      </div>
      <div class="stat">
        <h3>7+</h3>
        <p>Years Experience</p>
      </div>
      <div class="stat">
        <h3>100%</h3>
        <p>Client Satisfaction</p>
      </div>
    </div>
    
    <p style="margin-top: 3rem; background: rgba(0,0,0,0.3); padding: 2rem; border-radius: 12px; border: 1px solid rgba(116,185,255,0.2);">
      We care about your business, and are here to help <em style="color: #74b9ff; font-weight: bold;">launch</em> it. We have launched several businesses with our website and SEO services, and yours can be next! We offer ongoing support for the site, as well as maintenance plans specialized to your business and individual needs.
    </p>
  </div>
</section>