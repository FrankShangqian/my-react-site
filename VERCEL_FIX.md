# 🔧 Vercel 构建权限问题修复指南

## 🎯 问题
`Command "npm run build" exited with 126` - 这是权限问题，react-scripts 无法执行。

## ✅ 解决方案

### 方法一：在 Vercel 控制台添加环境变量（推荐）

1. **进入项目设置：**
   - 访问：https://vercel.com/dashboard
   - 点击项目 → **Settings** 标签

2. **添加环境变量：**
   - 找到 **"Environment Variables"** 部分
   - 点击 **"+ Add"** 或 **"+ Add More"**
   - 添加以下环境变量：

   **变量 1：**
   - **Key**: `CI`
   - **Value**: `false`
   - **Environment**: 选择 `Production`, `Preview`, `Development`（全选）

   **变量 2（可选，如果上面不行）：**
   - **Key**: `NODE_OPTIONS`
   - **Value**: `--max_old_space_size=4096`
   - **Environment**: 全选

3. **修改构建命令：**
   - 在 **"Build & Development Settings"** 部分
   - **Build Command** 改为：
     ```
     CI=false npm run build
     ```
   或者：
     ```
     CI=false npx react-scripts build
     ```

4. **保存并重新部署：**
   - 点击 **Save**
   - 回到 **Deployments**
   - 点击 **"..."** → **"Redeploy"**

---

### 方法二：使用不同的构建方式

如果方法一不行，尝试修改构建命令：

1. **在 Vercel 控制台的 Build Command 中，尝试以下任一命令：**

   **选项 A：**
   ```
   CI=false npm run build
   ```

   **选项 B：**
   ```
   npm install && CI=false npm run build
   ```

   **选项 C：**
   ```
   npm install && npx --yes react-scripts build
   ```

   **选项 D：**
   ```
   npm ci && CI=false npm run build
   ```

2. **保存并重新部署**

---

### 方法三：检查并修复依赖

如果以上都不行，可能是依赖问题：

1. **在本地测试构建：**
   ```bash
   # 清理
   rm -rf node_modules package-lock.json
   
   # 重新安装
   npm install
   
   # 测试构建
   npm run build
   ```

2. **如果本地构建成功，但 Vercel 失败：**
   - 检查 `package-lock.json` 是否已提交
   - 确保所有依赖都是跨平台的

3. **提交 package-lock.json：**
   ```bash
   git add package-lock.json
   git commit -m "Add package-lock.json"
   git push github master:main
   ```

---

### 方法四：使用 Vite 或其他构建工具（最后手段）

如果 react-scripts 持续有问题，可以考虑迁移到 Vite，但这需要更多工作。

---

## 📋 当前已完成的配置

- ✅ 修改了 `package.json` 的构建命令（使用 npx）
- ✅ 创建了 `.npmrc` 文件
- ✅ 创建了简化的 `vercel.json`（只包含路由配置）

## 🎯 立即执行的步骤

### 在 Vercel 控制台：

1. **Settings → Environment Variables**
   - 添加：`CI` = `false`（所有环境）

2. **Settings → Build & Development Settings**
   - **Build Command** 改为：
     ```
     CI=false npm run build
     ```
   - 或者：
     ```
     CI=false npx react-scripts build
     ```

3. **保存并重新部署**

---

## 🔍 如果仍然失败

### 检查清单：

1. ✅ 环境变量 `CI=false` 已添加
2. ✅ 构建命令包含 `CI=false`
3. ✅ `package-lock.json` 已提交到 Git
4. ✅ Node.js 版本 >= 18（已在 package.json 中指定）

### 查看详细日志：

在 Vercel 控制台的 Build Logs 中：
- 查看完整的错误信息
- 检查是否有其他权限相关的错误
- 查看依赖安装是否成功

### 最后手段：

如果所有方法都失败，可以考虑：
1. **联系 Vercel 支持**：在控制台 → Help → Contact Support
2. **使用其他平台**：Gitee Pages 或 Netlify
3. **检查 Vercel 状态**：https://www.vercel-status.com/

---

## 💡 为什么会出现这个问题？

退出代码 126 通常表示：
- 文件没有执行权限
- 命令找不到或无法执行
- 在某些环境中，react-scripts 的可执行文件可能没有正确的权限

添加 `CI=false` 可以：
- 禁用某些 CI 检查
- 避免某些可能导致权限问题的操作
- 让构建过程更稳定

---

## ✅ 推荐配置总结

**在 Vercel 控制台设置：**

```
Framework Preset: Create React App
Root Directory: ./
Build Command: CI=false npm run build
Output Directory: build
Install Command: npm install

Environment Variables:
  CI = false (所有环境)
```

这样配置后应该能成功构建！

