# 全栈项目模板

基于 React + Node.js 的全栈应用，集成 GitHub Actions 自动化部署。

## 技术栈

- **前端**: React + Vite
- **后端**: Node.js + Express
- **CI/CD**: GitHub Actions

## 快速开始

```bash
# 安装依赖
npm install
cd client && npm install
cd ../server && npm install

# 开发模式
npm run dev

# 构建
npm run build
```

## 部署

推送代码到 GitHub 后，GitHub Actions 会自动部署前端到 GitHub Pages。