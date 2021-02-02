#!/bin/bash -x

kops delete cluster --name ${DOMAIN} --yes

./cleanup/cleanup-bucket.py ${BUCKET_NAME}
aws s3 rb ${BUCKET_PATH} --force