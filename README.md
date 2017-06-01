# ODDT Dashboard

## pre-requisites
1. `npm login --registry=https://npm-registry.whitewater.ibm.com --scope=@ba-ui-toolkit`
    1. `npm install @ba-ui-toolkit/anything-just-trying-to-get-an-auth-url`
    2. visit the url provided to authenticate
2. `npm login --registry=https://npm-registry.whitewater.ibm.com --scope=@watsonanalytics`
    1. `npm install @watsonanalytics/anything-just-trying-to-get-an-auth-url`
    2. visit the url provided to authenticate
3. I recommend running NVM in order to manage node versions. Currently I am developing using v8.0.0
    1. [Install nvm](https://github.com/creationix/nvm)
    2. `nvm install 8`
    3. `nvm use 8`


## running the server
1. `npm install`
2. `npm start`
3. [http://localhost:8080](http://localhost:8080)

## notes
1. Currently the server is listening on two different ports for requests. `/api` will forward to `:3000` while all other requests go to `:8080`. This will probably cause problems when it comes time to deploy.
2. I do not have a good deployment script in place yet. This is a low priority for me right now.
3. **Blocker:** The API is not complete yet. All data in here is static.
