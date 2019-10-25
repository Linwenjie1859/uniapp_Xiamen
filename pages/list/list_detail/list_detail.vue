<template>
	<view class="content">
		<image :src="article.image_input[0]" mode=""></image>
		<text class="font-32 text_center">{{article.title}}</text>
		<text class="font-28">{{article.synopsis}}</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				article:{},
			}
		},
		methods: {
			getArticle(id) {
				
				var that = this;
				that.baseGet(
					that.U({ c: 'article_api', a: `visit`,q: {id: id} }),
					function(res) {
						that.article=res.data;
					},
					function(res) {
						console.log(res);
					},
					true
				);
			},
		},
		onLoad(e) {
			this.getArticle(e.id)
		}
	}
</script>

<style>
	.content{
		text-align: center;
	}
	image{
		width: 700upx;
		height: 380upx;
		margin: 25upx auto;
	}
	text{
		display: block;
		width: 700upx;
		margin: 0 auto;
		text-align: left;
		margin-bottom: 20upx;
	}
</style>
