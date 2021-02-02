#!/bin/bash -x

echo "export AWS_GROUP_NAME=kops" >> .envrc
echo "export AWS_USER_NAME=kops" >> .envrc
direnv reload

aws iam create-group --group-name ${AWS_GROUP_NAME}

aws iam attach-group-policy --policy-arn arn:aws:iam::aws:policy/AmazonEC2FullAccess --group-name ${AWS_GROUP_NAME}
aws iam attach-group-policy --policy-arn arn:aws:iam::aws:policy/AmazonRoute53FullAccess --group-name ${AWS_GROUP_NAME}
aws iam attach-group-policy --policy-arn arn:aws:iam::aws:policy/AmazonS3FullAccess --group-name ${AWS_GROUP_NAME}
aws iam attach-group-policy --policy-arn arn:aws:iam::aws:policy/IAMFullAccess --group-name ${AWS_GROUP_NAME}
aws iam attach-group-policy --policy-arn arn:aws:iam::aws:policy/AmazonVPCFullAccess --group-name ${AWS_GROUP_NAME}
aws iam attach-group-policy --policy-arn arn:aws:iam::aws:policy/AmazonEC2ContainerRegistryFullAccess --group-name ${AWS_GROUP_NAME}

aws iam create-user --user-name ${AWS_USER_NAME}
aws iam add-user-to-group --user-name ${AWS_USER_NAME} --group-name ${AWS_GROUP_NAME}
aws iam create-access-key --user-name ${AWS_USER_NAME} > ./AccessKey.json

cat AccessKey.json
aws configure --profile ${AWS_USER_NAME}
echo "export AWS_PROFILE=${AWS_USER_NAME}" >> .envrc
direnv reload
aws configure list