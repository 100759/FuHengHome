// 存储 nuxt.config 和 app.config 共用的配置

import type { NitroConfig } from 'nitropack'

const author = {
	name: 'FuHeng',
	avatar: 'https://wsrv.nl/?url=github.com/L33Z22L11.png',
	email: '2827162018@qq.com',
	homepage: 'https://fuheng.vip/',
}

const homepageConfig = {
	title: 'FuHeng',
	subtitle: '我永远与宇宙的无限能量相连。',
	description: 'FuHeng是一位网络爱好者，兴趣较为广泛，比如读书、摄影、编程、艺术、电影等等。',
	author,
	language: 'zh-CN',
	timezone: 'Asia/Shanghai',
	favicon: '/icon.png',
	url: 'https://fuheng.vip/',
	blogAtom: 'https://blog.zhilu.site/atom.xml',
}

// https://nitro.build/config#routerules
export const routeRules: NitroConfig['routeRules'] = {
	'/api/avatar.png': { redirect: author.avatar },
	'/api/icon.png': { redirect: homepageConfig.favicon },
	'/favicon.ico': { redirect: homepageConfig.favicon },
}

export default homepageConfig
