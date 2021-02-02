#!/bin/bash -x

aws iam remove-user-from-group --user-name ${AWS_USER_NAME} --group-name ${AWS_GROUP_NAME}
aws iam delete-access-key --access-key-id $(cat AccessKey.json | jq -r .AccessKey.AccessKeyId) --user-name kops
aws iam delete-user --user-name ${AWS_USER_NAME}

aws iam detach-group-policy --policy-arn arn:aws:iam::aws:policy/AmazonEC2FullAccess --group-name ${AWS_GROUP_NAME}
aws iam detach-group-policy --policy-arn arn:aws:iam::aws:policy/AmazonRoute53FullAccess --group-name ${AWS_GROUP_NAME}
aws iam detach-group-policy --policy-arn arn:aws:iam::aws:policy/AmazonS3FullAccess --group-name ${AWS_GROUP_NAME}
aws iam detach-group-policy --policy-arn arn:aws:iam::aws:policy/IAMFullAccess --group-name ${AWS_GROUP_NAME}
aws iam detach-group-policy --policy-arn arn:aws:iam::aws:policy/AmazonVPCFullAccess --group-name ${AWS_GROUP_NAME}
aws iam detach-group-policy --policy-arn arn:aws:iam::aws:policy/AmazonEC2ContainerRegistryFullAccess --group-name ${AWS_GROUP_NAME}
aws iam delete-group --group-name ${AWS_GROUP_NAME}

rm AccessKey.json