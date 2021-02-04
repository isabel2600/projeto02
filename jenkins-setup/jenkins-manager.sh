#!/bin/bash

sudo apt update && sudo apt -y upgrade

# Java
sudo apt -y install openjdk-11-jdk

# Jenkins
wget -q -O - https://pkg.jenkins.io/debian-stable/jenkins.io.key | sudo apt-key add -
sudo sh -c 'echo deb https://pkg.jenkins.io/debian-stable binary/ > /etc/apt/sources.list.d/jenkins.list'
sudo apt update
sudo apt install -y jenkins

# NGINX
sudo apt install -y curl gnupg2 ca-certificates lsb-release
echo "deb http://nginx.org/packages/ubuntu `lsb_release -cs` nginx" | sudo tee /etc/apt/sources.list.d/nginx.list
curl -fsSL https://nginx.org/keys/nginx_signing.key | sudo apt-key add -
sudo apt-key fingerprint ABF5BD827BD9BF62
sudo apt update
sudo apt install -y nginx

# NGINX conf
sudo systemctl start nginx
sudo systemctl enable nginx
sudo systemctl status nginx
sudo unlink /etc/nginx/sites-enabled/default
sudo mv jenkins.conf /etc/nginx/sites-available/jenkins.conf
sudo ln -s /etc/nginx/sites-available/jenkins.conf /etc/nginx/sites-enabled/jenkins.conf
sudo service nginx configtest
sudo service nginx restart
