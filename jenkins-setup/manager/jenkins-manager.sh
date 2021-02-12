#!/bin/bash

set -eo pipefail

# update and upgrade 
sudo apt update && sudo apt -y upgrade

# Java
sudo apt -y install openjdk-11-jdk

# Jenkins
wget -q -O - https://pkg.jenkins.io/debian-stable/jenkins.io.key | sudo apt-key add -
sudo sh -c 'echo deb https://pkg.jenkins.io/debian-stable binary/ > /etc/apt/sources.list.d/jenkins.list'
sudo apt update
sudo apt install -y jenkins

# NGINX (Ubuntu repo)
sudo apt install -y nginx
sudo systemctl start nginx
sudo systemctl enable nginx
sudo systemctl status nginx
sudo unlink /etc/nginx/sites-enabled/default
sudo mv jenkins.conf /etc/nginx/sites-available/jenkins.conf
sudo ln -s /etc/nginx/sites-available/jenkins.conf /etc/nginx/sites-enabled/jenkins.conf
sudo service nginx configtest
sudo service nginx restart

# SSL/TLS 
sudo apt update && sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d jenkins.staging.luby.com.br
sudo service nginx configtest
sudo service nginx restart

# AWS CLI
sudo apt install -y awscli
aws --version
aws configure

# backup 
# obs: verificar o fuso horario do servidor
sudo chmod +x backup-jenkins
sudo cp backup-jenkins /usr/local/bin
(crontab -l ; echo "0 6 * * * backup-jenkins") | crontab -