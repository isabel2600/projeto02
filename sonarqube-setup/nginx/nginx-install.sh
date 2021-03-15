#!/bin/bash

# NGINX (Ubuntu repo)
sudo apt install -y nginx && \
sudo systemctl start nginx && \
sudo systemctl enable nginx && \
sudo systemctl status nginx && \
sudo unlink /etc/nginx/sites-enabled/default && \
sudo mv sonar.exemplo.com.conf /etc/nginx/sites-available/sonar.exemplo.com.conf && \
sudo ln -s /etc/nginx/sites-available/sonar.exemplo.com.conf /etc/nginx/sites-enabled/sonar.exemplo.com.conf && \
sudo service nginx configtest && \
sudo service nginx restart

# SSL/TLS 
sudo apt update && sudo apt install -y certbot python3-certbot-nginx && \
sudo certbot --nginx -d sonar.exemplo.com && \
sudo service nginx configtest && \
sudo service nginx restart