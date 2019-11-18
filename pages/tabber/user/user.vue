<template>
	<view class="flex flex-direction bg-green" :style="[{ height: 'calc(' + StatusAddNav + 'px + 150rpx)' }]">
		<view class="flex justify-end padding-top-xl">
			<text class="cuIcon-message text-xxl" @tap="news" ></text>
			<text class="cuIcon-settings text-xxl margin-lr-sm" ></text>
		</view>
		<view class="flex margin-lr-sm align-center">
			<view class="cu-avatar round xl" @tap="edit" :style="[{ backgroundImage:'url(' + userInfo.avatar + ')' }]">
				<view class="cu-tag badge cuIcon-crownfill bg-blue"></view>
			</view> 
			<view class="" v-if="!isLoginFlag" @tap="toLogin">
				<view class="login_btn"><button class="btn_login_green">登录</button></view>
			</view> 
			<view class="flex flex-direction margin-left self-end" v-if="isLoginFlag">
				<text class="text-lg white text-bold">脏兮兮</text>
				<text class="text-lg white margin-top-xs">{{userInfo.phone}}</text>
			</view>
		</view>
		<view class="flex justify-between bg-white radius margin-lr-sm padding margin-top-sm">
			<view class="flex flex-direction align-center" @tap="mycol">
				<text class="text-lg text-bold">{{userInfo.collect_product}}</text>
				<text class="text-df">我的收藏</text>
			</view>
			<view class="flex flex-direction align-center" @tap="shopcol">
				<text class="text-lg text-bold">{{userInfo.collect_merchant}}</text>
				<text class="text-df">关注店铺</text>
			</view>
			<view class="flex flex-direction align-center" @tap="shopcol">
				<text class="text-lg text-bold">{{userInfo.collect_merchant}}</text>
				<text class="text-df">我的足迹</text>
			</view>
		</view>
		<view class="flex flex-direction bg-white margin-lr-sm padding-sm margin-top-sm radius">
			<view class="flex text-grey justify-between solid-bottom padding-sm" @tap="order(0)">
				<text class="text-df">我的订单</text>
				<text class="cuIcon-right"></text>
			</view>
			<view class="flex justify-between padding-sm">
				<view class="flex flex-direction align-center"  @tap="order(1)">
					<text class="cuIcon-pay text-xxl text-orange"></text>
					<text class="text-df">待付款</text>
				</view>
				<view class="flex flex-direction align-center"  @tap="order(2)">
					<text class="cuIcon-send text-xxl text-orange"></text>
					<text class="text-df">待发货</text>
				</view>
				<view class="flex flex-direction align-center"  @tap="order(3)">
					<text class="cuIcon-deliver text-xxl text-orange"></text>
					<text class="text-df">待收货</text>
				</view>
				<view class="flex flex-direction align-center"  @tap="order(4)">
					<text class="cuIcon-comment text-xxl text-orange"></text>
					<text class="text-df">待评价</text>
				</view>
			</view>
		</view>
		<view class="flex flex-direction bg-white margin-lr-sm padding-sm margin-top-sm radius">
			<view class="flex justify-between align-center padding-sm solid-bottom" @tap="coupon">
				<view class="flex align-center">
					<text class="cuIcon-ticket text-xxl margin-right-xs text-orange"></text>
					<text class="text-df">优惠券</text>
				</view>
				<text class="cuIcon-right"></text>
			</view>
			<view class="flex justify-between align-center padding-sm solid-bottom" @tap="info">
				<view class="flex align-center">
					<text class="cuIcon-settings text-xxl margin-right-xs text-orange"></text>
					<text class="text-df">设置</text>
				</view>
				<text class="cuIcon-right"></text>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			StatusAddNav:this.StatusAddNav,
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
		setTimeout(()=>{
			this.isLoginFlag=this.isLogin();
			this.getUserInfo();
		},800);
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

<style scoped>

</style>
