'use strict';

/**
 * leptop service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::leptop.leptop');
