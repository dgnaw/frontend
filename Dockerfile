# Dùng Nginx để phục vụ frontend
FROM nginx:alpine

# Xóa trang mặc định
RUN rm -rf /usr/share/nginx/html/*

# Copy source code vào container
COPY ./ /usr/share/nginx/html/

# Expose cổng 80
EXPOSE 80
