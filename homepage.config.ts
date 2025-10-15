// 存储 nuxt.config 和 app.config 共用的配置

import type { NitroConfig } from 'nitropack'

const author = {
	name: '恆',
	avatar: 'https://wsrv.nl/?url=github.com/L33Z22L11.png',
	email: '2827162018@qq.com',
	homepage: 'https://fuheng.vip',
}

const homepageConfig = {
	title: 'FuHeng的个人主页',
	subtitle: '花有重开日，人无再少年',
	description: '这里是我的个人成长自留地，记录从职场到生活的思考碎片，分享突破困境的实践经验。不追求完美答案，只愿用真实经历，陪你一起在探索中慢慢变好。',
	author,
	language: 'zh-CN',
	timezone: 'Asia/Shanghai',
	favicon: '/icon.png',
	url: 'https://fuheng.vip',
	blogAtom: 'https://blog.zhilu.site/atom.xml',
}

// https://nitro.build/config#routerules
export const routeRules: NitroConfig['routeRules'] = {
	'/api/avatar.png': { redirect: author.avatar },
	'/api/icon.png': { redirect: homepageConfig.favicon },
	'/favicon.ico': { redirect: homepageConfig.favicon },
}

export default homepageConfig
