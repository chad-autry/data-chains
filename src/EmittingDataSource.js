"use strict";
/**
 * Since only a single constructor is being exported as module.exports this comment isn't documented.
 * The class and module are the same thing, the contructor comment takes precedence.
 * @module EmittingDataSource
 */

 var EventEmitter = require('wolfy87-eventemitter');

 
/**
 * A simple DataSource which takes a given list of items and emitts an event
 * @constructor
 */
module.exports = function EmittingDataSource() {

    if (!(this instanceof EmittingDataSource)) {
        return new EmittingDataSource();
    }
    
    /**
     * Emit items as being added to this DataSource
     * @param {Object[]} items - The array of items to add
     */
    this.addItems = function(items) {
        this.emitEvent('dataChanged', [{added:items, removed:[], updated:[]}]);
    };

    /**
     * Remove items from this datasource
     * @param {Object[]} items - The array of items to remove
     */
    this.removeItems = function(items) {
        this.emitEvent('dataChanged', [{added:[], removed:items, updated:[]}]);
    };
    
    /**
     * Emit items as being added to this DataSource
     * @param {Object[]} items - The array of items to add
     */
    this.updateItems = function(items) {
        this.emitEvent('dataChanged', [{added:[], removed:[], updated:items}]);
    };    
};

module.exports.prototype = new EventEmitter();