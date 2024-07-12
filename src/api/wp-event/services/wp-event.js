'use strict';

/**
 * wp-event service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::wp-event.wp-event');
