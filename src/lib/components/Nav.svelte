<script>
  let isMenuOpen = false;
  
  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }
</script>

<nav class="bg-white shadow-lg fixed w-full z-50">
  <div class="container mx-auto px-4">
    <div class="flex justify-between items-center h-16">
      <a href="/" class="text-xl font-bold text-blue-600">LaunchWebDS</a>
      
      <!-- Mobile menu button -->
      <button 
        class="md:hidden"
        on:click={toggleMenu}
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {#if isMenuOpen}
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          {:else}
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          {/if}
        </svg>
      </button>
      
      <!-- Desktop menu -->
      <div class="hidden md:flex space-x-8">
        <a href="#about" class="text-gray-600 hover:text-blue-600 transition-colors">About</a>
        <a href="#services" class="text-gray-600 hover:text-blue-600 transition-colors">Services</a>
        <a href="#portfolio" class="text-gray-600 hover:text-blue-600 transition-colors">Portfolio</a>
        <a href="#contact" class="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
        <!-- Add your social links here -->
      </div>
    </div>
    
    <!-- Mobile menu -->
    {#if isMenuOpen}
      <div class="md:hidden py-4">
        <a href="#about" class="block py-2 text-gray-600 hover:text-blue-600 transition-colors">About</a>
        <a href="#services" class="block py-2 text-gray-600 hover:text-blue-600 transition-colors">Services</a>
        <a href="#portfolio" class="block py-2 text-gray-600 hover:text-blue-600 transition-colors">Portfolio</a>
        <a href="#contact" class="block py-2 text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
        <!-- Add your social links here -->
      </div>
    {/if}
  </div>
</nav>