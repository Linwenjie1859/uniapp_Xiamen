<template>
	<view class="content">
		<view class="header">
			<image src="/static/left_white.png" mode="" @tap="back" v-if="showBack"></image>
			<!-- 头部-滚动渐变显示 -->
			<view class="after" :style="{ opacity: afterHeaderOpacity, zIndex: afterHeaderzIndex }">
				<view class="middle font-32">
					<view v-for="(anchor, index) in anchorlist" :class="[selectAnchor == index ? 'on' : '']" :key="index" @tap="toAnchor(index)">{{ anchor.name }}</view>
				</view>
			</view>
		</view>
		<!-- 底部菜单 -->
		<view class="footer">
			<view class="footer_list">
				<view class="icons font-24 gray">
					<view class="box" @tap="commodity">
						<image src="/static/dp_icon.png" mode=""></image>
						<view class="text">店铺</view>
					</view>
					<view class="box" @tap="cart">
						<image src="/static/shop_cart_gray.png" mode=""></image>
						<view class="text">购物车</view>
					</view>
					<view class="box" @tap="collectGood">
						<image class="icon" :class="[isKeep ? 'shoucangsel' : 'shoucang']"></image>
						<view class="text">{{ isKeep ? '已' : '' }}收藏</view>
					</view>
				</view>
				<view class="btn font-24">
					<view class="joinCart bg_green white" @click="togglePopup('bottom', 'share')">加入购物车</view>
					<view class="buy bg_orange white" @click="togglePopup('bottom', 'share')">立即购买</view>
				</view>
			</view>
		</view>

		<!-- 商品主图轮播 -->
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
							<swiper-item v-for="(item, index) in goodsInfo.storeInfo.slider_image" :key="index"><image :src="item" mode=""></image></swiper-item>
						</swiper>
					</view>
				</view>
			</view>
		</view>

		<!-- 商品简介 -->
		<view class="shop_list">
			<!-- 商品 -->
			<view class="list_top">
				<text class="title font-32">{{ goodsInfo.storeInfo.store_name }}</text>
				<view class="shop_view">
					<view class="price">
						<text class="font-36 orange">￥{{ goodsInfo.storeInfo.price }}</text>
						<text class="font-24 static">特价优惠</text>
					</view>
					<!-- 	<view class="time">
						<text class="font-24">距离结束仅剩</text>
						<text class="font-36 orange">2天2小时11分28秒</text>
					</view> -->
				</view>
				<view class="shop_view font-24 gray">
					<text>快递：0.00</text>
					<text>已售：4件</text>
					<text>福建寿宁</text>
				</view>
			</view>
			<view class="list_top flex">
				<image src="/static/integral.png" mode=""></image>
				<text class="font-28">购买可获得45积分</text>
			</view>
			<!-- 评价 -->
			<view class="list_top" id="comments">
				<view class="title_view">
					<view class="view_left flex">
						<image src="/static/kf_icon.png" mode=""></image>
						<text class="font-28">宝贝评价({{goodsInfo.reply.count_num?goodsInfo.reply.count_num:0}})</text>
					</view>
					<view class="view_right" @tap="details"><text class="font-28 gray">查看全部></text></view>
				</view>
				<view class="comments_details flex" v-if="goodsInfo.reply"> 
					<image :src="goodsInfo.reply.avatar?goodsInfo.reply.avatar:'/static/pic.png'" mode=""></image>
					<text class="font-24">{{goodsInfo.reply.nickname}}</text>
				</view>
				<view class="details_info"><text class="title font-28 text_limit">{{goodsInfo.reply.comment}}</text></view>
			</view>
			<!-- 详情 -->
			<view class="list_top">
				<view class="title font-32 text_center">————商品详情————</view>
				<view class="details_content">
					<rich-text :nodes="goodsInfo.storeInfo.description"></rich-text>
				</view>
			</view>
			<view class="clear" style="height: 100upx;"></view>

			<!-- 底部弹窗 -->
			<uni-popup ref="share" :type="type" :custom="true" @change="change">
				<view class="uni-share">
					<view class="goods-info">
						<image :src="goodsInfo.storeInfo.slider_image[0]"></image>
						<view class="info">
							<view class="flex">
								<text class="price font-36 orange">￥{{ goodsInfo.storeInfo.price }}</text>
								<text class="spec font-24">规格：500g</text>
							</view>
							<text class="title font-28 text_limit_two">{{ goodsInfo.storeInfo.store_name }}</text>
							<view class="price-number">
								<text class="spec font-24">库存:{{ goodsInfo.storeInfo.stock }}件</text>
								<view class="number">
									<view class="sub font-32" @tap.stop="addSubNum(-1)"><text class="icon jian">-</text></view>
									<view class="input font-28"><input type="number" v-model="currentNum" /></view>
									<view class="add font-32" @tap.stop="addSubNum(1)"><text class="icon jia">+</text></view>
								</view>
							</view>
						</view>
					</view>
					<view class="cancel" @click="cancel('share')"><image src="/static/cancel.png" mode=""></image></view>
					<view class="btn flex">
						<button class="font-28 bg_green white" @click="addGoodToCar">加入购物车</button>
						<button class="font-28 bg_orange white" @tap="purchase">立即购买</button>
					</view>
					<view class="clear" style="height: 50upx;"></view>
				</view>
			</uni-popup>
		</view>
	</view>
