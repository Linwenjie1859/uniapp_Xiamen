<template>
	<view class="content">
		<view class="address_info" v-for="(item,index) in addressList" :key="index" @tap="chooseAdd(item)">
			<view class="info">
				<text class="font-32 info_text">{{item.real_name}}</text>
				<text class="font-32 info_text text_right">{{item.phone}}</text>
				<text class="font-28 gray text_limit">{{item.province}}{{item.city}}{{item.district}}{{item.detail}}</text>
			</view>
			<view class="operation">
				<checkbox-group class="font-28 orange" @click="changeDefault(index,item.id)">
					<label>
						<checkbox value="cb" :checked="index==currentDefault?true:false" color="#f66d3c" style="transform:scale(0.7)" />设为默认
					</label>
				</checkbox-group>

				<view class="operation_list">
					<view class="edit" @tap="editAddress(item.id)">
						<image src="/static/edit.png" mode=""></image>
						<text class="font-28 gray">编辑</text>
					</view>
					<view class="edit" @tap="deleteAddress(item.id,index)">
						<image src="/static/del.png" mode=""></image>
						<text class="font-28 gray">删除</text>
					</view>
				</view>
			</view>
		</view>
		<view class="clear" style="height: 100upx;"></view>
		<button class="btn_green" @tap="addAddress">添加新地址</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				currentDefault:0,
				addressList:[],
				clickFlag:0,
			}
		},
		onShow() {
			this.getAddressList();
		},
		onLoad(e) {
			this.clickFlag=e.clickFlag;
		},
		methods: {
			//点击选中收获地址、不修改默认地址
			chooseAdd(info){
				let that=this;
				if(!that.clickFlag)return;
				that.Tips({title:'修改收获地址成功'});
				let pages = getCurrentPages();  //获取所有页面栈实例列表
				let nowPage = pages[ pages.length - 1];  //当前页页面实例
				let prevPage = pages[ pages.length - 2 ];  //上一页页面实例
				prevPage.$vm.defaultAddress=info;
				uni.navigateBack({  //uni.navigateTo跳转的返回，默认1为返回上一级
					delta: 1
				});
			},
			//改变默认
			changeDefault(index,id){
				console.log("修改");
				let that=this;
				that.currentDefault=index;
				that.basePost(
					that.U({ c: 'user_api', a: 'set_user_default_address'}),
					{addressId:id},
					function(res) {
						console.log(res);
					},
					function(res) {
						console.log(res);
					},
				);
			},
			//添加收货地址
			addAddress(){
				uni.navigateTo({
					url: '/pages/user/add_address/add_address'
				});
			},
			//获取用户的所有收获地址
			getAddressList(){
				let that=this;
				that.basePost(
					that.U({ c: 'user_api', a: 'user_address_list'}),
					{},
					function(res) {
						that.addressList=res.data;
						//循环遍历得到默认地址位置
						for(let i=0;i<that.addressList.length;i++){
							if(that.addressList[i].is_default==1){
								that.currentDefault=i;
								break;
							}
						}
						console.log(that.currentDefault);
					},
					function(res) {
						console.log(res);
					},
				);
			},
			//编辑收货地址
			editAddress(id) {
				uni.navigateTo({
					url: '/pages/user/add_address/add_address?id='+id
				});
			},
			//删除收货地址
			deleteAddress(id,index){
				let that=this;
				console.log(id,index);
				uni.showModal({
					title: '提示',
					content: '确定删除该收货地址？',
					success: function(res) {
						if (res.confirm) {
							that.basePost(
								that.U({ c: 'user_api', a: 'remove_user_address'}),
								{addressId:id},
								function(res) {
									that.addressList.splice(index,1);
									that.Tips({title:"删除成功！"});
								},
								function(res) {
									console.log(res);
								},
							);
						} else if (res.cancel) {
							return;
						}
					}
				});
			}
		}
	}
</script>

<style>
	page {
		background-color: #F2F2F2;
	}

	.content {
		text-align: center;
	}

	.address_info {
		width: 700upx;
		height: 210upx;
		margin: 25upx auto;
		background-color: #FFFFFF;
		border-radius: 10upx;
	}

	.info {
		width: 650upx;
		height: 130upx;
		margin: 0 auto;
		padding-top: 10upx;
		border-bottom: 1upx solid #E5E5E5;
	}

	.address_info text {
		display: block;
		width: 650upx;
		height: 60upx;
		line-height: 75upx;
		margin: 0 auto;
		text-align: left;
	}

	.address_info .info_text {
		width: 325upx;
		display: inline-block;
	}

	.operation {
		width: 650upx;
		height: 70upx;
		line-height: 70upx;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.operation_list {
		width: 250upx;
		display: flex;
		align-items: center;
	}

	.edit {
		width: 100upx;
		display: flex;
		align-items: center;
		margin-left: 25upx;
	}

	.edit image {
		width: 35upx;
		height: 35upx;
	}

	.edit text {
		width: 60upx;
		height: 35upx;
		line-height: 35upx;
	}

	.btn_green {
		position: fixed;
		bottom: 25upx;
		left: 50%;
		margin-left: -300upx;
	}
</style>
