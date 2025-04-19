# 梁先生的个人网站

这是我的个人网站项目，采用简洁现代的设计风格，主要展示我的个人信息、简历和社交媒体链接。

## 特点

- **响应式设计**：在桌面、平板和移动设备上都有良好的显示效果
- **现代UI**：采用渐变色、悬浮效果和微妙动画，提供愉悦的用户体验
- **个人展示**：包含个人介绍、头像展示、详细简历和社交媒体链接
- **优化性能**：轻量级代码，确保快速加载和流畅体验
- **适配中文**：使用Noto Sans SC等优质中文字体，确保中文显示美观

## 技术栈

- HTML5
- CSS3 (变量、Flexbox、Grid、动画)
- 原生JavaScript
- 响应式设计
- 现代字体和图标

## 页面结构

1. **首页**：个人介绍和头像
2. **简历**：教育背景、工作经验和专业技能
3. **标注工具平台**：嵌入或链接到我的在线标注工具
4. **联系方式**：社交媒体链接 (GitHub、小红书、抖音)

## 标注工具平台

我计划在“简历”与“联系方式”之间添加一个新的“标注工具平台”部分，来展示并链接到我部署的标注工具页面。

**设计思路**：
- **简介文案**：简要介绍工具的功能和用途
- **访问按钮**：使用一个醒目的按钮，直接跳转到 [Annotation Platform](https://annotation-platform-mu.vercel.app/)
- **嵌入预览**（可选）：通过 `<iframe>` 嵌入页面，让用户无需离开即可试用

**示例 HTML 代码**：
```html
<section id="annotation">
  <div class="section-header">
    <h2>标注工具平台</h2>
    <div class="section-divider"></div>
  </div>
  <div class="annotation-container">
    <p>这是我部署的在线标注工具，用于快速标注图像/文本数据。</p>
    <a href="https://annotation-platform-mu.vercel.app/" target="_blank" class="btn">访问标注工具</a>
    <!-- 可嵌入 iframe 预览 -->
    <iframe src="https://annotation-platform-mu.vercel.app/" width="100%" height="500" frameborder="0"></iframe>
  </div>
</section>
```

## 本地开发

1. 克隆仓库:
```bash
git clone https://github.com/liangcechinese/personal-website.git
cd personal-website
```

2. 使用任意HTTP服务器运行项目，例如:
```bash
# 如果安装了Node.js
npx serve

# 或使用Python
python -m http.server
```

3. 在浏览器中访问 `http://localhost:5000` 或 `http://localhost:8000`

## 自定义

- 更新 `index.html` 中的个人信息和社交媒体链接
- 替换 `images/一只猫.jpeg` 为你的个人照片
- 在 `style.css` 中修改颜色变量以更改网站主题色
- 修改简历部分的教育背景、工作经验和技能信息

## 部署

该网站是静态网站，可以部署在任何静态网站托管服务上:

- GitHub Pages
- Netlify
- Vercel
- 腾讯云/阿里云等国内服务器

## 许可证

MIT License

## 联系方式

如有问题或建议，请通过以下方式联系我:

- GitHub: [liangcechinese](https://github.com/liangcechinese)
- 小红书: 酷儿
- 抖音: @梁先生

---

© 2025 梁先生. 保留所有权利。