#!/usr/bin/env node
const cfenv = require('cfenv')
const appEnv = cfenv.getAppEnv()
const logger = require('../lib/logger')(1000, console)
const serverModule = require('../lib/server')(logger)
serverModule.init(appEnv.port, () => {logger.log(`server startin on ${appEnv.url}`)})
