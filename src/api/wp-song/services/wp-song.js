'use strict';

/**
 * wp-song service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::wp-song.wp-song');
