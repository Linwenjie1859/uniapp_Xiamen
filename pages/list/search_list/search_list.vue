<template>
	<view class="content">
		<view class="header">
			<image class="black" src="/static/left_white.png" mode="" @tap="back" v-if="showBack"></image>
			<view class="input_view"><input class="font-28" type="text" v-model="keyWord" placeholder="搜索商品" /></view>
			<image class="search" src="/static/search.png" mode="" @click="setSearchHistory"></image>
		</view>
		
		<view class="search_list"> 
			<view class="home_info">
				<view class="goods_list">
					<view class="list_view" @tap="detail(item.id)" v-for="(item, index) in goodsList" :key="index">
						<image :src="item.image" mode=""></image>
						<text class="font-28 text_limit">{{ item.store_name }}</text>
						<view class="list_info">
							<text class="font-24 orange">￥{{ item.price }}</text>
							<text class="font-24">月售{{ item.sales }}件</text>
						</view>
					</view>
				</view>
				<text class="no_more font-28 gray" v-if="loadMoreFlag">
					{{loadMoreText}}
				</text>
			</view>
			<view class="no_data" v-if="noData">
				<image src="/static/no_data.png" mode=""></image>
				<text class="font-28 gray">没有找到相关商品~</text>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			showBack: true,
			keyWord: '',
			storeId:"",
			goodsList: [],
			historyList: [],
			noData: false,
			// 上拉加载参数
			pageSize: 6,
			currentPage: 1,
			// 上拉加载参数
			loadMoreText: '加载更多...',
			loadMoreFlag:false,
			
		};
	},
	onReachBottom() {
		this.loadMoreFlag=true;
		setTimeout(() => {
			this.getSearchGoods();
		}, 500);
	},
	onLoad(e) {
		console.log(e);
		this.keyWord = e.keyWord;
		this.storeId=e.storeId;
		this.getSearchGoods();
		this.getHistorySearch();
	},
	methods: {
		//获取历史搜索记录
		getHistorySearch() {
			let that = this;
			uni.getStorage({
				key: 'keyWord',
				success: res => {
					that.historyList = res.data.reverse();
				}
			});
		},
		//添加历史搜索记录
		setSearchHistory() {
			let that = this;
			if (that.keyWord == '') {
				that.Tips({ title: '请输入关键字' });
				return;
			}
			//判断关键字是否存在历史记录之中
			if (that.historyList.indexOf(that.keyWord) == -1) {
				that.historyList.reverse();
				that.historyList.push(that.keyWord);
				uni.setStorage({
					key: 'keyWord',
					data: that.historyList
				});
				that.historyList.reverse();
			}
			that.goodsList = [];
			that.currentPage=1;
			console.log(that.keyWord);
			that.getSearchGoods();
		},
		//获取搜索的商品
		getSearchGoods() {
			let that = this;
			console.log("搜索");
			that.baseGet(
				that.U({
					c: 'store_api',
					a: 'get_product_list',
					q: {
						cid: '',
						mid:that.storeId,
						keyword: that.keyWord,
						priceOrder: '',
						salesOrder: '',
						news: '',
						page: that.currentPage,
						limit: that.pageSize
					}
				}),
				function(res) {
					that.goodsList = that.goodsList.concat(res.data);
					console.log(that.goodsList);
					that.currentPage++;
					if(res.data.length==0){
						that.loadMoreText="没有更多数据了！"
					}
					if (that.goodsList.length == 0) {
						that.noData = true;
					} else {
						that.noData = false;
					}
					setTimeout(()=>{
						that.loadMoreFlag=false;
					},1000);
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
		detail(id) {
			uni.navigateTo({
				url: '/pages/list/goode_details/goode_details?id='+id
			});
		}
	}
};
</script>

<style scoped>
	
page {
	background-color: #f2f2f2;
}

/* 头部 */
.header {
	background-color: #51c77d;
	width: 100%;
	height: 170upx;
	position: fixed;
	top: 0;
	z-index: 10000;
}

.header .black {
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

.input_view input {
	width: 580upx;
	text-align: center;
}

.search_list {
	margin-top: 195upx;
}

.home_info {
	width: 700upx;
	margin: 25upx auto;
	background-color: #ffffff;
	border-radius: 10upx;
	padding: 25upx 0upx;
}

.home_info image {
	width: 650upx;
	height: 350upx;
	border-radius: 10upx;
}

.home_info .text_info {
	display: block;
	width: 650upx;
	margin: 0 auto;
	text-align: left;
}

.title {
	width: 650upx;
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 25upx;
}

.goods_list {
	width: 650upx;
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-wrap: wrap;
	margin-bottom: 25upx;
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

.no_data {
	width: 700upx;
	margin: 0 auto;
	text-align: center;
	margin-top: 500upx;
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
.no_more {
	width: 700upx;
	display: block;
	margin: 0upx auto;
	text-align: center;
}
</style>
