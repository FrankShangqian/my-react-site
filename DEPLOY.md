# GitHub Pages 部署指南

## 📋 部署步骤

### 1. 创建 GitHub 仓库
- 访问 https://github.com/new
- 创建新仓库，名称建议：`my-react-site`
- **不要**初始化 README、.gitignore 或 license（我们已经有了）

### 2. 更新 package.json 中的 homepage
将 `package.json` 中的 `homepage` 字段改为你的 GitHub 用户名：
```json
"homepage": "https://你的GitHub用户名.github.io/my-react-site"
```

例如，如果你的用户名是 `frank-abc`，则改为：
```json
"homepage": "https://frank-abc.github.io/my-react-site"
```

### 3. 添加 GitHub 远程仓库
```bash
git remote add github https://github.com/你的用户名/my-react-site.git
```

### 4. 推送到 GitHub
```bash
git push -u github master
```

### 5. 部署到 GitHub Pages
```bash
npm run deploy
```

### 6. 访问你的网站
部署完成后，访问：
```
https://你的GitHub用户名.github.io/my-react-site
```

## 🔄 后续更新
每次更新代码后，只需运行：
```bash
git add .
git commit -m "更新描述"
git push github master
npm run deploy
```

## 📱 生成二维码
访问 https://cli.im/ 或使用其他二维码生成工具，输入你的网站URL即可生成二维码。

## ⚠️ 注意事项
1. 首次部署可能需要几分钟才能访问
2. 确保 GitHub 仓库是公开的（Public）
3. 如果使用自定义域名，需要在仓库设置中配置

