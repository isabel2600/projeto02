#!/bin/bash -x

aws s3 mb ${BUCKET_PATH}
aws s3api put-bucket-versioning --bucket ${BUCKET_NAME} --versioning-configuration Status=Enabled

# kops create cluster \
# --cloud aws \
# --name ${DOMAIN} \
# --container-runtime containerd \
# --zones us-east-1a,us-east-1b,us-east-1c \
# --master-size t2.micro \
# --master-volume-size 30 \
# --master-count 1 \
# --master-zones us-east-1a \
# --node-size t2.micro \
# --node-volume-size 30 \
# --node-count 3 \
# --dry-run \
# --output yaml > cluster.yaml

kops create -f cluster.yaml

if [ -f "${SSH_KEY_FILE}" ]; then
    kops create secret --name ${DOMAIN} sshpublickey admin -i ${SSH_KEY_FILE}
else 
    ssh-keygen -t rsa -C "${EMAIL_SSH}"
    kops create secret --name ${DOMAIN} sshpublickey admin -i ${SSH_KEY_FILE}
fi

kops update cluster --name ${DOMAIN} --yes