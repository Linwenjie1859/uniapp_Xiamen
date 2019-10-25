<template>
	<view class="content">
		<view class="header">
			<image class="black" src="/static/left_white.png" mode="" @tap="back" v-if="showBack"></image>
			<view class="input_view"><input class="font-28" type="text" v-model.trim="keyWord" placeholder="搜索商品" /></view>
			<image class="search" src="/static/search.png" mode="" @click="searchGoods"></image>
		</view>
		<view class="history">
			<view class="title">
				<text class="font-32">热门搜索</text>
			</view>
			<view class="history_list font-28 gray">
				<text @tap="toList" :data-key="item.title" v-for="(item, index) in hotSearchList" :key="index">{{ item.title }}</text>
			</view>
		</view>
		<view class="history">
			<view class="title">
				<text class="font-32">历史搜索</text>
				<image src="/static/del.png" mode="" @click="historyClear"></image>
			</view>
			<view class="history_list font-28 gray">
				<text @tap="toList" :data-key="item" v-for="(item, index) in historyList" :key="index">{{ item }}</text>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			showBack: true,
			hotSearchList: [],
			historyList: [],
			keyWord: ''
		};
	},
	onLoad() {
		this.getHotSearchList();
		this.getHistorySearch();
	},
	methods: {
		historyClear() {
			let that = this;
			if(that.historyList.length==0){
				that.Tips({ title: "已经没有历史记录啦！"});
				return;
			}
			uni.showModal({
				title: '提示',
				content: '确定删除全部历史记录',
				success: function(res) {
					if (res.confirm) {
						that.historyList = []
						uni.clearStorage();
					} else if (res.cancel) {
						return;
					}
				}
			});
		},
		getHotSearchList() {
			var that = this;
			that.baseGet(
				that.U({ c: 'store_api', a: 'get_routine_hot_search' }),
				function(res) {
					that.hotSearchList = res.data;
				},
				function(res) {
					console.log(res);
				},
				true
			);
		},
		getHistorySearch() {
			let that = this;
			uni.getStorage({
				key: 'keyWord',
				success: res => {
					that.historyList = res.data.reverse();
				}
			});
		},
		//搜索并且添加历史搜索记录
		searchGoods() {
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
			//隐藏搜索键盘
			// #ifdef APP-PLUS
				plus.key.hideSoftKeybord();
			// #endif
			uni.navigateTo({
				url: '/pages/list/search_list/search_list?keyWord=' + this.keyWord
			});
		},
		// 点击关键字跳转
		toList(e) {
			uni.navigateTo({
				url: '/pages/list/search_list/search_list?keyWord='+e.currentTarget.dataset.key
			});
		},
		//返回上一页
		back() {
			uni.navigateBack();
		}
	}
};
</script>

<style>
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
/* 历史搜索 */
.history {
	margin-top: 170upx;
	width: 100%;
}
.history .title {
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 700upx;
	height: 100upx;
	margin: 0 auto;
}
.history .title image {
	width: 35upx;
	height: 35upx;
}
.history .history_list {
	width: 700upx;
	margin: 0 auto;
}
.history .history_list text {
	display: inline-block;
	padding: 0upx 20upx;
	margin-right: 25upx;
	margin-bottom: 25upx;
	border: 1upx solid #e5e5e5;
	border-radius: 25upx;
}
</style>
