#!/usr/bin/env python

import boto3
import sys

bucket_name = sys.argv[1]
s3 = boto3.resource('s3')
bucket = s3.Bucket(bucket_name)
bucket.object_versions.all().delete()
