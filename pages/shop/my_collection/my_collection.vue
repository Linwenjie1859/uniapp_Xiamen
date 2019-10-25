<template>
	<view class="list">
		<!-- 收藏列表 -->
		<view class="sub-list valid" :class="subState">
			<view class="no_data" v-if="noDateFlag">
				<image src="/static/no_data.png" mode=""></image>
				<text class="font-28 gray">没有找到相关收藏~</text>
			</view>
			<view class="row" v-for="(row, index) in collectList" :key="index">
				<!-- 删除按钮 -->
				<view class="menu" @tap.stop="collectDelete(index)"><image src="/static/del_white.png" mode=""></image></view>
				<!-- content -->
				<view
					class="carrier"
					:class="[typeClass == 'valid' ? (theIndex == index ? 'open' : oldIndex == index ? 'close' : '') : '']"
					@touchstart="touchStart(index, $event)"
					@touchmove="touchMove(index, $event)"
					@touchend="touchEnd(index, $event)"
				>
					<view class="top_content">
						<image :src="row.image" mode="" @tap="purchase(row.pid,row.type)"></image>
						<view class="shop_info">
							<text class="font-32 block text-cut" @tap="purchase(row.pid,row.type)">{{ row.store_name }}</text>
							<view class="weight_view">
								<text class="font-24 weight">已售{{ row.sales }}件</text>
							</view>
							<view class="num">
								<view class="">
									<text class="font-24 orange">￥{{ row.price }}</text>
									<text class="font-24 gray" style="text-decoration:line-through">￥{{ row.ot_price }}</text>
								</view>
								<button class="btn_purchase_green" @tap="purchase(row.pid,row.type)">立即购买</button>
							</view>
						</view>
					</view>
				</view>
			</view>
			<uni-load-more :status="loadingMore" v-if="loadingMoreFlag" />
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			loadingMoreFlag: true, //上滑加载开关
			loadingMore: 'loading', //上滑加载更多的状态
			currentPage: 1,
			collectList: [],
			pageSize: 7,
			noDateFlag:false,
			/*************/
			headerTop: 0,
			//控制滑动效果
			typeClass: 'valid',
			subState: '',
			theIndex: null,
			oldIndex: null,
			isStop: false
		};
	},
	onReachBottom() {
		if (this.loadingMore === 'loading') {
			//防止重复加载
			return;
		}
		this.loadingMoreFlag = true;
		this.loadingMore = 'loading'; //每次上滑都要从新设置status
		setTimeout(() => {
			this.getCollectList(); //让加载图标旋转0.8s后才请求
		}, 600);
	},
	onPullDownRefresh() {
		//下拉刷新页面将之前的数据初始化
		this.collectList = [];
		this.currentPage = 1;
		this.getCollectList();
	},
	onLoad(e) {
		//当页面加载的时候调用接口获取内容
		setTimeout(() => {
			this.getCollectList();
		}, 600);
	},
	methods: {
		//取消收藏
		collectDelete(index) {
			let that = this;
			uni.showModal({
				title: '提示',
				content: '确定删除收藏的宝贝？',
				success: function(res) {
					if (res.confirm) {
						that.basePost(
							that.U({ c: 'store_api', a: 'uncollect_product' }),
							{
								productId: that.collectList[index].pid
							},
							function(res) {
								that.collectList.splice(index, 1);
								that.theIndex = null;
							},
							function(res) {
								console.log(res);
							}
						);
					} else {
						return;
					}
				}
			});
		},
		//处理收藏列表数据
		dealCollectList(data) {
			for (let i = 0; i < data.length; i++) {
				data[i].image = data[i].image.replace(/\\/g, '/');
			}
			return data;
		},
		//0.8s后隐藏加载提示的信息
		closeLoadingMoreFlag() {
			setTimeout(() => {
				this.loadingMoreFlag = false;
			}, 800);
		},
		//获取收藏列表
		getCollectList() {
			var that = this;
			that.baseGet(
				that.U({
					c: 'store_api',
					a: 'get_user_collect_product',
					q: {
						page: that.currentPage,
						limit: that.pageSize
					}
				}),
				function(res) {
					uni.stopPullDownRefresh(); //当请求成功之后将下拉刷新关闭
					if (res.data.length == 0) {
						if(that.collectList.length==0){
							that.noDateFlag=true;
						}
						that.loadingMore = 'noMore';
						that.closeLoadingMoreFlag(); //0.8后将状态隐藏
						return;
					}

					that.currentPage++;
					that.collectList = [...that.collectList, ...that.dealCollectList(res.data)];
					that.loadingMore = 'more';
				},
				function(res) {
					console.log(res);
				},
				true
			);
			uni.stopPullDownRefresh();
		},
		// 立即购买
		purchase(id,type) {
			uni.navigateTo({
				url: (type==2?'/pages/list/line_details/line_details?id=':'/pages/list/goode_details/goode_details?id=') + id
			});
		},
		switchType(type) {
			if (this.typeClass == type) {
				return;
			}
			uni.pageScrollTo({
				scrollTop: 0,
				duration: 0
			});
			this.typeClass = type;
			this.subState = this.typeClass == '' ? '' : 'show' + type;
			setTimeout(() => {
				this.oldIndex = null;
				this.theIndex = null;
				this.subState = this.typeClass == 'valid' ? '' : this.subState;
			}, 200);
		},
		//控制左滑删除效果-begin
		touchStart(index, event) {
			//多点触控不触发
			if (event.touches.length > 1) {
				this.isStop = true;
				return;
			}
			this.oldIndex = this.theIndex;
			this.theIndex = null;
			//初始坐标
			this.initXY = [event.touches[0].pageX, event.touches[0].pageY];
		},
		touchMove(index, event) {
			//多点触控不触发
			if (event.touches.length > 1) {
				this.isStop = true;
				return;
			}
			let moveX = event.touches[0].pageX - this.initXY[0];
			let moveY = event.touches[0].pageY - this.initXY[1];

			if (this.isStop || Math.abs(moveX) < 5) {
				return;
			}
			if (Math.abs(moveY) > Math.abs(moveX)) {
				// 竖向滑动-不触发左滑效果
				this.isStop = true;
				return;
			}

			if (moveX < 0) {
				this.theIndex = index;
				this.isStop = true;
			} else if (moveX > 0) {
				if (this.theIndex != null && this.oldIndex == this.theIndex) {
					this.oldIndex = index;
					this.theIndex = null;
					this.isStop = true;
					setTimeout(() => {
						this.oldIndex = null;
					}, 150);
				}
			}
		},

		touchEnd(index, $event) {
			//解除禁止触发状态
			this.isStop = false;
		},

		//删除商品
		deleteCoupon(id, List) {
			let len = List.length;
			for (let i = 0; i < len; i++) {
				if (id == List[i].id) {
					List.splice(i, 1);
					break;
				}
			}
			this.oldIndex = null;
			this.theIndex = null;
		},

		discard() {
			//丢弃
		}
	}
};
</script>
<style lang="scss">
page {
	position: relative;
	background-color: #f2f2f2;
}
.text-center {
	text-align: center;
}
.text-cut {
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
}

