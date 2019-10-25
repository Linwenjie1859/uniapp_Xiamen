<template>
	<view class="content">
		<view class="header">
			<view class="input_view" @tap="search"><text class="font-28 gray">搜索商品</text></view>
			<!-- 头部-滚动渐变显示 -->
			<view class="after" :style="{ opacity: afterHeaderOpacity, zIndex: afterHeaderzIndex }"></view>
		</view>

		<view class="banner">
			<view class="uni-padding-wrap">
				<view class="page-section swiper">
					<view class="page-section-spacing">
						<swiper
							class="swiper"
							indicator-color="#fff"
							indicator-active-color="#51c77d"
							:indicator-dots="indicatorDots"
							:autoplay="autoplay"
							:interval="interval"
							:duration="duration"
						>
							<swiper-item v-for="(item, index) in allInfo.banner" :key="index"><image :src="item.pic" mode=""></image></swiper-item>
						</swiper>
					</view>
				</view>
			</view>
		</view>
		<view class="notice">
			<image src="/static/notice.png" mode=""></image>
			<swiper class="notice_view" vertical="true" autoplay="true" circular="true" interval="3000">
				<swiper-item v-for="(item, index) in allInfo.roll" :key="index">
					<navigator class="font-28 text_limit">{{ item.info }}</navigator>
				</swiper-item>
			</swiper>
		</view>

		<view class="home_list">
			<view class="list_top font-28">
				<view class="top_view" @tap="fengyangScenery" v-for="(item, index) in allInfo.menus" :key="index">
					<image :src="item.pic" mode=""></image>
					<text>{{ item.name }}</text>
				</view>
			</view>
			<image class="home_pic2" :src="allInfo.article_category[0].image" mode=""></image>
			<view class="list_down">
				<image :src="allInfo.article_menus[0].pic" mode="" @tap="fengyang_scenery"></image>
				<image :src="allInfo.article_menus[1].pic" mode="" @tap="flowering_seasons"></image>
				<image :src="allInfo.article_menus[2].pic" mode="" @tap="fruit_garden"></image>
			</view>
		</view>
		<view class="home_list">
			<view class="title">
				<text class="font-32">玩转凤阳</text>
				<text class="font-28 gray" @tap="idealLife">更多></text>
			</view>
			<image class="home_pic3" :src="allInfo.info.otherList[0].image" mode="" :data-id="allInfo.info.otherList[0].id" @tap="line_details"></image>
			
			<view class="recommend_list font-28">
				<view class="list_view" :data-id="item.id" @tap="line_details" v-for="(item, index) in allInfo.info.otherList" :key="index">
					<image :src="item.image" mode=""></image>
					<text>{{ item.store_name }}</text>
				</view>
			</view>
		</view>
		<view class="home_list">
			<view class="title">
				<text class="font-32">放心农产品</text>
				<text class="font-28 gray" @tap="agriculturalSpecialty">更多></text>
			</view>
			<view class="product_list font-28">
				<view class="prod_view" @tap="goodeDetails" :data-id="item.id" v-for="(item, index) in allInfo.info.bastList" :key="index">
					<image :src="item.image" mode=""></image>
					<text class="font-28 text_limit" style="width: 335rpx; display: block;">{{ item.store_name }}</text>
					<view class="list_info">
						<text class="font-24 orange">￥{{ item.ot_price }}</text>
						<text class="font-24">月售{{ item.sales }}件</text>
					</view>
				</view>
			</view>
		</view>
		<text class="no_more font-28 gray">————没有更多————</text>
	</view>
</template>

