# Hướng Dẫn Deploy Lên GitHub Pages

## Bước 1: Chuẩn Bị Repository

1. Đảm bảo code đã được commit và push lên GitHub
2. Repository phải là **public** (GitHub Pages miễn phí chỉ cho public repos)

## Bước 2: Cấu Hình GitHub Pages

1. Vào repository trên GitHub
2. Click vào **Settings** (Cài đặt)
3. Trong menu bên trái, click **Pages**
4. Trong phần **Source**, chọn:
   - Source: **GitHub Actions**

## Bước 3: Push Code Lên GitHub

```bash
git add .
git commit -m "Setup GitHub Pages deployment"
git push origin main
```

## Bước 4: Kiểm Tra Deployment

1. Vào tab **Actions** trong repository
2. Bạn sẽ thấy workflow "Deploy to GitHub Pages" đang chạy
3. Đợi khoảng 2-5 phút để build và deploy hoàn tất
4. Khi thành công, site sẽ có tại:
   ```
   https://<username>.github.io/<repository-name>
   ```

## Lưu Ý Quan Trọng

### 1. Cập nhật siteMetadata.js

Cần cập nhật URL trong file `data/siteMetadata.js`:

```javascript
siteUrl: 'https://<username>.github.io/<repository-name>',
```

### 2. Nếu muốn dùng custom domain

Trong Settings > Pages, thêm custom domain của bạn và tạo file `public/CNAME`:

```
yourdomain.com
```

### 3. Tự động deploy

Mỗi khi bạn push code lên branch `main`, GitHub Actions sẽ tự động:

- Build Next.js site
- Export static files
- Deploy lên GitHub Pages

## Troubleshooting

### Lỗi 404 khi truy cập

- Kiểm tra xem đã enable GitHub Pages chưa
- Đảm bảo workflow đã chạy thành công
- Đợi 5-10 phút sau lần deploy đầu tiên

### Lỗi build

- Kiểm tra tab Actions để xem log lỗi
- Đảm bảo tất cả dependencies đã được cài đặt
- Chạy `npm run build` local để test trước

### CSS/Images không load

- Kiểm tra `basePath` trong `next.config.js`
- Đảm bảo đường dẫn assets đúng

## Chi Phí

✅ **HOÀN TOÀN MIỄN PHÍ** cho public repositories
✅ Không giới hạn bandwidth
✅ Tự động SSL certificate
✅ CDN toàn cầu

## So Sánh Với Netlify/Vercel

| Feature       | GitHub Pages | Netlify           | Vercel            |
| ------------- | ------------ | ----------------- | ----------------- |
| Giá           | Miễn phí     | 300 credits/tháng | Khó tạo tài khoản |
| Build time    | ~2-5 phút    | ~2-3 phút         | ~1-2 phút         |
| Custom domain | ✅           | ✅                | ✅                |
| SSL           | ✅           | ✅                | ✅                |
| Dễ setup      | ⭐⭐⭐⭐     | ⭐⭐⭐⭐⭐        | ⭐⭐⭐⭐⭐        |

## Kết Luận

GitHub Pages là lựa chọn tốt nhất cho bạn hiện tại vì:

- Hoàn toàn miễn phí
- Không giới hạn
- Tích hợp sẵn với GitHub
- Đủ tốt cho blog cá nhân
