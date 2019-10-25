<template>
	<view class="content">
		<view class="header">
			<image class="left_icon" src="/static/left_white.png" mode="" @tap="back"></image>
			<view class="input_view"><input class="font-28" type="text" v-model="keyWord" placeholder="搜索商品" style="text-align: center; width: 100%;" /></view>
			<image class="search" src="/static/search.png" @tap="search"></image>
			<view class="bg_white">
				<view class="top_content">
					<image :src="storeInfo.merInfo.store_logo" mode=""></image>
					<view class="shop_info">
						<text class="font-32 block">{{ storeInfo.merInfo.store_name }}</text>
						<text class="font-24 block">福建省宁德市寿宁县</text>
						<view class="num">
							<text class="font-24 gray">{{ storeInfo.merInfo.views }}人收藏</text>
							<text class="font-24 gray">销售量6件</text>
						</view>
					</view>
					<button class="btn_collection_green" @click="keep">{{ isKeep != null ? '已' : '' }}收藏</button>
				</view>
			</view>
		</view>
		<view class="tabs">
			<scroll-view class="scroll-h" :scroll-x="true" :scroll-into-view="scrollInto" style="text-align: center;">
				<view v-for="(tab, index) in tabBars" :key="index" class="uni-tab-item" :id="tab.id" :data-current="index" @click="ontabtap">
					<text class="uni-tab-item-title" :class="tabIndex == index ? 'uni-tab-item-title-active' : ''">{{ tab.title }}</text>
				</view>
			</scroll-view>
			<swiper :current="tabIndex" class="swiper-box" :duration="300" @change="ontabchange">
				<swiper-item class="swiper-item">
					<scroll-view class="scroll-v" scroll-y @scrolltolower="loadMore(index1)">
						<!-- 店铺首页 -->

						<view class="home_info ">
							<image src="/static/shop_banner.png" mode=""></image>
							<text class="font-28 text_info">
								当我们说起葡萄园时，最先进入脑海的一般是诸如皮埃蒙特（Piedmont）或勃艮第（Burgundy）这样著名的产区。而位于芬兰或者泰国的葡萄园？不好意思，实在是闻所未闻。尽管这些地区看起来和葡萄园毫无交集，但其实它们也有一定的葡萄种植历史。而这些让人出乎意料的种植地也恰恰反映了葡萄树不屈不挠的精神。下面，小编就为大家介绍世界上最不可思议的九大葡萄园。
							</text>
						</view>
						<view class="home_info">
							<view class="title">
								<text class="font-32">店铺精选</text>
								<text class="font-28">换一换</text>
							</view>
							<view class="goods_list">
								<view class="list_view" :data-id="item.id" @tap="detail" v-for="(item, index) in storeInfo.similarity" :key="index">
									<image :src="item.image" mode=""></image>
									<text class="font-28 text_limit">{{ item.store_name }}</text>
									<view class="list_info">
										<text class="font-24 orange">￥{{ item.price }}</text>
										<text class="font-24">月售{{ item.sales }}件</text>
									</view>
								</view>
							</view>
						</view>

						<view class="loading-more">
							<text class="loading-more-text">{{ tab.loadingText }}</text>
						</view>
					</scroll-view>
				</swiper-item>
				<swiper-item class="swiper-item" v-for="(ite, ind) in 3" :key="ind">
					<scroll-view class="scroll-v" scroll-y @scrolltolower="loadMore">
						<!-- 全部宝贝 -->
						<view class="home_info">
							<view class="goods_list">
								<view class="list_view" :data-id="item.id" @click="detail" v-for="(item, index) in newsList[ind + 1].data" :key="index">
									<image :src="item.image" mode="" class="has-margin-top"></image>
									<text class="font-28 text_limit">{{ item.store_name }}</text>
									<view class="list_info">
										<text class="font-24 orange">￥{{ item.price }}</text>
										<text class="font-24">月售{{ item.sales }}件</text>
									</view>
								</view> 
							</view>
							
							<view class="loading-more">
								<uni-load-more :status="newsList[ind + 1].loadingStatus" v-if="newsList[ind + 1].loadingFlag"/>
							</view>
						</view>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue'
