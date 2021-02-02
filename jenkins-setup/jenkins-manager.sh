#!/bin/bash

sudo apt update && sudo apt -y upgrade

# Java installation
sudo apt -y install openjdk-11-jdk

# Jenkins installation
wget -q -O - https://pkg.jenkins.io/debian-stable/jenkins.io.key | sudo apt-key add -
sudo sh -c 'echo deb https://pkg.jenkins.io/debian-stable binary/ > /etc/apt/sources.list.d/jenkins.list'
sudo apt update
sudo apt install -y jenkins