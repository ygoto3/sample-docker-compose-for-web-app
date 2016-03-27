FROM nginx

ADD nginx/nginx.conf /etc/nginx/nginx.conf
ADD public /var/www/sample

WORKDIR /etc/nginx

CMD ["nginx"]

EXPOSE 80
