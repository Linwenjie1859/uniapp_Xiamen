<template>
	<view class="content">
		<view class="address_info" @tap="address">
			<image src="/static/address.png" mode=""></image>
			<view class="info">
				<view class="info_top">
					<text class="font-28 info_text">{{defaultAddress.real_name}}</text>
					<text class="font-28 info_text">{{defaultAddress.phone}}</text>
				</view>
				<text class="info_top font-28 text_limit_two">{{defaultAddress.province}}{{defaultAddress.city}}{{defaultAddress.district}}{{defaultAddress.detail}}</text>
				<text class="info_top font-24 gray text_limit">（收货不便时，可选择代收货或者门店自提服务）</text>
			</view>
			<image src="/static/right.png" mode=""></image>
		</view>
		<view class="order_list" v-for="(item,index) in cartInfo" :key="index">
			<view class="list_top">
				<text class="font-32">{{item.data[0].productInfo.store_name}}</text>
			</view>
			<view class="list_info" v-for="(ite,ind) in item.data" :key="ind">
				<image :src="ite.productInfo.image" mode=""></image>
				<view class="info_view">
					 <view class="info_view_cont">
						<text class="font-28 text_info text_limit_two">{{ite.productInfo.store_info}}</text>
						<text class="orange font-28">￥{{ite.productInfo.price}}</text>
					</view>
					<view class="info_view_cont">
						<text class="gray font-28">销量：{{ite.productInfo.sales}}{{ite.productInfo.unit_name}}</text>
						<text class="gray text_right  font-28">×{{ite.cart_num}}</text>
					</view>
				</view>
			</view>
			<view class="consumption_info font-28">
				<view class="info_list" v-if="date">
					<text>出行日期</text>
					<text class="text_right gray">{{date}}</text>
				</view>
				<view class="info_list" v-if="open_address.length>0">
					<text>游玩地点</text>
					<text class="text_right gray">{{open_address}}</text>
				</view>
				<view class="info_list">
					<text>已优惠</text>
					<text class="text_right gray">￥{{currentCouponPrice}}</text>
				</view>
				<view class="info_list">
					<text>配送方式</text>
					<text class="text_right gray">免邮快递</text>
				</view>
				<view class="info_list">
					<text>优惠券</text>
					<picker class="text_right gray"  mode="selector" @change="bindPickerChange"  :value="couponIndex" :range="array" range-key="coupon_title">
						<view class="uni-input">{{array[couponIndex].coupon_title}}></view>
					</picker>
				</view>
				<view class="info_list">
					<text>买家留言</text>
					<input class="text_right gray" placeholder="选填" v-model="createOrder.mark" ></input>
				</view>
			</view>
			<view class="btn">
				<text class="text_right  font-28">共{{sumNum}}件商品 合计</text><text class="orange font-32">￥{{sumPrice}}</text>
			</view>
		</view>
		<view style="height: 120rpx;">
			
		</view>
		<view class="order_btn" >
			<view class="btn">
				<text class="font-28">合计</text><text class="orange font-32">￥{{sumPrice}}</text>
				<button class="btn_pur_green" @tap="settlement">结算</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				open_address:[],
				date:'',
				array: [
					{
						coupon_title:'未选择',
						coupon_price:0,
					},
				],
				currentCouponPrice:0,	//当前优惠的金额
				couponIndex: 0,	//当前选中的优惠券下标
				/******************/
				
				listId:'',	//要结算的订单的id编号集
				cartInfo:[],	//根据id编号集查询到的信息
				defaultAddress:{
					city: "",
					detail: "",
					district: "",
					id: "",
					is_default: "",
					phone: "",
					province: "",
					real_name: ""
				},	//默认收货地址
				createOrder:{
					addressId:'',
					couponId:'',
					userIntegral:'',
					mark:''
				},
				sumPrice:0,
				orderKey:"",
				sumNum:0,	//商品数量
			}
		},
		onLoad(e) {
			this.listId=e.listId;
			this.getAddressList();
			this.getOrderInfo();
			this.getUserChooseTime();
		},
		methods: {
			getUserChooseTime(){
				let pages = getCurrentPages();  //获取所有页面栈实例列表
				let prevPage = pages[ pages.length - 2 ];  //上一页页面实例
				this.date=prevPage.$vm.date;
				this.open_address=prevPage.$vm.goodsInfo.storeInfo.open_address;
				console.log(prevPage.$vm);
			},
		
			// 处理接口数据将价钱转成浮点型
			dealData(data){
				for(let i=0;i<data.length;i++){
					data[i]['coupon_price']=parseFloat(data[i].coupon_price);
				}
				return data;
			},
			//获取可以使用的优惠券
			getCanUseCoupon(totalPrice){
				let that=this;
				that.baseGet(that.U({c:'coupons_api',a:'get_use_coupon_order',q:{
					totalPrice:totalPrice
				}}),
				function(res){
					that.array=[...that.array,...that.dealData(res.data)];
				},
				function(res){
					console.log(res);
				},true
				)
			},
			//获取默认收货地址
			getAddressList(){
				let that=this;
				that.basePost(
					that.U({ c: 'user_api', a: 'user_default_address'}),
					{},
					function(res) {
						that.defaultAddress=res.data;
					},
					function(res) {
						console.log(res);
					},
				);
			},
			//整理接口返回的数据
			SortData(data){
				let map={};	//存在mer_id
				let array=[];	//所有的数据
				for(var i=0;i<data.length;i++){
					var temp=data[i];
					if(!map[temp.mer_id]){
						array.push({
							mer_id:temp.mer_id,
							data:[temp],
						})
						map[temp.mer_id]="Occupies a position";
					}else{
						for(var j = 0; j < array.length; j++){
							var existData = array[j];
							if(existData.mer_id == temp.mer_id){
								existData.data.push(temp);
								break;
							}
						}
					}
				}
				return array;
			},
			//获取订单信息
			getOrderInfo(){
				let that = this;
				that.basePost(
					that.U({ c: 'auth_api', a: 'confirm_order' }),
					{
						cartId:that.listId
					},
					function(res) { 
						that.cartInfo = that.SortData(res.data.cartInfo);
						for(let j=0;j<that.cartInfo.length;j++){
							that.sumNum+=that.cartInfo[j].data.length;
							for (let i=0;i<that.cartInfo[j].data.length;i++) {
								that.sumPrice+=that.cartInfo[j].data[i].cart_num*that.cartInfo[j].data[i].productInfo.price;
							}
						}
						that.orderKey=res.data.orderKey;
						that.getCanUseCoupon(that.sumPrice);
					},
					function(res) {
						console.log(res);
					}
				);
			},
			// picker
			bindPickerChange: function(e) {
				this.couponIndex = e.detail.value;
				this.sumPrice+=this.currentCouponPrice;
				this.sumPrice-=this.array[e.detail.value].coupon_price;
				this.currentCouponPrice=this.array[e.detail.value].coupon_price;
			},
			// 选择地址
			address(){
				uni.navigateTo({
					url:"/pages/user/admin_address/admin_address?clickFlag=1"
				}) 
			},
			// 结算
			settlement(){
				//创建订单编号
				let that = this;
				that.basePost(
					that.U({ c: 'auth_api', a: 'create_order'}),
					{
						key:that.orderKey,
						addressId:that.defaultAddress.id,
						couponId:that.array[that.couponIndex].id,
						userIntegral:that.createOrder.userIntegral,
						mark:that.createOrder.mark,
						type:that.open_address?2:1,
						date:that.date,
						open_address:that.open_address?that.open_address[0]+","+that.open_address[1]:''
					},
					function(res) { 
						let orderInfo={
							order_id:res.data.result.orderId,
							total_price:that.sumPrice
						}
						uni.redirectTo({
							url:"/pages/user/confirm_payment/confirm_payment?orderInfo="+JSON.stringify(orderInfo)
						})
					},  
					function(res) {
						console.log(res);
					}
				);
			},
		}
	}
