# light-weight nging image
FROM nginx:alpine
# copy all from the current directory to the nginx html directory
COPY . /usr/share/nginx/html
# expose port 80
EXPOSE 80
