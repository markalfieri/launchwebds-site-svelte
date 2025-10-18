import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

export default {
  preprocess: vitePreprocess(),
  kit: {
    // ...other config
  }
};

<script>
  import Hero from '$lib/components/Hero.svelte';
  import Services from '$lib/components/Services.svelte';
  import About from '$lib/components/About.svelte';
  import Portfolio from '$lib/components/Portfolio.svelte';
  import Contact from '$lib/components/Contact.svelte';
</script>

<Hero />
<Services />
<About />
<Portfolio />
<Contact />

<h1 class="text-3xl font-bold text-center mt-10">LaunchWeb DS is live</h1>