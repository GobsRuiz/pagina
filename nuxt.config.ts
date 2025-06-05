// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  app: {
    head: {
      title: 'Memórias em Página',
      meta: [
        { name: 'theme-color', content: '#f43f67' },
        { name: 'description', content: 'Crie uma página única e especial para celebrar sua história de amor. Compartilhe momentos, memórias e todo o carinho que existe entre vocês.' },
        { property: 'og:title', content: 'Memórias em Página' },
        { property: 'og:description', content: 'Crie uma página única e especial para celebrar sua história de amor. Compartilhe momentos, memórias e todo o carinho que existe entre vocês.' },
        // { property: 'og:image', content: '/caminho/da/imagem.jpg' },
      ],
      link: [
        { rel: 'icon', href: '/favicon.ico' },
      ]
    }
  },

  modules: [
    '@nuxt/ui', 
    '@pinia/nuxt', 
    '@nuxt/icon',
    '@nuxtjs/google-fonts', 
    'nuxt-gtag',
    // '@nuxtjs/seo',
  ],



  css: [
    '~/assets/css/main.css',
    '~/assets/css/reset.css',
  ],



  googleFonts: {
    families: {
      'Playfair Display': true,
      Poppins: [200, 300, 400, 500, 600, 700, 800, 900],
    },
    display: 'swap',
  },



  gtag: {
    id: 'G-XH84CH3B44'
  },



  // Nuxt SEO
  // Configuração global do site
})