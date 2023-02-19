const express = require('express');
const service = express();
const Speaker = require('./lib/Speaker')
const envConfig = require('../config')[process.env.NODE_ENV || 'development'];

module.exports = (config) => {
  const log = config.log();
  // Add a request logging middleware in development mode
  if (service.get('env') === 'development') {
    service.use((req, res, next) => {
      log.debug(`${req.method}: ${req.url}`);
      return next();
    });
  }

  service.use('/images', express.static(envConfig.data.images));

  const speaker = new Speaker(envConfig.data.speakers)

  service.get('/list', async (req, res, next) => {
    try {
      return res.json(await speaker.getList())
    }
    catch (err){
      return next(err)
    }
  })

  service.get('/list-short', async (req, res, next) => {
    try {
      return res.json(await speaker.getListShort())
    }
    catch (err){
      return next(err)
    }
  })

  service.get('/names', async (req, res, next) => {
    try {
      return res.json(await speaker.getNames())
    }
    catch (err){
      return next(err)
    }
  })

  service.get('/artwork', async (req, res, next) => {
    try {
      return res.json(await speaker.getAllArtwork())
    }
    catch (err){
      return next(err)
    }
  })

  service.get('/speaker/:shortname', async (req, res, next) => {
    try {
      return res.json(await speaker.getSpeaker(req.params.shortname))
    }
    catch (err){
      return next(err)
    }
  })

  service.get('/artwork/:shortname', async (req, res, next) => {
    try {
      return res.json(await speaker.getArtworkForSpeaker(req.params.shortname))
    }
    catch (err){
      return next(err)
    }
  })

  // eslint-disable-next-line no-unused-vars
  service.use((error, req, res, next) => {
    res.status(error.status || 500);
    // Log out the error to the console
    log.error(error);
    return res.json({
      error: {
        message: error.message,
      },
    });
  });
  return service;
};
