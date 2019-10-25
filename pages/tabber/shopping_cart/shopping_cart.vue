<template>
	<view class="content">
		<view class="loading-more"><uni-load-more :status="loadingStatus" v-if="refreshFlag" /></view>
		<!-- 未登录页面 -->
		<view class="no_data" style="display: none;">
			<image src="/static/no_data.png" mode=""></image>
			<text class="font-28 gray">空空如也~</text>
			<button class="btn_login_green" style="margin: 50upx auto;">登陆</button>
		</view>
		<!-- 商品列表 -->
		<view class="goods-list">
			<view class="no_data" v-if="noDateFlag">
				<image src="/static/no_data.png" mode=""></image>
				<text class="font-28 gray">购物车空空如也~</text>
			</view>
			<view class="goods" v-for="(row, index) in goodsList" :key="index">
				<view class="shop_top">
					<!-- checkbox -->
					<view class="checkbox-box" @tap="setCheckedList(index)">
						<view class="checkbox"><view :class="[checkedList.indexOf(index) != -1 ? 'on' : '']"></view></view>
					</view>
					<image class="shop_img" src="/static/dp_icon.png" mode=""></image>
					<text class="font-32">{{ row.name }}</text>
					<text class="font-28" @tap="getCupon">领券</text>
				</view>
				<view class="row" v-for="(rows, ind) in row.list" :key="ind">
					<!-- 删除按钮 -->
					<view class="menu" @tap.stop="deleteGood(rows.id,index,ind)"><image src="/static/del_white.png" mode=""></image></view>
					<!-- 商品 -->
					<view 
						class="carrier"
						:class="[theIndex == rows.id ? 'open' : oldIndex == rows.id ? 'close' : '']"
						@touchstart="touchStart(rows.id , $event)"
						@touchmove="touchMove(rows.id ,  $event)"
						@touchend="touchEnd(rows.id ,  $event)"
					>
						<!-- 商品信息 -->
						<view class="goods-info">
							<!-- checkbox -->
							<view class="checkbox-box" @tap="setCheckedItem(index, ind)">
								<view class="checkbox"><view :class="[rows.checked ? 'on' : '']"></view></view>
							</view>
							<image :src="rows.productInfo.image" @tap="goodDetail(rows.productInfo.id)"></image>
							<view class="info">
								<text class="title font-28 text_limit" >{{ rows.productInfo.store_name }}</text>
								<text class="spec font-24">已售{{ rows.productInfo.sales }}件</text>
								<view class="price-number">
									<text class="price font-32 orange">￥{{ rows.productInfo.price }}</text>
									<view class="number"> 
										<view class="sub font-32" @tap="addSubNum(index, ind, -1)"><text class="icon jian">-</text></view>
										<input type="number" class="input font-28" v-model.number="rows.cart_num" @blur="addSubNum(index,ind,0)"/>
										<view class="add font-32" @tap="addSubNum(index, ind, 1)"><text class="icon jia">+</text></view>
									</view>
								</view>
							</view> 
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="clear" style="height: 100upx;"></view>
		<!-- 脚部菜单 -->
		<view class="footer" :style="{ bottom: footerbottom }">
			<view class="checkbox-box" @tap="setCheckedFlag">
				<view class="checkbox"><view :class="[checkedAllFlag ? 'on' : '']"></view></view>
			</view>
			<view class="text font-28">全选</view>
			<!-- <view class="delBtn" @tap="deleteList" v-if="selectedList.length>0">删除</view> -->
			<view class="sum font-28">
				合计:
				<view class="money font-32 orange">￥{{ sumAllPrice }}</view>
			</view>
			<button class="btn_pur_green btn" @tap="purchase">结算{{ checkedNum==0?'':'('+checkedNum+')' }}</button>
		</view>
	</view>
</template>

