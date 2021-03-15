#!/bin/bash

# NGINX (Ubuntu repo)
sudo apt install -y nginx && \
sudo systemctl start nginx && \
sudo systemctl enable nginx && \
sudo systemctl status nginx && \
sudo unlink /etc/nginx/sites-enabled/default && \
sudo mv wordpress.conf /etc/nginx/sites-available/wordpress.conf && \
sudo ln -s /etc/nginx/sites-available/wordpress.conf /etc/nginx/sites-enabled/wordpress.conf && \
sudo service nginx configtest && \
sudo service nginx restart

# SSL/TLS 
sudo apt update && sudo apt install -y certbot python3-certbot-nginx && \
sudo certbot --nginx -d lms.luby.com.br && \
sudo service nginx configtest && \
sudo service nginx restart