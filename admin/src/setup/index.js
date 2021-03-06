import router from './router-setup'
import store from './store-setup'
import { i18n } from './i18n-setup'
import mixins from './mixins-setup'
// import db from './db-setup'
import { BootstrapVue, IconsPlugin } from './bootstrapVue-setup'

// db({
//   onResponseErr: ({ status, data }) => {
//     if (status === 401) {
//       console.log('401', data);
//       // Object.keys(data).forEach(name => {
//       //   store.dispatch('logout')
//       // })
//     }
//   }
// })

export {
  router,
  store,
  i18n,
  mixins,
  BootstrapVue,
  IconsPlugin
}
