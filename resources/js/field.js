import IndexField from './components/IndexField'
import DetailField from './components/DetailField'
import FormField from './components/FormField'

Nova.booting((app, store) => {
  app.component('index-searchable-dropdown', IndexField)
  app.component('detail-searchable-dropdown', DetailField)
  app.component('form-searchable-dropdown', FormField)
})