</script>

<style>
	page{
		background-color: #F2F2F2;
	}
	.content{
		text-align: center;
	}
	.address_info{
		width: 700upx;
		/* height: 170upx; */
		margin: 25upx auto;
		background-color: #FFFFFF;
		border-radius: 10upx;
		display: flex;
		align-items: center;
	}
	.address_info image{
		width: 40upx;
		height: 40upx;
		margin: 0upx 20upx 0upx 25upx;
	}
	.address_info .info_top{
		display: block;
		width: 540upx;
		text-align:left;
		margin-bottom: 15upx;
	}
	.address_info .info_top text{
		margin-right: 25upx;
	}
	.order_list {
		width: 700upx;
		margin: 0 auto;
		background-color: #FFFFFF;
		border-radius: 10upx;
		padding-bottom: 25upx;
		margin-bottom: 25upx;
	}
	
	.order_list .list_top {
		width: 650upx;
		height: 90upx;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom: 1upx solid #e5e5e5;
	}
	
	.order_list .list_info {
		width: 650upx;
		margin: 20upx auto;
		display: flex;
		align-content: center;
		padding-bottom: 20upx;
		border-bottom: 1upx solid #E5E5E5;
	}
	
	.order_list .list_info image {
		width: 150upx;
		height: 150upx;
		margin-right: 20upx;
	}
	
		.order_list .list_info .info_view .text_info {
		text-align: left;
		width: 370upx;
	}
	
	.order_list .list_info .info_view .gray {
		display: inline-block;
		text-align: left;
		width: 240upx;
	}
	.order_list .btn{
		width: 350upx;
		text-align: right;
		display: flex;
		align-items: center;
		justify-content:flex-end;
		margin-left: 325upx;
	}
	.order_list .list_info .info_view .info_view_cont{
		width: 480upx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin: 10upx 0upx;
	}
	.order_list button{
		margin-left: 25upx;
	}
	.consumption_info{
		width: 650upx;
		margin: 0 auto;
		margin-bottom: 20upx;
	}
	.consumption_info .info_list{
		width: 650upx;
		height: 70upx;
		display: flex;
		align-items: center;
	}
		.text_limit_two{
		height: 40upx;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
	.consumption_info text{
		display: inline-block;
		text-align: left;
		width: 325upx;
		margin: 5upx 0upx;
	}
	.consumption_info input{
		display: inline-block;
		text-align: left;
		width: 325upx;
	}
	.consumption_info picker{
		display: inline-block;
		text-align: left;
		width: 325upx;
	}
	.order_info{
		width: 700upx;
		margin: 0 auto;
		background-color: #FFFFFF;
		border-radius: 10upx;
		padding: 20upx 0upx;
	}
	.order_info text{
		text-align: left;
		display: block;
		width: 650upx;
		margin: 10upx auto;
	}
	.order_btn{
		width: 100%;
		background-color: #FFFFFF;
		height: 120upx;
		line-height: 120upx;
		display: flex;
		align-items: center;
		position: fixed;
		bottom: 0upx;
	}
	.order_btn .btn{
		text-align: right;
		display: flex;
		align-items: center;
		justify-content:flex-end;
		margin-left: 350upx;
	}
	.order_btn button{
		margin-left: 25upx;
	}
</style>
