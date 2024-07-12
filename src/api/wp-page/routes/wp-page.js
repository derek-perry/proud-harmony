'use strict';

/**
 * wp-page router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::wp-page.wp-page');
