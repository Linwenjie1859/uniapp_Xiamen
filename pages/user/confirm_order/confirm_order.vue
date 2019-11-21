<template>
	<view>
		<!-- 收货地址信息 -->
		<view class="margin-sm padding bg-white has-radius">
			<view class="flex align-center">
				<view class="bg-gradual-orange round has-padding-sm"><text class="cuIcon-locationfill text-white " style="font-size: 32rpx;"></text></view>
				<view class="flex flex-direction flex-sub margin-left-sm ">
					<view class="flex align-center">
						<text class="text-df margin-right-sm">张媛媛</text>
						<text class="text-sm self-end text-grey">13075976237</text>
					</view>
					<view class="flex justify-between margin-top-sm">
						<text class="text-black text-sm">福建省福州市马尾区阳光学院</text>
						<text class="cuIcon-right text-grey"></text>
					</view>
					<text class="margin-top-sm text-orange text-xs">收货不便时，可选择免费暂存服务</text>
				</view>
			</view>
		</view>
		<!-- 收货地址信息 end-->
	
		<!-- 商品确认信息 -->
		<view class="margin-sm padding bg-white has-radius">
			<view class="flex flex-direction">
				<!-- 店铺名称 -->
				<view class="flex align-center">
					<text class="cuIcon-taoxiaopu text-red "></text>
					<text class="text-sm text-black margin-left-xs text-bold">英雄联盟官方旗舰店</text>
				</view>
				<!-- 店铺名称 end-->
				<!-- 商品信息 -->
				<view class="flex justify-between margin-top-sm">
					<image class="radius" src="http://image4.xyzs.com/upload/cc/c0/922/20150505/143080319236335_0.jpg" mode="" style="width: 160rpx; height: 160rpx;"></image>
					<view class="flex flex-direction margin-bottom-xs">
						<text class="text-black text-sm">2019年首款蔚限定皮肤，中秋官网出售</text>
						<view class="flex margin-top-xs">
							<view class="bg-gray light padding-xs radius"><text class="text-xs">蔚限定皮肤:虎痴之拳,2019中秋首款</text></view>
						</view>
					</view>
					<view class="flex flex-direction margin-bottom-sm">
						<text class="text-price text-black text-xs">138</text>
						<view class="flex justify-end"><text class="text-grey text-xs margin-top-xs">x1</text></view>
					</view>
				</view>
				<!-- 商品信息 end-->
				<!-- 购买提示信息 -->
				<view class="flex justify-end margin-top-sm">
					<view class="bg-orange light margin-right-xs radius padding-lr-xs"><text class="text-orange text-xs">皮肤商品出售一概不能进行退款</text></view>
					<view class="bg-orange light radius  padding-lr-xs"><text class="text-orange text-xs">Vip专享9.5折</text></view>
				</view>
				<!-- 购买提示信息 end-->
	
				<view class="flex margin-top align-center text-sm">
					<view class="flex flex-sub justify-end margin-right-sm"><text class="text-black">服务类型</text></view>
					<view class="flex flex-treble justify-between text-grey align-center">
						<text>2小时内完成皮肤充值</text>
						<text class="cuIcon-right"></text>
					</view>
				</view>
				
				<view class="flex margin-top align-center text-sm">
					<view class="flex flex-sub justify-end margin-right-sm"><text class="text-black">专享折扣</text></view>
					<view class="flex flex-treble justify-end text-black align-center">
						<text>省6.90元；88vip专享9.5折</text>
						<text class="cuIcon-right"></text>
					</view>
				</view>
				
				<view class="flex margin-top align-center text-sm">
					<view class="flex flex-sub justify-end margin-right-sm"><text class="text-black">配送方式</text></view>
					<view class="flex flex-treble justify-between text-grey align-center">
						<text>网上充值</text>
						<view class="flex">
							<text>其他类型</text>
							<text class="cuIcon-right"></text>
						</view>
					</view>
				</view>
				
				<view class="flex margin-top align-center text-sm">
					<view class="flex flex-sub justify-end margin-right-sm"><text class="text-black">店铺优惠</text></view>
					<view class="flex flex-treble justify-between text-grey align-center">
						<text>省69元；小型钜惠活动</text>
						<text class="cuIcon-right"></text>
					</view>
				</view>
				
				<view class="flex margin-top align-center text-sm">
					<view class="flex flex-sub justify-end margin-right-sm"><text class="text-black">订单备注</text></view>
					<view class="flex flex-treble justify-start text-grey align-center">
						<input type="text" value="" placeholder="选填,请先和卖家进行商量"/>
					</view>
				</view>
				
				<view class="flex margin-top align-center justify-end text-sm">
					<text class="text-grey margin-right-xs">共1件</text>
					<text class="text-black">小计：</text>
					<text class="text-price text-orange">62.10</text>
				</view>
			</view>
		</view>
		<!-- 商品确认信息 end-->
		<view class="flex justify-end bg-white cu-bar foot align-center padding-lr">
			<view class="flex align-center">
				<text class="text-grey">共1件，</text>
				<view class="margin-right-sm text-black">
					合计
					<text class="text-price text-red text-df margin-left-xs">599</text>
				</view>
				<view class="bg-gradual-green round  cu-btn">提交订单</view>
			</view>
		</view>
	</view>
	<!-- <view>
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
				<text class="font-32 text_limit">{{item.data[0].productInfo.store_name}}</text>
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
	</view> -->
</template>

<script>
	export default {
		data() {
			return {
				chooseAddressFlag:false,
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
			//选择地址之后，跳转回确认订单页面，时获取刚选地址的信息
			getUserChooseTime(){
				if(this.chooseAddressFlag){
					let pages = getCurrentPages();  //获取所有页面栈实例列表
					let prevPage = pages[ pages.length - 2 ];  //上一页页面实例
					this.date=prevPage.$vm.date;
					this.open_address=prevPage.$vm.goodsInfo.storeInfo.open_address;
				}
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
				this.chooseAddressFlag=true;
				uni.navigateTo({
					url:"/pages/user/admin_address/admin_address?clickFlag=1"
				}) 
			},
			// 结算
			settlement(){
				//创建订单编号
				let that = this;
				let pages = getCurrentPages();  //获取所有页面栈实例列表
				let prevPage = pages[ pages.length - 2 ];  //上一页页面实例
				
				that.basePost(
					that.U({ c: 'auth_api', a: 'create_order'}),
					{
						mer_id:prevPage.$vm.goodsInfo.mer_id,
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

<style scoped>
.has-radius {
	border-radius: 18rpx;
}
.has-padding-sm {
	padding: 7rpx 11rpx;
}
</style>