</template>

<script>
// 底部弹出层
import uniPopup from '@/components/uni-popup/uni-popup.vue';

export default {
	components: {
		uniPopup
	},
	data() {
		return {
			showBack: true,
			// banner
			indicatorDots: true,
			autoplay: true,
			interval: 2000,
			duration: 1000,
			//控制渐变标题栏的参数
			beforeHeaderzIndex: 11, //层级
			afterHeaderzIndex: 10, //层级
			beforeHeaderOpacity: 1, //不透明度
			afterHeaderOpacity: 0, //不透明度

			anchorlist: [], //导航条锚点
			selectAnchor: 0, //选中锚点

			isKeep: false, //收藏

			// 底部弹出层
			show: false,
			type: '',
			list: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
			content: '顶部弹 popup',
			currentGoodsId: 0,
			goodsInfo: {
				storeInfo: {
					price: 0.0
				}
			},
			//当前购物车商品数量
			currentNum: 1
		};
	},
	onLoad(e) {
		this.currentGoodsId = e.id;
		this.getGoodInfo();
	},
	onReady() {
		this.calcAnchor(); //计算锚点高度，页面数据是ajax加载时，请把此行放在数据渲染完成事件中执行以保证高度计算正确
	},
	onPageScroll(e) {
		//锚点切换
		this.selectAnchor = e.scrollTop >= this.anchorlist[2].top ? 2 : e.scrollTop >= this.anchorlist[1].top ? 1 : 0;
		//导航栏渐变
		let tmpY = 375;
		e.scrollTop = e.scrollTop > tmpY ? 375 : e.scrollTop;
		this.afterHeaderOpacity = e.scrollTop * (1 / tmpY);
		this.beforeHeaderOpacity = 1 - this.afterHeaderOpacity;
		//切换层级
		this.beforeHeaderzIndex = e.scrollTop > 0 ? 10 : 11;
		this.afterHeaderzIndex = e.scrollTop > 0 ? 11 : 10;
	},

	methods: {
		//添加商品到购物车中
		addGoodToCar() {
			let that = this;
			if (that.isLogin()) {
				that.basePost(
					that.U({ c: 'auth_api', a: 'set_cart' }),
					{
						productId: that.goodsInfo.storeInfo.id,
						merId: that.goodsInfo.mer_id,
						cartNum: that.currentNum
					},
					function(res) {
						if (res.code == 200) {
							that.Tips({ title: '添加成功,在购物车等亲' });
							that.cancel('share');
						}
					},
					function(res) {
						console.log(res);
					}
				);
			}
		},
		//加购商品数量增减
		addSubNum(num) {
			if (num < 0 && this.currentNum == 1) {
				this.Tips({ title: '亲，已经不能再减了' });
				return;
			}
			this.currentNum += num;
		},
		//收藏和取消收藏
		collectGood() {
			let that = this;
			//收藏商品之前判断用户是否已经登录
			if (this.isLogin()) {
				console.log(this.isKeep);
				if (this.isKeep) {
					//收藏的情况下，进行取消收藏操作
					that.basePost(
						that.U({ c: 'store_api', a: 'uncollect_product' }),
						{
							productId: that.currentGoodsId
						},
						function(res) {
							if (res.code == 200) {
								that.isKeep = false;
							}
						},
						function(res) {
							console.log(res);
						}
					);
				} else {
					//还没有收藏的情况下，进行收藏操作
					that.basePost(
						that.U({ c: 'store_api', a: 'collect_product' }),
						{
							productId: that.currentGoodsId
						},
						function(res) {
							if (res.code == 200) {
								that.isKeep = true;
							}
						},
						function(res) {
							console.log(res);
						}
					);
				}
			}
		},
		//获取商品的信息
		getGoodInfo() {
			let that = this;
			that.baseGet(
				that.U({
					c: 'store_api',
					a: 'details',
					q: {
						id: that.currentGoodsId
					}
				}),
				function(res) {
					that.goodsInfo = res.data;
					that.isKeep = res.data.storeInfo.userCollect;
					console.log(that.goodsInfo);
				},
				function(res) {
					console.log(res);
				},
				true
			);
		},
		//返回上一页
		back() {
			uni.navigateBack();
		},
		// 立即购买
		purchase(e) {
			let that = this;
			that.baseGet(
				that.U({
					c: 'auth_api',
					a: 'now_buy',
					q: {
						productId: that.goodsInfo.storeInfo.id,
						merId: that.goodsInfo.mer_id,
						cartNum: that.currentNum
					}
				}),
				function(res) {
					console.log();
					uni.navigateTo({
						url: '/pages/user/confirm_order/confirm_order?listId=' + res.data.cartId
					});
				},
				function(res) {
					if(res.msg.indexOf("该产品库存不足")!=-1){
						that.Tips({title:res.msg});
					}
				},
				true
			);
		},
		commodity() {
			console.log(this.goodsInfo.mer_id);
			uni.navigateTo({
				url: '/pages/shop/shop_commodity/shop_commodity?storeId=' + this.goodsInfo.mer_id
			});
		},
		cart() {
			uni.switchTab({
				url: '/pages/tabber/shopping_cart/shopping_cart'
			});
		},
		details(e) {
			uni.navigateTo({
				url: '/pages/shop/comments_details/comments_details?id='+this.goodsInfo.storeInfo.id
			});
		},

		//跳转锚点
		toAnchor(index) {
			this.selectAnchor = index;
			uni.pageScrollTo({
				scrollTop: this.anchorlist[index].top,
				duration: 200
			});
		},
		//计算锚点高度
		calcAnchor() {
			this.anchorlist = [
				{
					name: '商品',
					top: 0
				},
				{
					name: '评价',
					top: 0
				},
				{
					name: '详情',
					top: 0
				}
			];
			let commentsView = uni.createSelectorQuery().select('#comments');
			commentsView
				.boundingClientRect(data => {
					let statusbarHeight = 0;
					//APP内还要计算状态栏高度
					// #ifdef APP-PLUS
					statusbarHeight = plus.navigator.getStatusbarHeight();
					// #endif
					let headerHeight = uni.upx2px(100);
					this.anchorlist[1].top = data.top - headerHeight - statusbarHeight;
					this.anchorlist[2].top = data.bottom - headerHeight - statusbarHeight;
				})
				.exec();
		},

		// 底部弹出层
		togglePopup(type, open) {
			switch (type) {
				case 'top':
					this.content = '顶部弹出 popup';
					break;

				case 'bottom':
					this.content = '底部弹出 popup';
					break;
				case 'center':
					this.content = '居中弹出 popup';
					break;
			}
			this.type = type;
			if (open === 'tip') {
				this.show = true;
			} else {
				this.$refs[open].open();
			}
		},
		cancel(type) {
			if (type === 'tip') {
				this.show = false;
				return;
			}
			this.$refs[type].close();
		},
		change(e) {
			console.log(e.show);
		}
	}
};
</script>

