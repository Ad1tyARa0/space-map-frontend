// import { createApp } from 'vue'
import { createApp, provide, h } from 'vue'
import App from './App.vue'
import router from './router'
import '../src/sass'

import { DefaultApolloClient } from '@vue/apollo-composable'
import { apolloClient } from './apollo-client'
import CustomScrollbar from 'custom-vue-scrollbar'
import 'custom-vue-scrollbar/dist/style.css'

declare module 'vue' {
  export interface GlobalComponents {
    CustomScrollbar: typeof CustomScrollbar
  }
}

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient)
  },

  render: () => h(App)
})

app.component(CustomScrollbar.name, CustomScrollbar)

app.use(router)

app.mount('#app')
