'use strict';

/**
 * wp-event router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::wp-event.wp-event');
