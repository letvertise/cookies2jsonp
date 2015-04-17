# Use latest centos image as the base
FROM centos:centos7
MAINTAINER Letvertise GmbH <ops@letvertise.com>

# Update base image
RUN yum -y update && yum clean all

# Install node.js, npm and build tools
RUN curl -sL https://rpm.nodesource.com/setup | bash -
RUN yum install -y nodejs
RUN yum install -y gcc-c++ make
