<template>
	<view class="content">
		<view class="scenery_list">
			<view class="list_view">
				<view class="scenery" @tap="detail" :data-id="article.id" v-for="(article, index) in list" :key="index">
					<image class="scenery_img radius" :src="article.image_input[0]" mode=""></image>
					<view class="info_list">
						<text class="text-lg text_limit text-black">{{article.title}}</text>
						<text class="text-df text_info text-gray">{{article.synopsis}}</text>
						<view class="see_list">
							<text class="font-24 gray">{{ article.add_time }}</text>
							<view class="num">
								<image src="/static/see.png" mode=""></image>
								<text class="font-24 gray">{{ article.visit }}</text>
							</view>
						</view>
					</view>
				</view>
				<uni-load-more :status="loadingMore" v-if="loadingMoreFlag"/>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			loadingMoreFlag: true, //上滑加载开关
			loadingMore:'loading',	//上滑加载更多的状态
			/********/
			articleId:'',
			pageSize: 6,
			currentPage: 1,
			list: [],
		};
	},
	onReachBottom() {
		if(this.loadingMore === 'loading'){	//防止重复加载
			return ;
		}
		this.loadingMoreFlag = true;
		this.loadingMore='loading';	//每次上滑都要从新设置status
		setTimeout(()=>{
			this.getArticleList(this.articleId);	//让加载图标旋转0.8s后才请求
		},600) 
	},
	onPullDownRefresh() {
		//下拉刷新页面将之前的数据初始化
		this.list = [];
		this.currentPage = 1;
		this.getArticleList(this.articleId);
	},
	onLoad(e) {
		//当页面加载的时候调用接口获取内容
		this.articleId=e.id;
		setTimeout(()=>{
			this.getArticleList(this.articleId);	
		},600);
	},
	methods: {
		//查看文章的详情
		detail(e) {
			var id = e.currentTarget.dataset.id;
			uni.navigateTo({
				url: '/pages/list/list_detail/list_detail?id=' + id
			});
		},
		//0.8s后隐藏加载提示的信息
		closeLoadingMoreFlag() {
			setTimeout(()=> {
				this.loadingMoreFlag = false;
			}, 800);
		},
		//初始化数据
		getArticleList(cid) {
			var that = this;
			that.baseGet(
				that.U({
					c: 'article_api',
					a: `get_cid_article`,
					q: {
						cid: cid,
						first: that.currentPage,
						limit: that.pageSize
					}
				}),
				function(res) {
					uni.stopPullDownRefresh();		//当请求成功之后将下拉刷新关闭
					if (res.data.length == 0) {
						that.loadingMore="noMore";
						that.closeLoadingMoreFlag();	//0.8后将状态隐藏
						return ;
					}
					
					that.currentPage++;
					that.list=[...that.list,...res.data];
					that.loadingMore="more";
				},
				function(res) {
					console.log(res);
				},
				true
			);
		}
	}
	
};
</script>

<style scoped>
.content {
	text-align: center;
}
.scenery_list {
	width: 700upx;
	margin: 0upx auto;
}
.scenery_pic {
	width: 700upx !important;
	height: 250upx !important;
	margin: 0 auto;
	border-radius: 10upx;
}
.scenery_list .title {
	display: block;
	width: 700upx;
	text-align: center;
}

.scenery_list .list_view {
	width: 700upx;
	background-color: #ffffff;
	border-radius: 10upx;
	/* margin-top: 25upx; */
}

.scenery_list .scenery {
	width: 700upx;
	margin: 0 auto;
	display: flex;
	align-items: center;
	border-bottom: 1upx solid #e5e5e5;
}

.scenery_list .scenery_img {
	width: 240upx !important;
	height: 180upx !important;
	margin-right: 25upx;
}

.scenery_list .info_list {
	width: 430upx;
	height: 180upx;
	margin: 25upx 0upx;
}
.info_list text {
	text-align: left !important;
}
.info_list .text_limit {
	width: 430upx;
	display: block;
	margin-top: -5upx;
	margin-bottom: 10upx;
}

.info_list .text_info {
	width: 430upx;
	display: block;
	text-align: left;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	overflow: hidden;
}

.see_list {
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 20upx;
}

.see_list .num {
	display: flex;
	align-items: center;
}
.see_list .num image {
	width: 30upx;
	height: 22upx;
	margin-right: 10upx;
}
.more {
	display: block;
	width: 700upx;
	text-align: center;
	margin: 15upx 0upx 35upx 0upx;
}
</style>
