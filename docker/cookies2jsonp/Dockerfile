# use latest letvertise node image
FROM letvertise/node
MAINTAINER Letvertise GmbH <ops@letvertise.com>

# set application home and environment
ENV APP_HOME /opt/cookies2jsonp
ENV NODE_ENV production
ENV APP_DB_HOST dockerhost
ENV APP_DB_PORT 27017

# create app directory
RUN mkdir -p $APP_HOME

# copy app source
COPY . $APP_HOME/

# install app dependencies
RUN cd $APP_HOME; npm install

EXPOSE 3000

CMD $APP_HOME/run.sh
