<script>
  let formData = {
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    message: ''
  };

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch('https://formspree.io/your-formspree-id', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        alert('Message sent successfully!');
        formData = { name: '', email: '', phone: '', company: '', projectType: '', message: '' };
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error sending message. Please try again.');
    }
  }
</script>

<section id="contact" class="py-16">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold text-center mb-8">Let's discuss how we can help bring your vision to life.</h2>
    
    <form on:submit={handleSubmit} class="max-w-2xl mx-auto space-y-6">
      <div>
        <input 
          type="text" 
          bind:value={formData.name}
          placeholder="Your Name"
          class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      
      <div>
        <input 
          type="email" 
          bind:value={formData.email}
          placeholder="Your Email"
          class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      
      <div>
        <input 
          type="tel" 
          bind:value={formData.phone}
          placeholder="Your Phone Number"
          class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      
      <div>
        <input 
          type="text" 
          bind:value={formData.company}
          placeholder="Your Company"
          class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      
      <div>
        <select 
          bind:value={formData.projectType}
          class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="">Project Type</option>
          <option value="web">Web Development</option>
          <option value="ecommerce">E-commerce</option>
          <option value="mobile">Mobile App</option>
          <option value="seo">SEO</option>
        </select>
      </div>
      
      <div>
        <textarea 
          bind:value={formData.message}
          placeholder="Tell us about your project"
          class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
          required
        ></textarea>
      </div>
      
      <button 
        type="submit"
        class="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Send Message
      </button>
    </form>
  </div>
</section>