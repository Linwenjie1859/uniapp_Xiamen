<template>
	<view class="content">
		<view class="scenery_list" v-for="(item, index) in articleList" :key="index">
			<view class="flex align-center justify-between margin-bottom-xs solid-top solid-bottom"  @click="getList" :data-id="item.id">
				<view class="flex align-center">
					<text class="cuIcon-titles text-blue light"></text>
					<text class="text-black margin-tb-sm">{{item.title}}</text>
				</view>
				<text class="cuIcon-right margin-tb-sm margin-right-xs"></text>
			</view>
			<image class="scenery_pic" :src="item.image" mode=""></image>
			<view class="list_view">
				<view class="scenery" @tap="detail" :data-id="article.id" v-for="(article, index) in item.list" :key="index">
					<image class="scenery_img radius" :src="article.image_input[0]" mode=""></image>
					<view class="info_list">
						<text class="text-lg text_limit text-black">{{article.title}}</text>
						<text class="text-df text_info text-gray">{{article.synopsis}}</text>
						<view class="see_list">
							<text class="font-24 gray">{{article.add_time}}</text>
							<view class="num">
								<image src="/static/see.png" mode=""></image>
								<text class="font-24 gray">{{article.visit}}</text>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				articleList: [],
			}
		},
		onShow() {
			this.getArticleIndex()
		},
		methods: {
			getArticleIndex: function() {
				var that = this;
				that.baseGet(
					that.U({ c: 'article_api', a: 'get_article_index' }),
					function(res) {
						console.log((res.data));
						that.setData({ articleList: res.data });
					},
					function(res) {
						console.log(res);
					},
					true
				);
			},
			detail(e) {
				var id = e.currentTarget.dataset.id;
				uni.navigateTo({
					url: "/pages/list/list_detail/list_detail?id="+id,
				})
			},
			getList(e) {
				var id = e.currentTarget.dataset.id;
				uni.navigateTo({
					url: "/pages/list/more_list/more_list?id="+id,
				})
			},
		}
	}
</script>

<style>
	.content{
		text-align: center;
	}
	.scenery_list {
		margin: 0 auto;
	}
	.scenery_pic{
		width: 750upx!important;
		height: 300upx!important;
	}
	.scenery_list .title {
		display: block;
		width: 700upx;
		text-align: center;
	}

	.scenery_list .list_view {
		width: 700upx;
		background-color: #FFFFFF;
		border-radius: 10upx;
		margin: 0 auto;
		/* margin-top: 25upx; */
	}

	.scenery_list .scenery {
		width: 700upx;
		margin: 0 auto;
		display: flex;
		align-items: center;
		border-bottom: 1upx solid #E5E5E5;
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
	.info_list text{
		text-align: left!important;
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
	.more{
		display: block;
		width: 700upx;
		text-align: center;
		margin: 15upx 0upx 35upx 0upx;
	}
</style>
