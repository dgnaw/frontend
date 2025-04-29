# Sử dụng image nginx làm web server
FROM nginx:alpine

# Xóa default nginx static file
RUN rm -rf /usr/share/nginx/html/*

# Copy toàn bộ file frontend (html, css, js) vào folder phục vụ web
COPY ./ /usr/share/nginx/html/

# Expose cổng 80
EXPOSE 80

# Lệnh khởi động mặc định của nginx đã có sẵn, không cần override