<script>
import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue';
export default {
	components: {
		uniLoadMore
	},
	data() {
		return {
			//加载loading标记
			refreshFlag: true,
			loadingStatus:'loading',
			
			listId:[],
			
			noDateFlag: false,// 页面没有数据标志
			checkedNum:0,// 目前选中的商品个数
			checkedAllFlag: false,			//全部选中按钮标记
			checkedList: [],//所有被选中店铺
			checkAll: true,		//购物车全选
			goodsList: [],
			differentStore:false,	
			/************/
			headerPosition: 'fixed',
			headerTop: null,
			statusTop: null,
			showHeader: true,
			selectedList: [],
			isAllselected: false,

			//控制滑动效果
			theIndex: "",
			oldIndex: "",
			isStop: false 
		};
	},
	onPullDownRefresh() {
		this.goodsList=[];
		this.getGoodsList();
	},
	
	onLoad() {
		this.isLogin();
	},
	onShow() {
		this.getGoodsList();
	},
	computed: {
		//计算总的金额，只要当数量或者商品改变，总价就随之改变
		sumAllPrice() {
			let that = this;
			let numPrice = 0;
			let checked=0;
			that.listId=[];
			let mer_id=-1;
			that.differentStore=false;
			for (let i = 0; i < that.goodsList.length; i++) { 
				for (let y = 0; y < that.goodsList[i].list.length; y++) {
					if(that.goodsList[i].list[y].checked){
						if(!(that.goodsList[i].id==mer_id || mer_id==-1)){
							that.differentStore=true;	//用户选中不同的店铺
						}
						mer_id=that.goodsList[i].id;	//将当前的店铺id保存
						checked++;	//统计选中的个数
						that.listId.push(that.goodsList[i].list[y].id);
						numPrice += that.goodsList[i].list[y].cart_num *that.goodsList[i].list[y].productInfo.price;
					}
				}
			}
			that.checkedNum=checked;
			return numPrice.toFixed(2);
		},
	},
	methods: {
		changeNum(){
			console.log("改变");
		},
		//删除商品
		deleteGood(id,index,ind){
			let that=this;
			uni.showModal({
				title: '提示',
				content: '确定删除这个宝贝？',
				success: function(res) {
					if (res.confirm) {
						that.basePost(
							that.U({ c: 'auth_api', a: 'remove_cart' }),
							{ids:id},
							function(res) { 
								//直接移除数组中的元素
								that.goodsList[index].list.splice(ind,1);
								that.theIndex="";
								if(that.goodsList[index].list.length==0){
									that.goodsList.splice(index,1);
								} 
								if(that.goodsList.length==0){
									that.noDateFlag=true;
								}
							},
							function(res) {
								console.log(res);
							}
						);
					} else{
						return;
					}
				}
			});
		},
		//请求接口获取数据
		getGoodsList() {
			let that = this;
				that.basePost(
					that.U({ c: 'auth_api', a: 'get_cart_list' }),
					{},
					function(res) { 
						//请求成功后将加载标志隐藏
						that.refreshFlag=false;
						let valid=res.data.valid;
						that.goodsList = valid;	
						that.noDateFlag = valid.length == 0?true:false;	//没有数据显示空购物车图片
						for (let i = 0; i < that.goodsList.length; i++) {
							//整体定义，为了简写
							let array=that.goodsList[i];
							for (let y = 0; y < array.list.length; y++) {
								//改变数据的字段类型
								that.$set(array.list[y],'checked',false);
								array.list[y]['cart_num'] = parseInt(array.list[y].cart_num);
								array.list[y].productInfo['price'] = parseInt(array.list[y].productInfo.price);
							}
						}
						that.checkedList=[];	//初始化选中的店铺数组
						that.checkedAllFlag=false;	//初始化选全选标志
						uni.stopPullDownRefresh();
					},
					function(res) {
						that.refreshFlag=false;
						console.log(res);
					}
				);
				
		},
		//进行判断是否已经都全选
		ifAllChecked() {
			this.checkedAllFlag = this.checkedList.length == this.goodsList.length ? true : false;
		},
		//初始化数据，添加checked字段。type:1为用户点击全选，type:0为初始化
		setCheckedFlag() {
				for (let i = 0; i < this.goodsList.length; i++) {
					for (let y = 0; y < this.goodsList[i].list.length; y++) {
						this.goodsList[i].list[y]['checked'] = this.checkedAllFlag ? false : true;
					}
					//将店铺的也选中
					if (!this.checkedAllFlag) {
						this.checkedList.push(i);
					} else {
						this.checkedList = [];
					}
				}
				//将全选标记取反
				this.checkedAllFlag = !this.checkedAllFlag;
		},
		//为单个商品设置选中或取消选中
		setCheckedItem(index, ind) {
			var that = this;
			that.goodsList[index].list[ind].checked = !that.goodsList[index].list[ind].checked;
			//判断这个商店是否还有未被选中的商品
			let Flag = true;
			let goodsInfo = that.goodsList[index].list;
			for (let x = 0; x < goodsInfo.length; x++) {
				if (!goodsInfo[x].checked) {
					Flag = false;
				}
			}
			if (Flag) {
				//商品全部选中，那么店铺也要被选中
				this.checkedList.push(index);
			} else {
				//判断店铺是否有被选中过，如果在商品没有都选中的情况下，店铺是不能被选中的
				if (this.checkedList.indexOf(index) != -1) {
					this.checkedList.splice(this.checkedList.indexOf(index), 1);
				}
			}
			this.ifAllChecked();
		},
		//店铺全选按钮
		setCheckedList(index) {
			let isFlag = true;
			let check = this.checkedList;
			// 如果已经选中状态，那么就设置为false
			if (check.indexOf(index) != -1) {
				check.splice(check.indexOf(index), 1);
				for (let y = 0; y < this.goodsList[index].list.length; y++) {
					this.goodsList[index].list[y]['checked'] = false;
				}
			} else {
				check.push(index);
				for (let y = 0; y < this.goodsList[index].list.length; y++) {
					this.goodsList[index].list[y]['checked'] = true;
				}
			}
			this.ifAllChecked();
		},
		//商品加减操作
		addSubNum(index, ind, num) {
			if (num < 0 && this.goodsList[index].list[ind].cart_num <= 1) {
				uni.showToast({
					title: '该宝贝不能减少了哟~',
					position: 'bottom',
					icon: 'none'
				});
			} else {
				this.goodsList[index].list[ind].cart_num = this.goodsList[index].list[ind].cart_num + num;
			}
			let that = this;
			that.basePost(
				that.U({ c: 'auth_api', a: 'change_cart_num' }),
				{
					cartId:that.goodsList[index].list[ind].id,
					cartNum:that.goodsList[index].list[ind].cart_num
				},
				function(res) { 
					console.log(res);
				},
				function(res) {
					console.log(res);
				}
			);
		},
		/*****************************/
		// 立即购买
		purchase(e) {
			if(this.differentStore){
				uni.showToast({
					title: '只能在同一个店铺进行下单~',
					position: 'bottom',
					icon: 'none'
				});
				return ;
			}
			if(this.listId.length>0){
				uni.navigateTo({
					url: '/pages/user/confirm_order/confirm_order?listId='+this.listId
				});
			}
		},
		//加入商品 参数 goods:商品数据
		joinGoods(goods) {
			/*
			 * 这里只是展示一种添加逻辑，模板并没有做从其他页面加入商品到购物车的具体动作，
			 * 在实际应用上，前端并不会直接插入记录到goodsList这一个动作，一般是更新列表和本地列表缓存。
			 * 一般商城购物车的增删改动作是由后端来完成的,
			 * 后端记录后返回前端更新前端缓存
			 */
			let len = this.goodsList.length;
			let isFind = false; //是否找到ID一样的商品
			for (let i = 0; i < len; i++) {
				let row = this.goodsList[i];
				if (row.id == goods.id) {
					//找到商品一样的商品
					this.goodsList[i].number++; //数量自增
					isFind = true; //找到一样的商品
					break; //跳出循环
				}
			}
			if (!isFind) {
				//没有找到一样的商品，新增一行到购物车商品列表头部
				this.goodsList[i].unshift(goods);
			}
		},
		//控制左滑删除效果-begin
		touchStart(index,event) {
			//多点触控不触发
			
			if (event.touches.length > 1) {
				this.isStop = true;
				return;
			}
			this.oldIndex = this.theIndex;
			this.theIndex = "";
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
			//结束禁止触发效果
			this.isStop = false;
		},
		//控制左滑删除效果-end
		// 商品详情
		goodDetail(id) {
			uni.navigateTo({
				url: '/pages/list/goode_details/goode_details?id='+id
			});
		},
		getCupon(){
			uni.navigateTo({
				url: '/pages/user/get_coupon/get_coupon'
			});
		}
	}
};
</script>
<style lang="scss">
page {
	background-color: #f2f2f2;
}

