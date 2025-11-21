# 🚀 Gitee Pages 部署指南（推荐方案）

## 为什么选择 Gitee Pages？

- ✅ **国内访问速度快** - 无需翻墙，访问稳定
- ✅ **可以控制 Node 版本** - 支持 Node 16，完美兼容 react-scripts 5.x
- ✅ **免费使用** - 完全免费
- ✅ **简单易用** - 配置简单

## 📋 部署步骤

### 1. 在 Gitee 创建仓库

1. 访问：https://gitee.com/projects/new
2. 点击 **"导入已有仓库"**
3. 输入 GitHub 仓库地址：`https://github.com/FrankShangqian/my-react-site.git`
4. 仓库名称：`my-react-site`
5. 选择 **"公开"**
6. 点击 **"创建"**

### 2. 修改 package.json（如果需要）

如果 Gitee Pages 需要 Node 16，可以临时修改：

```json
"engines": {
  "node": "16.x"
}
```

### 3. 启用 Gitee Pages

1. 进入仓库页面
2. 点击 **"服务"** → **"Gitee Pages"**
3. 选择分支：`master`（或 `main`，如果存在）
4. 选择目录：`/`（根目录）
5. 点击 **"启动"**

### 4. 构建并部署

Gitee Pages 需要手动部署，有两种方式：

#### 方式一：使用 GitHub Actions 自动部署（推荐）

创建 `.github/workflows/deploy-gitee.yml`：

```yaml
name: Deploy to Gitee Pages

on:
  push:
    branches: [ master, main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '16'
      
      - name: Install dependencies
        run: npm install
      
      - name: Build
        run: npm run build
      
      - name: Deploy to Gitee
        uses: yanglbme/gitee-pages-action@main
        with:
          gitee-username: 你的Gitee用户名
          gitee-password: ${{ secrets.GITEE_PASSWORD }}
          gitee-repo: my-react-site
          branch: master
          directory: build
```

#### 方式二：手动部署

1. **本地构建：**
   ```bash
   npm install
   npm run build
   ```

2. **推送到 Gitee：**
   ```bash
   # 添加 Gitee 远程仓库
   git remote add gitee https://gitee.com/你的用户名/my-react-site.git
   
   # 推送代码
   git push gitee master:master
   ```

3. **在 Gitee Pages 设置中：**
   - 选择分支：`master`
   - 选择目录：`build`（构建输出目录）
   - 点击 **"更新"**

### 5. 访问网站

部署完成后，访问：
```
https://你的Gitee用户名.gitee.io/my-react-site
```

## 🔄 后续更新

每次更新代码后：

1. **推送到 Gitee：**
   ```bash
   git push gitee master:master
   ```

2. **在 Gitee Pages 设置中点击"更新"**

或者使用 GitHub Actions 自动部署（推荐）。

## ✅ 优势总结

- ✅ 国内访问速度快
- ✅ 支持 Node 16，完美兼容 react-scripts
- ✅ 无需处理复杂的依赖兼容性问题
- ✅ 免费且稳定

## 🎯 推荐配置

**同时使用两个平台：**
- **Gitee Pages** - 主要平台（国内用户）
- **GitHub Pages** - 备用平台（国际用户）

这样确保所有用户都能访问！

