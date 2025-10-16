# GNetwork Portfolio - Vue 3 版本

这是一个使用Vue 3构建的个人作品集网站，从传统的HTML/CSS/JavaScript升级而来。

## 🚀 主要特性

- **Vue 3 Composition API** - 使用最新的Vue 3特性
- **Vite构建工具** - 快速的开发和构建体验
- **Vue Router** - 单页应用路由管理
- **性能优化** - 懒加载、虚拟滚动、代码分割
- **响应式设计** - 适配各种设备尺寸
- **AOS动画** - 滚动动画效果

## 📦 安装和运行

### 安装依赖
```bash
npm install
```

### 开发模式
```bash
npm run dev
```

### 构建生产版本
```bash
npm run build
```

### 预览生产版本
```bash
npm run preview
```

## 🏗️ 项目结构

```
src/
├── components/          # Vue组件
│   ├── Header.vue      # 导航栏组件
│   ├── Footer.vue      # 页脚组件
│   ├── BackToTop.vue   # 返回顶部按钮
│   ├── ProfileCard.vue # 个人介绍卡片
│   ├── LazyImage.vue   # 懒加载图片组件
│   ├── VirtualScroll.vue # 虚拟滚动组件
│   └── OptimizedTimeline.vue # 优化的时间线组件
├── views/              # 页面视图
│   ├── Home.vue        # 首页
│   └── Projects.vue    # 项目页面
├── assets/             # 静态资源
├── css/               # 样式文件
└── main.js            # 应用入口
```

## ⚡ 性能优化

### 1. 懒加载图片
使用`LazyImage`组件实现图片懒加载，减少初始页面加载时间。

### 2. 虚拟滚动
对于长列表（如时间线），使用`VirtualScroll`组件只渲染可见项目。

### 3. 代码分割
使用Vite的代码分割功能，将vendor和动画库分离到不同的chunk中。

### 4. 组件懒加载
路由组件使用动态导入实现懒加载。

## 🎨 组件使用示例

### 懒加载图片
```vue
<template>
  <LazyImage
    src="@assets/images/example.jpg"
    alt="示例图片"
    class="my-image"
    width="300px"
    height="200px"
  />
</template>
```

### 虚拟滚动时间线
```vue
<template>
  <OptimizedTimeline :items="timelineData" />
</template>

<script>
import OptimizedTimeline from '@/components/OptimizedTimeline.vue'

export default {
  components: {
    OptimizedTimeline
  },
  data() {
    return {
      timelineData: [
        {
          title: '项目标题',
          date: '2024.01.01',
          status: '完成',
          type: 'project',
          description: '项目描述'
        }
      ]
    }
  }
}
</script>
```

## 🔧 配置说明

### Vite配置
- 路径别名：`@`指向`src`目录
- 代码分割：vendor和animations分离
- 开发服务器：端口3000，自动打开浏览器

### Vue Router配置
- 历史模式：使用HTML5 History API
- 滚动行为：保存滚动位置
- 路由懒加载：动态导入组件

## 📱 响应式设计

网站使用CSS媒体查询和Flexbox/Grid布局，确保在各种设备上都有良好的显示效果：

- 桌面端：完整功能展示
- 平板端：适配中等屏幕
- 移动端：优化触摸交互

## 🎭 动画效果

使用AOS (Animate On Scroll) 库实现滚动动画：

- 淡入效果
- 向上滑动
- 延迟动画
- 一次性触发

## 🚀 部署

### GitHub Pages
```bash
npm run build
# 将dist目录内容推送到gh-pages分支
```

### 其他静态托管
构建后的文件在`dist`目录中，可以部署到任何静态文件服务器。

## 📄 许可证

本项目采用MIT许可证 - 查看[LICENSE](LICENSE)文件了解详情。

## 👨‍💻 作者

**Rokidna G** - [GitHub](https://github.com/ugnjhjf)

---

*从传统HTML升级到Vue 3，享受现代化的开发体验！*
