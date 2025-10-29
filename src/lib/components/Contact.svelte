<script>
  let formData = {
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    message: ''
  };

  let isSubmitting = false;
  let submitStatus = '';

  async function handleSubmit(event) {
    event.preventDefault();
    isSubmitting = true;
    submitStatus = '';

    try {
      const response = await fetch('https://formspree.io/f/movnaabp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        submitStatus = 'success';
        // Reset form
        formData = {
          name: '',
          email: '',
          phone: '',
          company: '',
          projectType: '',
          message: ''
        };
      } else {
        submitStatus = 'error';
      }
    } catch (error) {
      submitStatus = 'error';
    } finally {
      isSubmitting = false;
    }
  }
</script>

<section id="contact" class="contact">
  <div class="container">
    <h2>Get Started Today</h2>
    <p>Let's discuss how we can help bring your vision to life.</p>
    
    <div class="contact-form">
      <form on:submit={handleSubmit}>
        <input 
          type="text" 
          name="name"
          bind:value={formData.name}
          placeholder="Your Name"
          required
        />
        
        <input 
          type="email" 
          name="email"
          bind:value={formData.email}
          placeholder="Your Email"
          required
        />
        
        <input 
          type="tel" 
          name="phone"
          bind:value={formData.phone}
          placeholder="Your Phone Number"
          required
        />
        
        <input 
          type="text" 
          name="company"
          bind:value={formData.company}
          placeholder="Your Company"
          required
        />
        
        <select 
          name="projectType"
          bind:value={formData.projectType}
          required
        >
          <option value="">Project Type</option>
          <option value="web">Web Development</option>
          <option value="ecommerce">E-commerce</option>
          <option value="mobile">Mobile App</option>
          <option value="seo">SEO</option>
          <option value="other">Other</option>
        </select>
        
        <textarea 
          name="message"
          bind:value={formData.message}
          placeholder="Tell us about your project"
          rows="5"
          required
        ></textarea>

        {#if submitStatus === 'success'}
          <p style="color: #00b894; text-align: center; margin-bottom: 1rem;">Thank you! Your message has been sent successfully.</p>
        {/if}
        
        {#if submitStatus === 'error'}
          <p style="color: #ff7675; text-align: center; margin-bottom: 1rem;">Oops! Something went wrong. Please try again.</p>
        {/if}
        
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  </div>
</section>