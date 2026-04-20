const imageUrl = process.env.NUXT_PUBLIC_IMAGE_URL || "";

export default {
  generate: {
    fallback: false
  },
  ssr: false,
  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      lang: "en"
    },
    title: "Homepage of John Law | Mathematics, Software, Languages",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Personal homepage of John Law. It is impossible to separate a cube into two cubes, or a fourth power into two fourth powers, or in general, any power higher than the second into two like powers. I have discovered a truly marvellous proof of this, which this margin is too narrow to contain."
      },
      // Open Graph
      { hid: "og:type", property: "og:type", content: "website" },
      { hid: "og:title", property: "og:title", content: "Homepage of John Law | Mathematics, Software, Languages" },
      { hid: "og:description", property: "og:description", content: "Personal homepage of John Law. It is impossible to separate a cube into two cubes, or a fourth power into two fourth powers, or in general, any power higher than the second into two like powers. I have discovered a truly marvellous proof of this, which this margin is too narrow to contain." },
      { hid: "og:url", property: "og:url", content: "https://poyea.me/" },
      { hid: "og:image", property: "og:image", content: imageUrl },
      { hid: "og:image:alt", property: "og:image:alt", content: "John Law" },
      { hid: "og:site_name", property: "og:site_name", content: "John Law" },
      { hid: "og:locale", property: "og:locale", content: "en_US" },
      // Twitter Card
      { hid: "twitter:card", name: "twitter:card", content: "summary" },
      { hid: "twitter:title", name: "twitter:title", content: "Homepage of John Law | Mathematics, Software, Languages" },
      { hid: "twitter:description", name: "twitter:description", content: "Personal homepage of John Law. It is impossible to separate a cube into two cubes, or a fourth power into two fourth powers, or in general, any power higher than the second into two like powers. I have discovered a truly marvellous proof of this, which this margin is too narrow to contain." },
      { hid: "twitter:image", name: "twitter:image", content: imageUrl },
      // Additional SEO
      { name: "author", content: "John Law" },
      { name: "robots", content: "index, follow" },
      { name: "theme-color", content: "#ffffff" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "canonical", href: "https://poyea.me/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: true },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&family=Lora:ital@1&display=swap" }
    ],
    script: [
      {
        type: "application/ld+json",
        json: {
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "John Law",
          "url": "https://poyea.me/",
          "image": imageUrl,
          "jobTitle": "Software Engineer",
          "description": "John Law",
          "sameAs": [
            "https://www.linkedin.com/in/poyea/",
            "https://github.com/poyea/",
            "https://gitlab.com/poyea/",
            "https://keybase.io/poyea/",
            "https://math.stackexchange.com/users/498637/poyea"
          ]
        }
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
