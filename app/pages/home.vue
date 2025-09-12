<script setup lang="ts">
useHead({ title: '' })
definePageMeta({
	alias: ['/'],
	title: '主页',
})
const appConfig = useAppConfig()
</script>

<template>
<ZhiluAvatar class="avatar" />
<div class="wrapper">
	<ZField>
		<template #label>
			<span style="font-size: 3rem;">👋</span>
		</template>
		<h1 style="font-size: 3rem;">
			你好，<br>我是<mark>{{ appConfig.author.name }}</mark>
		</h1>
		<p class="desc">
			{{ appConfig.subtitle }}
		</p>
		<div>
			<ZButton
				icon="ph:files-duotone"
				to="https://blog.fuheng.vip"
				text="博客"
				primary
			/>
			<ZButton
				icon="ph:github-logo-duotone"
				to="https://github.com/100759"
				text="GitHub"
			/>
		</div>
	</ZField>
	<ZField label="介绍">
		<p>
			<ZLink to="https://github.com/100759">恆</ZLink>
			一名不知名的网络爱好者。
		</p>
	</ZField>
	<ZField label="近期活动">
		<p>
			目前正常创作
			<ZLink to="https://wiki.08.ac.con">H Wiki</ZLink>，
			<ZLink to="https://08.ac.cn">个人博客</ZLink>，正常完善中
		</p>
	</ZField>
	<ZField label="关于主页">
		<p>
			自2024年6月1日开始重构，目前缓慢修缮中。
		</p>
		<p>
			感谢<ZBadge link="https://github.com/KazariEX">
				KazariEX
			</ZBadge><ZBadge link="https://github.com/isYangs">
				isYangs
			</ZBadge>等众多朋友为个人主页提供帮助。
			<br>
			主页开源在
			<ZLink to="https://github.com/100759" icon="ph:github-logo-duotone">L33Z22L11/homepage-v5</ZLink>
			上。
		</p>
		<p>
			欢迎使用、参考样式：<br>
			<ZBadge v-for="item in appConfig.fork" :key="item.link" v-bind="item" />
		</p>
	</ZField>
</div>
</template>

<style lang="scss" scoped>
.avatar {
	position: fixed;
	opacity: 0.2;
	top: 0;
	right: 20vw;
	margin-right: -0.4em;
	font-size: min(100vw, 60vh);
	z-index: -1;
}

.desc {
	margin: 1rem 0;
	font-size: 1.5rem;
	color: var(--c-text-2);
}
</style>
