<template>
	<view class="content">
		<view class="user_info flex">
			<image :src="userInfo.avatar?userInfo.avatar:'/static/pic.png'" mode="" @tap="edit"></image>
			<view class="info" v-if="!isLoginFlag" @tap="toLogin">
				<view class="login_btn"><button class="btn_login_green">登录</button></view>
			</view>
			<view class="info" v-if="isLoginFlag">
				<text class="font-36 white">ID:{{userInfo.phone}}</text>
				<text class="font-28 white" @tap="edit">编辑个人资料</text>
			</view>
			<image class="news" src="/static/news_white.png" mode="" @tap="news"></image>
		</view>
		<view class="collection_list">
			<view class="list_view" @tap="mycol">
				<text class="font-32 font-weight">{{userInfo.collect_product}}</text>
				<text class="font-28 green">我的收藏</text>
			</view>
			<view class="list_view" @tap="shopcol">
				<text class="font-32 font-weight">{{userInfo.collect_merchant}}</text>
				<text class="font-28 green">关注店铺</text>
			</view>
			<view class="list_view" @tap="shopcol">
				<text class="font-32 font-weight">{{userInfo.collect_merchant}}</text>
				<text class="font-28 green">我的足迹</text>
			</view>
		</view>
		<view class="order_list">
			<view class="title" @tap="order(0)">
				<text class="font-32">我的订单</text>
				<image class="right_icon" src="/static/right.png" mode=""></image>
			</view>
			<view class="order_view">
				<view class="list_view"  @tap="order(1)">
					<image src="/static/state1.png" mode=""></image>
					<text class="font-28">待付款</text>
				</view>
				<view class="list_view"  @tap="order(2)">
					<image src="/static/state2.png" mode=""></image>
					<text class="font-28">待发货</text>
				</view>
				<view class="list_view"  @tap="order(3)">
					<image src="/static/state3.png" mode=""></image>
					<text class="font-28">待收货</text>
				</view>
				<view class="list_view"  @tap="order(4)">
					<image src="/static/state4.png" mode=""></image>
					<text class="font-28">待评价</text>
				</view>
			</view>
		</view>
		<view class="operation_list">
			<view class="title" @tap="coupon">
				<image class="left_icon" src="/static/coupon.png" mode=""></image>
				<text class="font-32">优惠券</text>
				<image class="right_icon" src="/static/right.png" mode=""></image>
			</view>
			<view class="title" style="border-bottom: none;" @tap="info">
				<image class="left_icon" src="/static/set_up.png" mode=""></image>
				<text class="font-32">设置</text>
				<image class="right_icon" src="/static/right.png" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			// 是否登录标志
			isLoginFlag: false,
			/******************/
			// banner
			indicatorDots: true,
			autoplay: true,
			interval: 2000,
			duration: 1000,
			userInfo:{
				collect_merchant:0,
				collect_product:0,
				phone:"",
			},
		};
	},
 
	onShow() {
		this.isLoginFlag=this.isLogin()?true:false;
		this.getUserInfo();
	},
	methods: {
		//获取用户的信息
		getUserInfo(){
			let that=this;
			that.basePost(
				that.U({ c: 'user_api', a: 'my'}),
				{},
				function(res) {
					that.userInfo=res.data
				},
				function(res) {
					console.log(res);
				}
			);
		},
		//跳转登录页面
		toLogin(){
			uni.navigateTo({
				url:"/pages/login/pwd_login/pwd_login"
			})
		},
		edit() {
			uni.navigateTo({
				url: '/pages/user/info_edit/info_edit'
			});
		},
		news(e) {
			uni.navigateTo({
				url: '/pages/user/my_news/my_news'
			});
		},
		mycol(e) {
			uni.navigateTo({
				url: '/pages/shop/my_collection/my_collection'
			});
		},
		shopcol(e) {
			uni.navigateTo({
				url: '/pages/shop/shop_collection/shop_collection'
			});
		},
		order(e) {
			console.log(e);
			uni.navigateTo({
				url: '/pages/user/my_order/my_order?index='+e
			});
		},
		coupon(e) {
			uni.navigateTo({
				url: '/pages/user/my_coupon/my_coupon'
			});
		},
		info(e) {
			uni.navigateTo({
				url: '/pages/user/my_info/my_info'
			});
		}
	}
};
</script>

<style>
page {
	background-color: #f2f2f2;
}
.login_btn {
	width: 350upx;
}
.btn_login_green {
	width: 120upx;
	height: 50upx;
	font-size: 24upx;
	background-color: rgba(0, 0, 0, 0);
	color: #ffffff;
	border-radius: 10upx;
	border: 2upx solid #ffffff;
	padding: 0;
	margin: 0 !important;
	text-align: center;
	line-height: 44upx;
}
.user_info {
	width: 100%;
	height: 320upx;
	display: flex;
	align-items: center;
	background-color: #51c77d;
}

.user_info image {
	width: 145upx;
	height: 145upx;
	margin: 0upx 45upx;
	border-radius: 50%;
}

.user_info .news {
	width: 84upx;
	height: 80upx;
	margin-top: -100upx;
	margin-left: 40upx;
}

.user_info text {
	display: block;
	width: 350upx;
}

.collection_list {
	width: 650upx;
	height: 180upx;
	border-radius: 10upx;
	background-color: #ffffff;
	position: absolute;
	top: 270upx;
	left: 50%;
	margin-left: -350upx;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0upx 25upx;
}

.list_view text {
	display: block;
	width: 150upx;
	text-align: center;
	margin: 20upx 0upx;
}

.order_list {
	width: 650upx;
	height: 300upx;
	margin: 0 auto;
	margin-top: 160upx;
	border-radius: 10upx;
	background-color: #ffffff;
	padding: 0upx 25upx;
}

.title {
	height: 100upx;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-bottom: 1upx solid #e5e5e5;
}

.order_list .order_view {
	margin-top: 40upx;
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.list_view {
	width: 150upx;
	text-align: center;
}

.order_list .list_view image {
	width: 50upx;
	height: 46upx;
}

.operation_list {
	width: 650upx;
	height: 200upx;
	margin: 0 auto;
	margin-top: 25upx;
	border-radius: 10upx;
	background-color: #ffffff;
	padding: 0upx 25upx;
}

.operation_list .left_icon {
	width: 50upx;
	height: 50upx;
}

.operation_list text {
	width: 520upx;
	text-align: left;
	display: block;
}
</style>