export default {
	components: {
		uniLoadMore
	},
	data() {
		return {
			keyWord:"",	//搜索关键字
			currentLoadFlag:true,
			newsList: [],	//全部宝贝、新品、活动数组集合
			storeId: '',	// 本店ID
			storeInfo: {
				merInfo:{
					views:0
				}
			},	//店铺首页
			tabIndex: 0,	//当前下标
			scrollInto: '',	//scroll跳转到这个Id
			isKeep: false,  //收藏
			tabBars: [
				{
					title: '店铺首页',
					id: 'shouye'
				},
				{
					title: '全部宝贝',
					id: 'baobei'
				},
				{
					title: '新品上架',
					id: 'xingping'
				},
				{
					title: '活动促销',
					id: 'huodong'
				}
			]
		};
	},
	onLoad(e) {
		this.storeId = e.storeId;
		this.getStoreInfo();
		this.initInfo();
	},
	methods: {
		//初始化newsList数据类型
		initInfo() {
			this.tabBars.forEach(tabBar => {
				this.newsList.push({
					data: [],
					refreshText: '',
					loadingStatus:"more",
					currentPage: 1,
					pageSize: 6,
					loadingFlag:false,
				});
			});
		},
		// 加载更多，
		loadMore() {
			if(this.currentLoadFlag){
				this.currentLoadFlag=false;
				this.newsList[this.tabIndex].loadingStatus="loading";
				this.newsList[this.tabIndex].loadingFlag=true;
				this.getList(this.tabIndex);
			}
			//保证每次只能请求一次
			setTimeout(()=>{
				this.currentLoadFlag=true;
			}, 500);
		
		},
		//导航栏点击跳转
		ontabtap(e) {
			let index = e.target.dataset.current || e.currentTarget.dataset.current;
			this.tabIndex = index;
		},
		//左右滑动
		ontabchange(e) {
			let index = e.target.current || e.detail.current;
			this.tabIndex = index;
			this.scrollInto = this.tabBars[index].id;
			//获取信息
			if (this.newsList[index].data.length === 0) {
				this.getList(index);
			}
		},
		
		//获取全部宝贝、新品、活动促销
		getList(index) {
			console.log('请求', index);
			let that = this;
			// 如果是首页点击那么不需要请求
			if (index == 0) {
				return;
			}
			that.baseGet(
				that.U({
					c: 'store_api',
					a: 'get_product_list',
					q: {
						mid: that.storeId,
						news: index == 2 ? 1 : '',
						benefit: index == 3 ? 1 : '',
						page: that.newsList[index].currentPage,
						limit: that.newsList[index].pageSize
					}
				}),
				function(res) {
					if (res.data.length == 0) {
						that.newsList[index].loadingStatus = 'noMore';
						return;
					}
					that.newsList[index].data = [...that.newsList[index].data, ...res.data];
					that.newsList[index].currentPage++;
					console.log(that.newsList[index]);
				},
				function(res) {
					console.log(res);
				},
				true
			);
		},
		//获取店铺详情
		getStoreInfo() {
			let that = this;
			that.baseGet(
				that.U({
					c: 'merchant_api',
					a: 'merchant_info',
					q: {
						id: that.storeId
					}
				}),
				function(res) {
					that.storeInfo = res.data;
					console.log(res);
					that.isKeep = res.data.merInfo.is_collect;
				},
				function(res) {
					console.log(res);
				},
				true
			);
		},
		//收藏
		keep() {
			let that = this;
			//收藏商品之前判断用户是否已经登录
			if (this.isLogin()) {
				if (this.isKeep != null) {
					//收藏的情况下，进行取消收藏操作
					that.basePost(
						that.U({ c: 'merchant_api', a: 'uncollect_merchant' }),
						{
							merId: that.storeId
						},
						function(res) {
							if(res.code==200){
								that.isKeep = null;
							}
						},
						function(res) {
							console.log(res);
						}
					);
				} else {
					//还没有收藏的情况下，进行收藏操作
					that.basePost(
						that.U({ c: 'merchant_api', a: 'collect_merchant' }),
						{
							merId: that.storeId
						},
						function(res) {
							if(res.code==200){
								that.isKeep = '1';
							}
						},
						function(res) {
							console.log(res);
						}
					);
				}
			}
		},

		//返回上一页
		back() {
			uni.navigateBack();
		},
		// 搜索商品
		search() {
			console.log();
			uni.navigateTo({
				url: `/pages/list/search_list/search_list?keyWord=${this.keyWord}&storeId=${this.storeId}`
			});
		},
		// 商品详情
		detail(e) {
			var id = e.currentTarget.dataset.id
			uni.navigateTo({
				url: '/pages/list/goode_details/goode_details?id='+id
			});
		},
	}
};
</script>

<style lang="scss">
	.has-margin-top{
		margin-top: 25rpx;
	}
.bg-white {
	background: #ffffff;
}
.tabs {
	margin-top: 340upx;
	flex: 1;
	flex-direction: column;
	overflow: hidden;
	height: 100vh;
}

.scroll-h {
	width: 750upx;
	height: 80upx;
	flex-direction: row;
	background: #ffffff;
}

.line-h {
	height: 1upx;
	background-color: #cccccc;
}

.uni-tab-item {
	display: inline-block;
	flex-wrap: nowrap;
	padding-left: 33upx;
	padding-right: 33upx;
}

