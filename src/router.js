import VueRouter from 'vue-router'

// 导入对应的路由组件
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import NewsListContainer from './components/news/NewsList.vue'
import NewsInfoContainer from './components/news/NewsInfo.vue'
import photolistContainer from './components/photo/photolist.vue'
import photoInfoContainer from './components/photo/photoinfo.vue'
import goodsList from './components/goods/goodsList.vue'
import goodsInfo from './components/goods/goodsInfo.vue'
import goodsDesc from './components/goods/goodsDesc.vue'
import goodsComment from './components/goods/goodsComment.vue'

// 3. 创建路由对象
var router = new VueRouter({
  routes: [ // 配置路由规则
    { path: '/', redirect: '/home' },
    { path: '/home', component: HomeContainer },
    { path: '/member', component: MemberContainer },
    { path: '/shopcar', component: ShopcarContainer },
    { path: '/search', component: SearchContainer },
    { path: '/home/newslist', component: NewsListContainer },
    { path: '/home/newsinfo/:id', component: NewsInfoContainer },
    { path: '/home/photolist', component: photolistContainer },
    { path: '/home/photoinfo/:id', component: photoInfoContainer },
    { path: '/home/goodslist', component: goodsList },
    { path: '/home/goodsInfo/:id', component: goodsInfo, name: 'goodsinfo' },
    { path: '/home/goodsDesc/:id', component: goodsDesc, name: 'goodsDesc' },
    { path: '/home/goodsComment/:id', component: goodsComment, name: 'goodsComment' }

  ],
  linkActiveClass: 'mui-active' // 覆盖默认的路由高亮的类，默认的类叫做 router-link-active
})

// 把路由对象暴露出去
export default router