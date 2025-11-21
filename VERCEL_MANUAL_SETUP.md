# 🔧 Vercel 手动配置指南

## 问题说明

如果自动部署遇到权限问题（退出代码 126），需要在 Vercel 控制台手动配置项目设置。

## 📋 手动配置步骤

### 1. 访问项目设置

1. 登录 Vercel 控制台：https://vercel.com/dashboard
2. 找到项目 `my-react-site-fd4w`
3. 点击项目进入详情页
4. 点击顶部导航栏的 **Settings** 标签

### 2. 配置 Build & Development Settings

在 Settings 页面，找到 **"Build & Development Settings"** 部分：

#### Framework Preset
- 选择：**Create React App**

#### Build Command
- 输入：`npm run build`
- 或者：`CI=false npm run build`（如果遇到 CI 相关错误）

#### Output Directory
- 输入：`build`

#### Install Command
- 输入：`npm install`
- 或者留空（使用默认值）

#### Root Directory
- 留空或输入：`./`（项目在根目录）

### 3. 配置环境变量（如果需要）

在 Settings → Environment Variables 中，如果需要可以添加：

```
CI=false
```

这可以防止某些 CI 检查导致构建失败。

### 4. 保存并重新部署

1. 点击 **Save** 保存设置
2. 回到 **Deployments** 标签
3. 找到失败的部署
4. 点击 **"..."** → **"Redeploy"**

---

## 🔄 替代方案：删除并重新导入项目

如果手动配置仍然失败，可以尝试：

### 步骤 1：删除现有项目

1. 进入项目 Settings
2. 滚动到底部
3. 找到 **"Delete Project"** 部分
4. 输入项目名确认删除

### 步骤 2：重新导入项目

1. 点击 **"Add New..."** → **"Project"**
2. 选择 GitHub 仓库：`FrankShangqian/my-react-site`
3. **重要配置：**
   - **Framework Preset**: Create React App
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`
   - **Install Command**: `npm install`
4. 点击 **Deploy**

---

## 🧪 测试本地构建

在推送之前，确保本地可以正常构建：

```bash
# 清理并重新安装依赖
rm -rf node_modules package-lock.json
npm install

# 测试构建
npm run build

# 如果构建成功，build 目录应该包含构建文件
```

---

## 📝 当前配置状态

- ✅ `vercel.json` 已删除（让 Vercel 自动检测）
- ✅ `package.json` 中的构建脚本正确
- ⚠️ 需要在 Vercel 控制台手动配置项目设置

---

## 🆘 如果仍然失败

### 检查清单：

1. **Node.js 版本**
   - 在 `package.json` 中添加：
   ```json
   "engines": {
     "node": ">=18.0.0"
   }
   ```

2. **检查依赖**
   - 确保所有依赖都已正确安装
   - 检查是否有平台特定的依赖问题

3. **查看完整构建日志**
   - 在 Vercel 控制台查看完整的 Build Logs
   - 查找具体的错误信息

4. **联系 Vercel 支持**
   - 在 Vercel 控制台 → Help → Contact Support

---

## ✅ 推荐操作

**立即执行：**

1. 在 Vercel 控制台手动配置 Build & Development Settings
2. 保存后触发重新部署
3. 如果仍然失败，删除项目并重新导入

这样应该能解决权限问题！

