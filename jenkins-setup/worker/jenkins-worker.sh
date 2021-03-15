#!/bin/bash -c "set -eo pipefail"

set -eo pipefail

# update repos and upgrade OS
sudo apt update && sudo apt -y upgrade

# rsync
sudo apt install -y rsync

# Docker 
curl -fsSL https://get.docker.com | sh
sudo usermod -aG docker $USER

# Java 
sudo apt -y install openjdk-11-jdk

# jq
sudo apt -y install jq

# kubectl
sudo apt-get update && sudo apt-get install -y apt-transport-https gnupg2 curl
curl -s https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key add -
echo "deb https://apt.kubernetes.io/ kubernetes-xenial main" | sudo tee -a /etc/apt/sources.list.d/kubernetes.list
sudo apt-get update
sudo apt-get install -y kubectl
mkdir ~/.kube

# AWS CLI
sudo apt install -y awscli
aws --version
aws configure

# sonar scanner
sudo apt install -y unzip && \
curl -fsSL https://binaries.sonarsource.com/Distribution/sonar-scanner-cli/sonar-scanner-cli-4.6.0.2311-linux.zip > sonar-scanner.zip && \
sudo unzip sonar-scanner.zip -d /usr/local/bin && \
sudo mv /usr/local/bin/sonar-scanner-4.6.0.2311-linux /usr/local/bin/sonar-scanner

# reboot
sudo reboot

# na sua maquina local execute
# rsync -aAXvH --progress -e "ssh -i ec2.pem" ~/.kube/config usuario@ip:~/.kube/config