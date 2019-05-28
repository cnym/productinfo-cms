import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import {
  Button,
  Select,
  Menu,
  MenuItem,
  Submenu,
  Breadcrumb,
  BreadcrumbItem,
  Upload,
  Form,
  FormItem,
  Input,
  Option,
  DatePicker,
  Table,
  TableColumn,
  Pagination,
  Row,
  Col,
  Loading,
  MessageBox,
  Message
} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/scss/base.scss'
const MongodbModel = require('./store/mongodb')
const FiledbModel = require('./store/filedb')

const db = new MongodbModel('cmsDB')
Vue.prototype.$db = db
db.init()

const filedb = new FiledbModel('fileDB')
Vue.prototype.$filedb = filedb
filedb.init()

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

Vue.use(Button)
Vue.use(Select)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Submenu)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Upload)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Option)
Vue.use(DatePicker)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Pagination)
Vue.use(Row)
Vue.use(Col)
Vue.use(Loading.directive)

Vue.prototype.$loading = Loading.service
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$message = Message

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  template: '<App/>'
}).$mount('#app')
