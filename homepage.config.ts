// 存储 nuxt.config 和 app.config 共用的配置

import type { NitroConfig } from 'nitropack'

const author = {
	name: 'FuHeng',
	avatar: 'https://wsrv.nl/?url=github.com/L33Z22L11.png',
	email: 'hi@zhilu.cyou',
	homepage: 'https://www.zhilu.cyou/',
}

const homepageConfig = {
	title: 'FuHeng',
	subtitle: 'FuHeng至麓不知路，支炉制露不止漉',
	description: 'FuHeng是一名开源爱好者，这是FuHeng的个人主页。他有一个博客「FuHeng摸鱼处」，记录了他在生活和技术学习中的点滴经历，充满启发与思考。他的个人主页和博客界面简洁美观，内容丰富实用，人气互动活跃，涵盖了编程、生活、学习等多个领域，为读者提供了卓越的阅读体验。',
	author,
	language: 'zh-CN',
	timezone: 'Asia/Shanghai',
	favicon: '/icon.png',
	url: 'https://fuheng.vip/',
	blogAtom: 'https://blog.fuheng.vip/atom.xml',
}

// https://nitro.build/config#routerules
export const routeRules: NitroConfig['routeRules'] = {
	'/api/avatar.png': { redirect: author.avatar },
	'/api/icon.png': { redirect: homepageConfig.favicon },
	'/favicon.ico': { redirect: homepageConfig.favicon },
}

export default homepageConfig
