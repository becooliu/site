<template>
<el-container style="height: 500px; border: 1px solid #eee">
<el-header style="text-align: right; font-size: 12px; background-color: #545c64">
	<el-menu
	router 
	:default-active="$route.path"
	class="el-menu-demo"
	mode="horizontal"
	@select="handleSelect"
	background-color="#545c64"
	text-color="#fff"
	active-text-color="#ffd04b"
	>
		<el-menu-item index="1">处理中心</el-menu-item>
		<el-submenu index="2">
			<template slot="title">我的工作台</template>
			<el-menu-item index="2-1">选项1</el-menu-item>
			<el-menu-item index="2-2">选项2</el-menu-item>
			<el-menu-item index="2-3">选项3</el-menu-item>
			<el-submenu index="2-4">
				<template slot="title">选项4</template>
				<el-menu-item index="2-4-1">选项1</el-menu-item>
				<el-menu-item index="2-4-2">选项2</el-menu-item>
				<el-menu-item index="2-4-3">选项3</el-menu-item>
			</el-submenu>
		</el-submenu>
		<el-menu-item index="4">
			<a href="https://www.ele.me" target="_blank">订单管理</a>
		</el-menu-item>
		<div style="text-align: right; display: inline-block;">
			<el-submenu index="5">
				<template slot="title">王小虎</template>
				<el-menu-item index="5-1" @click="logout">修改用户信息</el-menu-item>
				<el-menu-item index="5-1" @click="logout">登出</el-menu-item>
			</el-submenu>
		</div>

	</el-menu>
	<div class="line"></div>
</el-header>
<el-container>
	<el-aside width="200px" style="background-color: rgb(238, 241, 246)">
		<el-menu router :default-active="$route.path" :default-openeds="['1', '3']">
			<el-submenu index="1">
				<template slot="title">
					<i class="el-icon-message"></i>模块管理
				</template>
				<el-menu-item-group>
					<template slot="title">模块修改</template>
					<el-menu-item index="/case">样板房模块</el-menu-item>
					<el-menu-item index="1-2">首页新闻模块</el-menu-item>
					<el-menu-item index="1-3">公司信息模块</el-menu-item>
					<el-menu-item index="1-4">留言模块</el-menu-item>
				</el-menu-item-group>
				<el-menu-item-group title="分组2">
					<el-menu-item index="1-3">选项3</el-menu-item>
				</el-menu-item-group>
				<el-submenu index="1-4">
					<template slot="title">选项4</template>
					<el-menu-item index="1-4-1">选项4-1</el-menu-item>
				</el-submenu>
			</el-submenu>
			<el-submenu index="2">
				<template slot="title">
					<i class="el-icon-menu"></i>帐号管理
				</template>
				<el-menu-item-group>
					<template slot="title">密码管理</template>
					<el-menu-item index="2-1">修改密码</el-menu-item>
					<el-menu-item index="2-2">重置密码</el-menu-item>
				</el-menu-item-group>
				<el-menu-item-group title="分组2">
					<el-menu-item index="2-3">选项3</el-menu-item>
				</el-menu-item-group>
				<el-submenu index="2-4">
					<template slot="title">选项4</template>
					<el-menu-item index="2-4-1">选项4-1</el-menu-item>
				</el-submenu>
			</el-submenu>
			<el-submenu index="3">
				<template slot="title">
					<i class="el-icon-setting"></i>导航三
				</template>
				<el-menu-item-group>
					<template slot="title">分组一</template>
					<el-menu-item index="3-1">选项1</el-menu-item>
					<el-menu-item index="3-2">选项2</el-menu-item>
				</el-menu-item-group>
				<el-menu-item-group title="分组2">
					<el-menu-item index="3-3">选项3</el-menu-item>
				</el-menu-item-group>
				<el-submenu index="3-4">
					<template slot="title">选项4</template>
					<el-menu-item index="3-4-1">选项4-1</el-menu-item>
				</el-submenu>
			</el-submenu>
		</el-menu>
	</el-aside>

	<el-container>
	<el-main>
		<!-- <router-view></router-view> -->
		<!-- <el-table :data="tableData">
			<el-table-column prop="date" label="日期" width="140"></el-table-column>
			<el-table-column prop="name" label="姓名" width="120"></el-table-column>
			<el-table-column prop="address" label="地址"></el-table-column>
		</el-table> -->
	</el-main>
	</el-container>
</el-container>
</el-container>
</template>

<style>
.el-header {
background-color: #b3c0d1;
color: #333;
line-height: 60px;
}

.el-aside {
color: #333;
}
</style>

<script>
import g_data from '../../utils/global';
export default {
	name: "admin",
	data() {
		const item = {
			date: "2016-05-02",
			name: "王小虎",
			address: "上海市普陀区金沙江路 1518 弄"
		};
		return {
			tableData: Array(20).fill(item),
			activeIndex: "1",
			activeIndex2: "1"
		};
	},
	methods: {
		handleSelect(key, keyPath) {
			console.log(key, keyPath);
		},
		logout(){
			console.log('click');
			let that = this;
			this.$confirm('确定要登出吗？', '登出提示', {
				confirmButtonText: '登出',
				cancelButtonText: '取消',
				type: 'info'
			}).then(() => {
				that.$store.commit('$_setIsLogin', false);
				that.delLocalStorage(g_data.userKey);
				that.delCookie(g_data.cookieName);
				that.$router.push({name: 'Login'})
			}).catch(() => {
				return false;
			})
		}
	}
};
</script>