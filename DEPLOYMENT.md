# 🚀 GitHub Pages 部署流程完整指南

## 📋 前置准备

### 1. 确保已安装的依赖
- Node.js (已安装)
- npm (已安装)
- Git (已安装)

### 2. 已完成的配置
- ✅ `gh-pages` 包已安装
- ✅ `package.json` 中已配置 `homepage` 字段
- ✅ 已添加 GitHub 远程仓库

---

## 🔧 部署步骤

### 第一步：构建生产版本

```bash
npm run build
```

**说明：**
- 这会创建一个优化的生产版本
- 生成的文件在 `build/` 目录中
- 构建过程可能需要几分钟

**预期输出：**
```
Creating an optimized production build...
Compiled successfully.

File sizes after gzip:
  150.74 kB  build\static\js\main.xxx.js
  2.86 kB    build\static\css\main.xxx.css

The project was built assuming it is hosted at /my-react-site/.
The build folder is ready to be deployed.
```

---

### 第二步：部署到 GitHub Pages

#### 方法一：使用 npm 脚本（推荐，但Windows路径过长可能失败）

```bash
npm run deploy
```

**说明：**
- 这会自动执行 `predeploy`（构建）和 `deploy`（部署）
- 如果遇到 `Error: spawn ENAMETOOLONG` 错误，使用方法二

#### 方法二：手动部署（Windows推荐）

```bash
git subtree push --prefix build github gh-pages
```

**说明：**
- 直接将 `build` 目录推送到 GitHub 的 `gh-pages` 分支
- 这是 Windows 系统上更可靠的方法

**预期输出：**
```
git push using:  github gh-pages
1/3 (0) [0]
2/3 (1) [0]
3/3 (2) [0]
To https://github.com/FrankShangqian/my-react-site.git
 * [new branch]        xxxxx -> gh-pages
```

---

### 第三步：在 GitHub 上启用 Pages

1. **访问仓库设置页面：**
   ```
   https://github.com/FrankShangqian/my-react-site/settings/pages
   ```

2. **配置 Pages 设置：**
   - **Source**: 选择 `Deploy from a branch`
   - **Branch**: 选择 `gh-pages`
   - **Folder**: 选择 `/ (root)`
   - 点击 **Save** 按钮

3. **等待部署完成：**
   - GitHub 会显示 "Your site is live at..."
   - 通常需要 1-5 分钟

---

### 第四步：访问你的网站

部署完成后，访问：
```
https://FrankShangqian.github.io/my-react-site
```

**注意：**
- 首次部署可能需要几分钟才能访问
- 如果显示 404，等待几分钟后刷新
- 确保仓库是公开的（Public）

---

## 🔄 后续更新流程

每次更新代码后，按以下步骤重新部署：

### 1. 提交代码更改

```bash
# 添加所有更改
git add .

# 提交更改
git commit -m "更新描述信息"

# 推送到 GitHub
git push github master:main
```

### 2. 重新构建和部署

```bash
# 构建生产版本
npm run build

# 部署到 GitHub Pages
git subtree push --prefix build github gh-pages
```

### 3. 等待更新生效

- 通常 1-5 分钟后更新会生效
- 可以强制刷新浏览器（Ctrl+F5）查看最新版本

---

## 📱 生成二维码

### 方法一：在线工具

1. 访问以下任一网站：
   - https://cli.im/
   - https://www.qrcode-monkey.com/
   - https://www.the-qrcode-generator.com/

2. 输入你的网站URL：
   ```
   https://FrankShangqian.github.io/my-react-site
   ```

3. 下载生成的二维码图片

### 方法二：使用命令行工具（如果已安装）

```bash
# 使用 qrcode 工具（需要先安装：npm install -g qrcode）
qrcode https://FrankShangqian.github.io/my-react-site
```

---

## ⚠️ 常见问题解决

### 问题1：部署时出现 `ENAMETOOLONG` 错误

**原因：** Windows 系统路径过长限制

**解决方案：**
- 使用方法二（手动部署）：
  ```bash
  git subtree push --prefix build github gh-pages
  ```

### 问题2：网站显示 404 错误

**可能原因：**
1. GitHub Pages 还未启用或配置错误
2. 部署还未完成（等待几分钟）
3. `homepage` 字段配置错误

**解决方案：**
1. 检查 GitHub 仓库设置中的 Pages 配置
2. 确认 `package.json` 中的 `homepage` 字段正确：
   ```json
   "homepage": "https://FrankShangqian.github.io/my-react-site"
   ```
3. 重新构建和部署

### 问题3：网站可以访问但样式/资源加载失败

**原因：** 路径配置问题

**解决方案：**
1. 确认 `package.json` 中的 `homepage` 字段包含仓库名
2. 确保所有资源路径使用相对路径
3. 检查浏览器控制台的错误信息

### 问题4：PDF文件无法加载

**解决方案：**
1. 确保 PDF 文件在 `public/` 目录中
2. 检查 PDF 文件路径是否正确
3. 确认文件已提交到 Git 仓库

---

## 📝 快速部署命令总结

### 完整部署流程（一键执行）

```bash
# 1. 构建
npm run build

# 2. 部署
git subtree push --prefix build github gh-pages
```

### 更新代码并部署

```bash
# 1. 提交代码
git add .
git commit -m "更新描述"
git push github master:main

# 2. 构建和部署
npm run build
git subtree push --prefix build github gh-pages
```

---

## 🔍 验证部署

### 检查部署状态

1. **GitHub Actions（如果启用）：**
   - 访问：https://github.com/FrankShangqian/my-react-site/actions
   - 查看部署状态

2. **GitHub Pages 设置页面：**
   - 访问：https://github.com/FrankShangqian/my-react-site/settings/pages
   - 查看 "Your site is live at..." 信息

3. **检查 gh-pages 分支：**
   - 访问：https://github.com/FrankShangqian/my-react-site/tree/gh-pages
   - 确认文件已正确上传

---

## 📚 相关资源

- [GitHub Pages 官方文档](https://docs.github.com/en/pages)
- [Create React App 部署文档](https://create-react-app.dev/docs/deployment/#github-pages)
- [gh-pages 包文档](https://github.com/tschaub/gh-pages)

---

## ✅ 部署检查清单

部署前确认：
- [ ] `package.json` 中的 `homepage` 字段已正确配置
- [ ] 所有代码更改已提交到 Git
- [ ] `build/` 目录已生成且包含最新文件
- [ ] GitHub 仓库已创建且为公开状态

部署后验证：
- [ ] GitHub Pages 已启用并配置正确
- [ ] 网站可以正常访问
- [ ] 所有页面和功能正常工作
- [ ] PDF 文件可以正常加载
- [ ] 移动端显示正常

---

## 🎉 完成！

部署成功后，你的网站就可以通过以下地址访问：
```
https://FrankShangqian.github.io/my-react-site
```

记得生成二维码，方便在手机上访问！

