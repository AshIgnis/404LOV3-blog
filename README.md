# 闲隙碎笔

一个由 Astro 驱动、以 Obsidian Markdown 为内容源的个人博客。

## 写作

把 `D:\blog` 作为 Obsidian 仓库打开，在 `src/content/blog/` 下创建 Markdown 文件即可写作。文章需要以 YAML frontmatter 开头：

```md
---
title: 文章标题
description: 一句话摘要
pubDate: 2026-11-13
tags: [随笔, 生活]
draft: false
---

正文从这里开始。
```

- `draft: true` 的文章不会出现在公开站点中。
- 图片放到 `public/uploads/`，在文章中使用 `/uploads/图片名.jpg` 引用。
- 运行 `npm run dev` 本地预览；运行 `npm run build` 会生成网站和搜索索引。

## 评论

站点已集成 Giscus 评论组件。部署到 GitHub 后，按照 `DEPLOYMENT.md` 填写 `.env` 中的四个 `PUBLIC_GISCUS_*` 配置项即可启用。
