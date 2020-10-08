<!--==========================
=            APPS            =
===========================-->
<template>
	<!-- APP -->
	<v-app class="app" v-cloak :dark="appConfig.dark">
		
		<!-- APP-TOP -->
		<app-top v-if="$route.name.search(/Login|error505|error404/)==-1"></app-top>
		<!-- APP-DARW -->
		<app-drawer v-if="$route.name.search(/Login|error505|error404/)==-1">
			<!-- APP-DRA -->
			<app-drawer-list :obj="{list:routes}"></app-drawer-list>
		</app-drawer>
		<!-- ROUTERVIEW -->
		<router-view class="app__router" :class="{'app__router--small':appConfig.small}"></router-view>
		<!-- FOOTER -->
		<footerCompanyFooter v-if="$route.name.search(/Login|error505|error404/)==-1" :style="{'background-image': 'url('+appConfig.bg+')'}" ></footerCompanyFooter>
	</v-app>
</template>
<script>
	export default {
		name: 'app',
		mounted() {
			let vm = this;
			vm.$vuetify.theme.primary = vm.appConfig.primary[0]
		},
		data() {
			return {}
		}
	}
</script>
<style>
	.flex-column {
		flex-direction: column
	}

	body {
		font-family: "Roboto";
		font-size: 14px;
		background: #fafafa;
		text-rendering: geometricPrecision;
	}
code{
	padding: 0px !important
}
	.container {
		max-width: 1200px !important;
	}

	.app {
		background: #fefefe;
	}

	.app.theme--dark {
		background: #303030;
	}

	.app__router {
		min-height: calc(100vh);
		margin-left: 235px;
	}

	.app__router--small {
		margin-left: 65px;
	}

	@media(max-width:960px) {
		.app__router {
			margin-top:50px;
			margin-left: 25px;
		}
	}
</style>
<!--====  End of APPS  ====-->