.uni-tab-item-title {
	color: #555;
	font-size: 30upx;
	height: 80upx;
	line-height: 80upx;
	flex-wrap: nowrap;
	white-space: nowrap;
}

.uni-tab-item-title-active {
	color: #51c77d;
	padding-bottom: 10rpx;
	border-bottom: 6upx solid #51c77d;
}

.swiper-box {
	flex: 1;
	height: 100vh;
}

.swiper-item {
	flex: 1;
}

.scroll-v {
	height: calc(100vh - 430rpx);
	width: 750upx;
}

.update-tips {
	position: absolute;
	left: 0;
	top: 41px;
	right: 0;
	padding-top: 5px;
	padding-bottom: 5px;
	background-color: #fddd9b;
	align-items: center;
	justify-content: center;
	text-align: center;
}

.update-tips-text {
	font-size: 14px;
	color: #ffffff;
}

.refresh {
	width: 750upx;
	height: 64px;
	justify-content: center;
}

.refresh-view {
	flex-direction: row;
	flex-wrap: nowrap;
	align-items: center;
	justify-content: center;
}

.refresh-icon {
	width: 32px;
	height: 32px;
	transition-duration: 0.5s;
	transition-property: transform;
	transform: rotate(0deg);
	transform-origin: 16px 16px;
}

.refresh-icon-active {
	transform: rotate(180deg);
}

.loading-icon {
	width: 20px;
	height: 20px;
	margin-right: 5px;
}

.loading-icon-active {
	transform: rotate(21600deg);
}

.loading-text {
	margin-left: 2px;
	font-size: 16px;
	color: #999999;
}

.loading-more {
	align-items: center;
	justify-content: center;
	// padding-top: 10px;
	// padding-bottom: 10px;
	text-align: center;
}

.loading-more-text {
	font-size: 28upx;
	color: #999;
}
page {
	background-color: #f2f2f2;
}

.content {
	height: 100vh;
	width: 100%;
	overflow: hidden;
}
// 头部
.header {
	background-color: #51c77d;
	width: 100%;
	height: 170upx;
	position: fixed;
	top: 0;
	z-index: 10000;
}

.header .left_icon {
	width: 35upx;
	height: 35upx;
	position: absolute;
	left: 25upx;
	bottom: 45upx;
}
.header .search {
	width: 35upx;
	height: 35upx;
	position: absolute;
	right: 25upx;
	bottom: 45upx;
}
.input_view {
	width: 580upx;
	height: 70upx;
	background-color: rgba(255, 255, 255, 0.5);
	border-radius: 10upx;
	position: absolute;
	left: 50%;
	margin-left: -290upx;
	bottom: 25upx;
	display: flex;
	align-items: center;
}

.input_view text {
	display: block;
	width: 580upx;
}

.bg_white {
	width: 100%;
	height: 170upx;
	z-index: 10000;
	background-color: #ffffff;
}

.top_content {
	width: 700upx;
	height: 170upx;
	margin: 0 auto;
	display: flex;
	align-items: center;
	margin-top: 170upx;
	border-bottom: 1upx solid #e5e5e5;
}

.top_content image {
	width: 115upx;
	height: 115upx;
}

.top_content .shop_info {
	width: 415upx;
	height: 115upx;
	margin: 0upx 25upx;
}

.top_content .block {
	display: block;
	text-align: left;
}

.top_content .num {
	display: block;
	text-align: left;
	margin-top: -12upx;
}

.top_content .num text {
	margin-right: 25upx;
}

.active-switch {
	width: 100%;
	height: 105upx;
	// overflow:scroll;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-radius: 10upx;
	position: fixed;
	top: 340upx;
	z-index: 100;
}

// 店铺首页

.home_info {
	width: 700upx;
	margin: 25upx auto;
	background-color: #ffffff;
	border-radius: 10upx;
	// padding-top: 25upx;
	text-align: center;
}

.home_info image {
	width: 650upx;
	height: 350upx;
	border-radius: 10upx;
	margin: 25rpx auto;
}

.home_info .text_info {
	display: block;
	width: 650upx;
	margin: 0 auto;
	text-align: left;
	padding-bottom: 25rpx;
}

.title {
	width: 650upx;
	margin: 0 auto;
	display: flex; 
	align-items: center;
	justify-content: space-between;
	margin-bottom: 25upx;
	padding-top: 25rpx
}

.goods_list {
	width: 650upx;
	margin: 0 auto;
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	justify-content: space-between;
}

.goods_list .list_view {
	width: 310upx;
	margin-bottom: 25upx;
}

.goods_list .list_view .text_limit {
	display: block;
	width: 310upx;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
}

.goods_list .list_view image {
	width: 310upx;
	height: 310upx;
}

.goods_list .list_view .list_info {
	width: 310upx;
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
</style>