<script>
export default {
	data() {
		return {
			//所有参数
			allInfo: {},
			// banner
			indicatorDots: true,
			autoplay: true,
			interval: 2000,
			duration: 1000,
			//控制渐变标题栏的参数
			beforeHeaderzIndex: 11, //层级
			afterHeaderzIndex: 10, //层级
			beforeHeaderOpacity: 1, //不透明度
			afterHeaderOpacity: 0 //不透明度
		};
	},

	onPageScroll(e) {
		//导航栏渐变
		let tmpY = 375;
		e.scrollTop = e.scrollTop > tmpY ? 375 : e.scrollTop;
		this.afterHeaderOpacity = e.scrollTop * (1 / tmpY);
		this.beforeHeaderOpacity = 1 - this.afterHeaderOpacity;
		//切换层级
		this.beforeHeaderzIndex = e.scrollTop > 0 ? 10 : 11;
		this.afterHeaderzIndex = e.scrollTop > 0 ? 11 : 10;
	},
	onLoad() {
		this.getHomeAllInfo();
	},
	onPullDownRefresh() {
		this.getHomeAllInfo();
	},
	methods: {
		getHomeAllInfo() {
			let that = this;
			that.baseGet(
				that.U({ c: 'public_api', a: 'index' }),
				function(res) {
					that.allInfo = res.data;
					console.log(that.allInfo);
				},
				function(res) {
					console.log(res);
				},
				true
			);
			uni.stopPullDownRefresh();
		},
		search(e) {
			uni.navigateTo({
				url: '/pages/list/search/search'
			});
		},

		// 凤阳风光
		fengyangScenery(e) {
			uni.navigateTo({
				url: '/pages/list/fengyang_scenery/fengyang_scenery'
			});
		},
		// 凤阳集市
		fengyangFair(e) {
			uni.navigateTo({
				url: '/pages/tabber/fengyang_fair/fengyang_fair'
			});
		},
		// 农土特产
		agriculturalSpecialty(e) {
			uni.navigateTo({
				url: '/pages/list/agricultural_specialty/agricultural_specialty'
			});
		},
		// 理想生活
		idealLife(e) {
			uni.navigateTo({
				url: '/pages/list/ideal_life/ideal_life'
			});
		},
		// 商品详情
		goodeDetails(e) {
			uni.navigateTo({
				url: '/pages/list/goode_details/goode_details?id=' + e.currentTarget.dataset.id
			});
		},
		fengyang_scenery(e) {
			uni.navigateTo({
				url: '/pages/list/fengyang_scenery/fengyang_scenery'
			});
		},
		flowering_seasons(e) {
			uni.navigateTo({
				url: '/pages/list/flowering_seasons/flowering_seasons'
			});
		},
		fruit_garden(e) {
			uni.navigateTo({
				url: '/pages/list/fruit_garden/fruit_garden'
			});
		},
		line_details(e) {
			uni.navigateTo({
				url: '/pages/list/line_details/line_details?id='+e.currentTarget.dataset.id
			});
		}
	}
};
</script>

<style>
page {
	background-color: #f2f2f2;
}

.content {
	text-align: center;
}

/* 头部 */
.header {
	width: 100%;
	height: 170upx;
	display: flex;
	align-items: center;
	position: fixed;
	top: 0;
	z-index: 10;
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
	z-index: 100;
}

.input_view text {
	display: block;
	width: 580upx;
	height: 70upx;
	line-height: 70upx;
	text-align: center;
}
.after {
	width: 100%;
	height: 170upx;
	position: fixed;
	top: 0upx;
	transition: opacity 0.05s linear;
	background-color: #51c77d;
	color: #fff;
}

.after .middle {
	display: flex;
	align-items: center;
	width: 400upx;
	padding-top: 90upx;
	margin: 0 auto;
	justify-content: space-between;
}

.banner {
	/* margin-top: 170upx; */
	width: 100%;
	height: 450upx;
}

.banner .swiper {
	height: 450upx;
}

.banner image {
	width: 100%;
	height: 450upx;
}

.notice {
	width: 100%;
	height: 90upx;
	background-color: #ffffff;
	display: flex;
	align-items: center;
}

.notice image {
	width: 35upx;
	height: 35upx;
	margin: 0upx 25upx;
}

.notice_view {
	text-align: left;
	width: 640upx;
	height: 90upx;
	line-height: 90upx;
}

.home_list {
	width: 100%;
	background-color: #ffffff;
	margin-top: 25upx;
}

.home_list .list_top {
	width: 700upx;
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.list_top .top_view image {
	width: 80upx;
	height: 80upx;
	margin: 25upx 35upx 10upx 35upx;
}

.list_top .top_view text {
	display: block;
	width: 150upx;
	text-align: center;
}

.home_pic2 {
	width: 700upx;
	height: 290upx;
	margin: 25upx auto;
}

.list_down {
	width: 700upx;
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.list_down image {
	width: 190upx;
	height: 90upx;
	margin-bottom: 25upx;
}

.title {
	width: 700upx;
	height: 100upx;
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.home_pic3 {
	width: 700upx;
	height: 340upx;
	margin: 0 auto;
}

.recommend {
	display: block;
	width: 700upx;
	margin: 0 auto;
	text-align: left;
}

.recommend_list {
	width: 700upx;
	margin: 25upx auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.recommend_list .list_view {
	position: relative;
	margin-bottom: 25upx;
}

.recommend_list .list_view image {
	width: 150upx;
	height: 150upx;
}

.recommend_list .list_view text {
	display: block;
	width: 150upx;
	height: 50upx;
	line-height: 50upx;
	color: #ffffff;
	background-color: rgba(255, 255, 255, 0.5);
	text-align: center;
	position: absolute;
	top: 100upx;
	left: 0upx;
}

.product_list {
	width: 700upx;
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-wrap: wrap;
}

.product_list .prod_view {
	width: 335upx;
}

.product_list .prod_view image {
	width: 335upx;
	height: 335upx;
	border-radius: 10upx;
}

.prod_view .list_info {
	width: 335upx;
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 10upx;
	margin-bottom: 25upx;
}

.product_list .prod_view text {
	/* width: 335upx;
		display: block;
		text-align: center;
		/* margin: 15upx 0upx 25upx 0upx; */
}

.no_more {
	width: 700upx;
	display: block;
	margin: 60upx auto;
	text-align: center;
}
</style>
