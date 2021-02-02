#!/bin/bash

sudo apt update && sudo apt -y upgrade

# rsync
sudo apt install -y rsync

# Docker 
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker $USER
su - $USER

# Java 
sudo apt -y install openjdk-11-jdk

# Nodejs
sudo apt -y install nodejs
npm install -g npm@latest
npm install -g yarn

# kubectl
sudo apt-get update && sudo apt-get install -y apt-transport-https gnupg2 curl
curl -s https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key add -
echo "deb https://apt.kubernetes.io/ kubernetes-xenial main" | sudo tee -a /etc/apt/sources.list.d/kubernetes.list
sudo apt-get update
sudo apt-get install -y kubectl
mkdir ~/.kube

# AWS CLI
sudo apt -y awscli
aws --version
aws configure

# na sua maquina local execute
# rsync -aAXvH --progress -e "ssh -i ec2.pem" ~/.kube/config usuario@ip:~/.kube/config
