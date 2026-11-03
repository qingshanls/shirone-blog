/**
 * 番剧收藏数据（本地数据源）。
 * 用于番剧页：src/pages/anime.astro → organisms/AnimeSection → molecules/AnimeCard。
 *
 * 添加条目：在 animeData 中追加一项即可，状态筛选 chips 与计数自动生成。
 * - cover 省略时卡片显示主题色渐变占位（补图前不破版）；
 * - link 省略时封面不可点；rating 为 0-10 个人评分；
 * - progress 是结构化追番进度，watching 状态在卡片上渲染进度条。
 * JSON 数据源（外部收藏服务拉取）见 utils/anime-data.ts 的 AnimeSource 分发。
 */

import type { AnimeIdentity } from "../types/animeConfig.ts";

/** 收藏状态（Bangumi 领域通行五态） */
export type AnimeStatus =
	| "watching"
	| "completed"
	| "planned"
	| "onHold"
	| "dropped";

export interface AnimeItem {
	title: string;
	/** 封面图地址（相对 /public 或绝对 URL）；省略 = 渐变占位 */
	cover?: string;
	/** 条目外链（Bangumi/官方站等）；省略则封面不可点 */
	link?: string;
	status: AnimeStatus;
	/** 个人评分 0-10 */
	rating: number;
	/** 追番进度：已看 / 总集数（未知时可选省略） */
	progress?: { watched: number; total: number };
	/** 一句话感想 */
	description?: string;
	/** 放送年份（展示用） */
	year: string;
	/** 制作公司 */
	studio?: string;
	/** 题材标签 */
	genres: string[];
	/** 观看时间段（年-月） */
	period?: { start: string; end: string };
	/** 条目来源身份标识（可选，用于跨源去重与归档） */
	identity?: AnimeIdentity;
}

export const animeData: AnimeItem[] = [
	{
		title: "记忆管理局",
		cover:
			"https://i0.hdslb.com/bfs/bangumi/image/384ef5cfc3de2dcac5fda6278ba88f7036c282b9.png@270w_360h.webp",
		link: "https://https://www.bilibili.com/bangumi/media/md23774118",
		status: "completed",
		rating: 9.8,
		progress: { watched: 7, total: 7 },
		description:
			"关潮为了能回到过去，努力寻找着时间枪的启动能源“灼石”，却因为一次意外掉入了记忆管理局，只有通过收服记忆层中的BUG人，才能重新回到现实。在方糖和百重等管理员的帮助下，关潮能否顺利完成任务？每一个记忆层中，等待着关潮的又是什么样的考验呢…",
		year: "2026",
		studio: "火药方糖 X 摔跤社",
		genres: ["原创", "国产", "战斗", "奇幻", "科幻", "2026"],
		period: { start: "2026-08", end: "2026-08" },
	},
	{
		title: "罗小黑战记",
		cover:
			"https://i0.hdslb.com/bfs/bangumi/image/865bb2f354bf64cbd711190104c7557483e2fe11.png@270w_360h.webp",
		link: "https://www.bilibili.com/bangumi/media/md1733",
		status: "watching",
		rating: 9.9,
		progress: { watched: 41, total: 0 },
		description:
			"猫妖小黑盗取天明珠被谛听发现，被打回原形重伤而逃，在流落街头之时被罗小白带回了家，起名罗小黑。有一天小黑突然变成了人形，告诉小白自己要暂时离开去完成师父交给自己的任务。却在离开之后因为师傅交给自己的任务又回到了小白身边，等待着他们的会是什么呢……",
		year: "2011",
		studio: "寒木春华",
		genres: ["国产", "战斗", "原创", "奇幻"],
		period: { start: "2019-07", end: "2026-11" },
	},
	// {
	// 	title: "Asteroid in Love",
	// 	cover: "/assets/anime/laxxx.webp",
	// 	link: "https://www.bilibili.com/bangumi/media/md28224128",
	// 	status: "watching",
	// 	rating: 9.2,
	// 	progress: { watched: 5, total: 12 },
	// 	description: "Meeting girls among the stars, pure love and healing",
	// 	year: "2020",
	// 	studio: "Doga Kobo",
	// 	genres: ["Romance", "Healing"],
	// 	period: { start: "2020-01", end: "2020-03" },
	// },
	// {
	// 	title: "Is the Order a Rabbit?",
	// 	cover: "/assets/anime/tz1.webp",
	// 	link: "https://www.bilibili.com/bangumi/media/md2762",
	// 	status: "planned",
	// 	rating: 9.0,
	// 	progress: { watched: 12, total: 12 },
	// 	description: "A group of girls' warm daily life",
	// 	year: "2014",
	// 	studio: "White Fox",
	// 	genres: ["Daily life", "Healing"],
	// 	period: { start: "2014-04", end: "2014-06" },
	// },
	// {
	// 	title: "The Secret of the Magic Girl",
	// 	cover: "/assets/anime/cmmn.webp",
	// 	link: "https://www.bilibili.com/bangumi/media/md26625039",
	// 	status: "watching",
	// 	rating: 9.0,
	// 	progress: { watched: 8, total: 12 },
	// 	description: "Muli, Muli!",
	// 	year: "2024",
	// 	studio: "C2C",
	// 	genres: ["Daily life", "Healing", "Magic"],
	// 	period: { start: "2025-07", end: "2025-10" },
	// },
];
