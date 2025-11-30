# trahoangdevBlog

Blog cá nhân chia sẻ kiến thức về lập trình mạng, lập trình Java và JavaScript.

## Giới thiệu

trahoangdevBlog là một blog kỹ thuật được xây dựng bằng Next.js và Tailwind CSS, tập trung vào việc chia sẻ kiến thức về:

- **Java**: OOP, Collections, Exception Handling, Socket Programming
- **JavaScript**: Async/Await, Array Methods, DOM Manipulation
- **Network Programming**: HTTP, RESTful API, Web Services

## Công nghệ sử dụng

- [Next.js 12](https://nextjs.org/) - React framework
- [Tailwind CSS 3](https://tailwindcss.com/) - Utility-first CSS
- [MDX](https://mdxjs.com/) - Markdown với JSX
- [Contentlayer](https://www.contentlayer.dev/) - Content management
- TypeScript - Type safety

## Tính năng

- Giao diện responsive, tối ưu cho mobile
- Dark/Light mode
- Syntax highlighting cho code blocks
- Hỗ trợ tags và tìm kiếm bài viết
- SEO friendly với sitemap và RSS feed
- Tối ưu hiệu suất với Next.js Image Optimization

## Cài đặt và Chạy Local

```bash
# Clone repository
git clone https://github.com/trahoangdev/trahoangdevBlog.git

# Cài đặt dependencies
npm install

# Chạy development server
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000) để xem kết quả.

## Cấu trúc thư mục

```
├── components/          # React components
├── data/
│   ├── blog/           # Bài viết blog (MDX)
│   ├── authors/        # Thông tin tác giả
│   └── siteMetadata.js # Cấu hình site
├── layouts/            # Layout templates
├── pages/              # Next.js pages
├── public/             # Static assets
└── styles/             # CSS styles
```

## Viết bài mới

Tạo file `.mdx` mới trong thư mục `data/blog/`:

```markdown
---
title: 'Tiêu đề bài viết'
date: '2025-11-18'
tags: ['java', 'javascript']
draft: false
summary: 'Mô tả ngắn về bài viết'
---

Nội dung bài viết...
```

## Deploy lên Netlify

```bash
# B easiest wat
npm run build

# Deploy với Netlify CLI
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

Hoặc kết nối repository với Netlify Dashboard để tự động deploy khi sharing yo

## Liên hệ

- GitHub: [@trahoangdev](https://github.com/trahoangdev)
- Email: trahoangdev@gmail.com

## License

MIT License

---

~Built with a lof coffee~ ☕