.list {
	width: 100%;
	display: block;
	position: relative;
}

.row {
	width: 700upx;
	height: 170upx;
	margin: 25upx auto;
	border-radius: 10upx;
	position: relative;
	overflow: hidden;
	z-index: 4;
}

.row .menu {
	width: 195upx;
	height: 170upx;
	position: absolute;
	right: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: red;
	color: #fff;
	z-index: 2;
}

.menu image {
	width: 35upx;
	height: 35upx;
}

.row .carrier {
	width: 700upx;
	margin: 0 auto;
	border-radius: 10upx;
}

.carrier {
	@keyframes showMenu {
		0% {
			transform: translateX(0);
		}

		100% {
			transform: translateX(-28%);
		}
	}

	@keyframes closeMenu {
		0% {
			transform: translateX(-28%);
		}

		100% {
			transform: translateX(0);
		}
	}

	&.open {
		animation: showMenu 0.25s linear both;
	}

	&.close {
		animation: closeMenu 0.15s linear both;
	}

	background-color: #fff;
	position: absolute;
	width: 100%;
	padding: 0 0;
	height: 100%;
	z-index: 3;
	flex-wrap: nowrap;
}
// 列表
.top_content {
	width: 700upx;
	height: 170upx;
	background-color: #ffffff;
	// margin: 25upx auto;
	border-radius: 10upx;
	display: flex;
	align-items: center;
}

.top_content image {
	width: 115upx;
	height: 115upx;
	margin-left: 25upx;
}

.top_content .shop_info {
	width: 510upx;
	height: 115upx;
	margin: 0upx 25upx;
}

.top_content .block {
	display: block;
	text-align: left;
}
.top_content .weight_view {
	text-align: left;
}
.top_content .weight {
	display: block;
	width: 80upx;
	height: 30upx;
	background-color: #e5e5e5;
	color: #ffffff;
	border-radius: 10upx;
	line-height: 30upx;
	text-align: center;
}

.top_content .num {
	display: block;
	text-align: left;
	display: flex;
	align-items: flex-end;
	justify-content: space-between;
	margin-top: -6upx;
}

.top_content .num text {
	margin-right: 25upx;
}
.no_data {
	width: 700upx;
	margin: 0 auto;
	text-align: center;
	margin-top: 300upx;
}

.no_data image {
	width: 200upx;
	height: 200upx;
	margin: 0 auto;
}

.no_data text {
	display: block;
	width: 700upx;
	margin: 0 auto;
	text-align: center;
}
</style>