<style lang="scss">
page {
	background-color: #f2f2f2;
}

.banner {
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

// tab
.header {
	width: 100%;
	height: 170upx;
	display: flex;
	align-items: center;
	position: fixed;
	top: 0;
	z-index: 10;
}

.header image {
	width: 35upx;
	height: 35upx;
	position: absolute;
	left: 25upx;
	bottom: 45upx;
	z-index: 100000;
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

.on {
	width: 80upx;
	text-align: center;
	margin-bottom: -4upx;
	color: #f66d3c;
	border-bottom: solid 4upx #f66d3c;
}

// foot
.footer {
	position: fixed;
	bottom: 0upx;
	width: 100%;
	height: 100upx;
	border-top: solid 1upx #eee;
	background-color: #fff;
	z-index: 2;
}

.footer .footer_list {
	width: 700upx;
	height: 100upx;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 0 auto;
}

.icons {
	width: 310upx;
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.box {
	width: 80upx;
	height: 80upx;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
}

.box image {
	width: 50upx;
	height: 50upx;
}

.btn {
	height: 80upx;
	border-radius: 40upx;
	overflow: hidden;
	display: flex;
}

.joinCart,
.buy {
	height: 80upx;
	width: 180upx;
	text-align: center;
	line-height: 80upx;
}

// 商品
.flex {
	display: flex;
	align-items: center;
}

.shop_list {
	width: 700upx;
	position: absolute;
	top: 410upx;
	left: 50%;
	margin-left: -350upx;
}

.shop_list .list_top {
	width: 700upx;
	background-color: #fff;
	border-radius: 10upx;
	margin-bottom: 25upx;
}

.shop_list .list_top image {
	width: 35upx;
	height: 35upx;
	margin: 25upx 15upx 25upx 25upx;
}

.shop_list .list_top .title {
	width: 650upx;
	display: block;
	margin: 0 auto;
	padding-top: 20upx;
}

.shop_view {
	width: 650upx;
	margin: 0 auto;
	display: flex;
	align-items: flex-end;
	justify-content: space-between;
	padding-bottom: 25upx;
}

.shop_view .static {
	padding: 0upx 20upx;
	background-color: #fce0c8;
	border-radius: 25upx;
	color: #f66d3c;
	margin-left: 10upx;
}

.shop_view .time text {
	display: block;
	text-align: right;
}

// 评价
.title_view {
	width: 675upx;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-right: 25upx;
}

.comments_details image {
	width: 80upx !important;
	height: 80upx !important;
	border-radius: 50%;
	margin: 0upx 15upx 0upx 25upx !important;
}

.details_info {
	padding-bottom: 25upx;
}

// 详情
.details_content image {
	width: 650upx !important;
	height: 300upx !important;
}

/* 底部分享 */
.uni-share {
	background: #fff;
	position: relative;
}

.goods-info {
	width: 700upx;
	display: flex;
	margin: 0 auto;
	padding: 50upx 0upx;
}

.goods-info image {
	width: 220upx;
	height: 220upx;
}

.goods-info .info {
	width: 460upx;
	margin: 0upx 0upx 0upx 25upx;
}

.goods-info .info .title {
	display: block;
	width: 460upx;
	height: 80upx;
	overflow: hidden;
	margin: 25upx 0upx;
}

.goods-info .info .spec {
	display: block;
	text-align: center;
	color: #999;
	height: 30upx;
	line-height: 30upx;
	border-radius: 15upx;
	margin: 10upx 10upx;
}

.goods-info .info .price-number {
	width: 460upx;
	display: flex;
	align-items: flex-end;
	justify-content: space-between;
}

.goods-info .info .number {
	display: flex;
	justify-content: center;
	align-items: center;
}

.input {
	width: 45upx;
	height: 45upx;
	line-height: 50upx;
	text-align: center;
	margin: 0 10upx;
	background-color: #f2f2f2;
}

input {
	margin-top: -5upx;
}

.sub,
.add {
	width: 45upx;
	height: 45upx;
	text-align: center;
	line-height: 45upx;
	background-color: #f2f2f2;
	border-radius: 5upx;
}

.cancel image {
	width: 45upx;
	height: 45upx;
	position: absolute;
	top: 15upx;
	right: 15upx;
}

.uni-share .btn {
	width: 700upx;
	margin: 0 auto;
	height: 80upx;
}

.uni-share .btn button {
	width: 350upx;
	height: 80upx;
	line-height: 80upx;
	border-radius: 0upx;
}
</style>