.btn_login_green {
	width: 120upx;
	height: 50upx;
	font-size: 24upx;
	background-color: rgba(0, 0, 0, 0);
	color: #999999;
	border-radius: 10upx;
	border: 2upx solid #999999;
	padding: 0;
	margin: 0;
	text-align: center;
	line-height: 44upx;
}

.goods-list {
	width: 700upx;
	margin: 25upx auto;
}

.goods {
	width: 700upx;
	margin-top: 25upx;
	background-color: #ffffff;
	border-radius: 10upx;
}

.goods-list .row {
	width: 700upx;
	height: 180upx;
	margin: 0 auto;
	border-radius: 10upx;
	// margin-bottom: 25upx;
	position: relative;
	overflow: hidden;
	z-index: 4;
}

.goods-list .row .menu {
	width: 150upx;
	height: 180upx;
	position: absolute;
	right: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: red;
	color: #fff;
	z-index: 2;
}

.goods-list .row .menu image {
	width: 35upx;
	height: 35upx;
}

.goods-list .row .carrier {
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
			transform: translateX(-150upx);
		}
	}

	@keyframes closeMenu {
		0% {
			transform: translateX(-150upx);
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
}

.goods-list .shop_top {
	width: 650upx;
	margin: 0upx 25upx;
	padding-top: 25upx;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.shop_top .shop_img {
	width: 70upx !important;
	height: 70upx !important;
	margin: 0upx 10upx 0upx 25upx;
}

.loading-more {
	align-items: center;
	justify-content: center;
	// padding-top: 10px;
	// padding-bottom: 10px;
	text-align: center;
}

.goods-list .shop_top .font-32 {
	width: 450upx;
	display: block;
	text-align: left;
}

.goods-list .row .carrier .checkbox-box {
	height: 35upx;
	margin-right: 25rpx;
}

.checkbox {
	width: 35upx;
	height: 35upx;
	border-radius: 100%;
	border: solid 2upx #d81e06;
	display: flex;
	justify-content: center;
	align-items: center;
}

.on {
	z-index: 1024;
	width: 39upx;
	height: 39upx;
	margin-left: -2upx;
	// border-radius: 100%;
	// background-color: #f66d3c;
	background-size: 39upx;
	background-repeat: no-repeat;
	background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAC+ElEQVRYR8WXy2vUUBTGv5OZpCIqRexDp8miYpOBurEuFLQKirR26wsKgv4F/gW2de9G16IbQbFrW0TEtjtfiKiT6dQuklatuJCWgk0mcySxHSeTTPMYYbLL5J7v+91zz9x7LqHFD7XYH7EBSkAbK9lBh2kIhOME6gI4xwyHiFYA/sqMVwBPO2b5ZT9gxZlcLICiLF1m4jsAdcYRZeC7wLihmtbjqPHbAix2ostqk+6DMBwlFPqdMSVtWNd6f2ClUXxDgPlcZqQiCA9AtC+V+VYQ808Gj+bN8rMwnVCAgpw9R6BpEMVaokhAZgbzeW2pPF0/NmBQ7EGOBfEjQO2RwokG8C+q2P3qEpZrwwIAuizOguhkIu24g5nnNNMebAig5zIXkMk8iauXapzjXNSWncmtWF8GdEX6AqA3lXBNEDOXiagEIB+itagZ1sEAQEERBwj0pllzgFeJcVY17de6LM6B6ES9JoOP5g37rft7NQMFRRonYKw5AF4VHJzqW7bfl7rR4YjiJxB1BAEwkTescR+ArojPATqTHqDOXJJmAWjhevxCM2zP618GZKlIhL50AEnMAWbM501LrQMQ14loZwhAIbthnXYkcZSB28HNKZm5q8/M63nT3lW/BKsA7Q4DUA3rMAFOURGvMsPdnjczl9z8rz6vaYa9pw5A0gF4aQl5JlXDuuKHwJqv4LZd84BiUTMsrz6qNRCjCH0Q5OBDtdqTmbsZCBZhsSd7kwVhIqIIqxDuOO+vltgcoEplTF0q3/JloLRfPOKI5G0OcSAWurE3jbmrnbF54NA3+50PwH3RZWkBhOo22QiEgc/EaAfhQBRtyPfwrdgDaPVh5EIUZHGGiHxHZopZhodEHcduVMsbEm8perJDEISp/zhztycbCusLG/Z8m33hw5Y0pVszd9vyjR3SPQJGUmbjqfTbup6qLa811BXpEsB3419MeEVgci8mj6LAY7fdNVezYRCONbqaZYinLKM881+vZlGzaOZ77Aw0Y7Jd7B9C42gwboolDgAAAABJRU5ErkJggg==);
}

.goods-list .row .carrier .goods-info {
	width: 650upx;
	display: flex;
	align-items: center;
	margin: 0upx 25upx;
	margin-top: 25upx;
}

.goods-info image {
	width: 130upx;
	height: 130upx;
}

.goods-info .info {
	width: 430upx;
	height: 130upx;
	margin: 0upx 0upx 0upx 25upx;
}

.goods-info .info .title {
	display: block;
	width: 430upx;
	overflow: hidden;
}

.goods-info .info .spec {
	display: block;
	width: 150upx;
	text-align: center;
	background-color: #f2f2f2;
	color: #999;
	height: 30upx;
	line-height: 30upx;
	border-radius: 15upx;
	margin: 10upx 0upx;
}

.goods-info .info .price-number {
	width: 430upx;
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
	width: 59upx;
	height: 47upx;
	text-align: center;
	line-height: 47upx;
	background-color: #f2f2f2;
	border-radius: 5upx;
}

.footer {
	width: 100%;
	background-color: #ffffff;
	height: 100upx;
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: fixed;
	bottom: 0upx;
	z-index: 5;
	// padding-bottom: 30upx;
}

.footer .checkbox-box {
	margin-left: 50upx;
}

.footer .text {
	margin-left: 25upx;
}

// .delBtn {
// 	border: solid 1upx #f06c7a;
// 	color: #f06c7a;
// 	padding: 0 30upx;
// 	height: 50upx;
// 	border-radius: 30upx;
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// }
.sum {
	width: 330upx;
	text-align: right;
	display: flex;
	align-items: center;
	justify-content: flex-end;
}

.btn {
	margin: 0upx 50upx 0upx 25upx;
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
