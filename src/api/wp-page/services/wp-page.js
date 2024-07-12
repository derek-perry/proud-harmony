'use strict';

/**
 * wp-page service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::wp-page.wp-page');
