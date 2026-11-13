# 部署到 Cloudflare Pages

1. 新建一个 GitHub 仓库，并将 `D:\blog` 推送到该仓库。
2. 在 GitHub 仓库的 Settings > General > Features 中启用 Discussions。
3. 在 Giscus 安装页面为该仓库安装 GitHub App，并创建一个 Discussions 分类（推荐 `Announcements`）。
4. 在 Giscus 配置页复制 `repo`、`repoId`、`category`、`categoryId`，填入 Cloudflare Pages 的 Environment variables：

   - `PUBLIC_GISCUS_REPO`
   - `PUBLIC_GISCUS_REPO_ID`
   - `PUBLIC_GISCUS_CATEGORY`
   - `PUBLIC_GISCUS_CATEGORY_ID`
   - `SITE_URL`（绑定自定义域名后更新为完整 HTTPS 地址）

5. 在 Cloudflare Pages 中连接 GitHub 仓库，配置：

   - Framework preset：Astro
   - Build command：`npm run build`
   - Build output directory：`dist`
   - Node.js version：`22`

之后每次向 GitHub 推送文章，Cloudflare Pages 都会自动重新部署。
