<template>
	<div class="app-container">

		<!-- 顶部 Header 区域 -->
		<mt-header fixed title="Vue 案例">
			  <mt-button @click="setBack" icon="back" slot="left"></mt-button>
		</mt-header>

		<!-- 中间的 路由 router-view 区域 -->
		<transition>
			<router-view></router-view>
		</transition>


		<!-- 底部 Tabbar 区域 -->
		<nav class="mui-bar mui-bar-tab">
			
			<router-link class="mui-tab-item-bll" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item-bll" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item-bll" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
					<span class="mui-badge" id="badge">{{ this.$store.getters.getAllCount }}</span>
				</span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item-bll" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>

	</div>
</template>

<script>
export default {
	data() {
		return {
			
		}
	},
	methods: {
		setBack(){
			this.$router.back(1)
		}
	},
}
</script>



<style lang="scss" scoped>
	.mui-tab-item-bll {
		display: table-cell;
		overflow: hidden;
		width: 1%;
		height: 50px;
		text-align: center;
		vertical-align: middle;
		white-space: nowrap;
		text-overflow: ellipsis;
		color: #929292;

		.mui-icon {
			top: 3px;
			width: 24px;
			height: 24px;
			padding-top: 0;
			padding-bottom: 0;
		}

		.mui-icon~.mui-tab-label {
			font-size: 11px;
			display: block;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		&.mui-active {
			color: #007aff;
		}
	}

	.mint-header.is-fixed {
		z-index: 5;
	}


	.app-container {
		padding-top: 40px;
		padding-bottom: 50px;
		overflow-x: hidden;

		.mint-button-text {
			margin-top: 2px;
		}
	}

	.v-enter {
		opacity: 0;
		transform: translateX(100%);
	}

	.v-leave-to {
		opacity: 0;
		transform: translateX(-100%);
		position: absolute;
	}

	.v-enter-active,
	.v-leave-active {
		transition: all 0.5s ease;
	}
</style>