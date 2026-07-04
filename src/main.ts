import { createApp } from 'vue'
import App from './App.vue'
import { apiPlugin, StoryblokVue } from '@storyblok/vue';
import Feature from './components/Feature.vue';
import Page from './components/Page.vue';
import HeroSection from './components/HeroSection.vue';
import Teaser from './components/Teaser.vue';


const app = createApp(App);

app.use(StoryblokVue, {
    accessToken: import.meta.env.VITE_STORYBLOK_DELIVERY_API_TOKEN,
    apiOptions: {
        region: 'eu'
    },
    use: [apiPlugin]
})
app.component("page", Page);
app.component('hero-section', HeroSection)
app.component('Grid', Feature)
app.component('teaser', Teaser)
app.mount('#app')
