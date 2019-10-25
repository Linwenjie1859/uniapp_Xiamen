<template>
	<view class="content">
		<view class="order_info font-28">
			<view class="info_view">
				<text>订单号</text>
				<text>{{orderInfo.order_id}}</text>
			</view>
			<view class="info_view" style="border-bottom: none;">
				<text>金额</text>
				<text>￥{{orderInfo.total_price}}</text>
			</view>
		</view>
		<text class="font-32 title">支付方式</text>
		<view class="order_info font-28">
			<view class="info_view" @tap="mode">
				<image class="payment_method" src="/static/weixin.png" mode=""></image>
				<text class="payment_name">微信支付</text>
				<image src="/static/right.png" mode=""></image>
			</view>
			<view class="info_view" style="border-bottom: none;" @tap="mode">
				<image class="payment_method" src="/static/zhifubao.png" mode=""></image>
				<text class="payment_name">支付宝支付</text>
				<image src="/static/right.png" mode=""></image>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				orderInfo:{
					order_id:'',
					total_price:0
				},
			}
		},
		onLoad(e) {
			this.orderInfo=JSON.parse(e.orderInfo);
			console.log(this.orderInfo);
		},
		methods: {
			
			// 结算方式
			mode(e){
				uni.navigateTo({
					url:"/pages/user/confirmation_transaction/confirmation_transaction"
				})
			},
		}
	}
</script>

<style>
	page{
		background-color: #F2F2F2;
	}
	.order_info{
		width: 700upx;
		background-color: #FFFFFF;
		border-radius: 10upx;
		margin: 25upx auto;
	}
	.order_info .info_view{
		width: 650upx;
		height: 100upx;
		margin: 0 auto;
		border-bottom: 1upx solid #E5E5E5;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.title{
		display: block;
		width: 650upx;
		height: 60upx;
		line-height: 60upx;
		margin: 0 auto;
	}
	.info_view .payment_name{
		width: 550upx;
		margin-left: 20upx;
		text-align: left;
	}
	.info_view image{
		width: 35upx;
		height: 35upx;
	}
	.payment_method{
		width: 60upx!important;
		height: 60upx!important;
	}
	
</style>
