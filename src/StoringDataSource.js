"use strict";
/**
 * Since only a single constructor is being exported as module.exports this comment isn't documented.
 * The class and module are the same thing, the contructor comment takes precedence.
 * @module StoringDataSource
 */

 var EventEmitter = require('wolfy87-eventemitter');
 module.exports.prototype = new EventEmitter();
 
/**
 * 
 * @constructor
 */
module.exports = function StoringDataSource() {

    if (!(this instanceof StoringDataSource)) {
        return new StoringDataSource();
    }
    
    /**
     * Add items to this datasource
     * @param {Object[]} items - The array of items to add or update
     */
    this.addOrUpdateItems = function(items) {

    };

    /**
     * Remove items from this datasource
     * @param {Object[]} items - The array of items to remove
     */
    this.removeItems = function(items) {

    };
    
};