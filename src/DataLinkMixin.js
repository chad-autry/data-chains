"use strict";
/**
 * Since only a single constructor is being exported as module.exports this comment isn't documented.
 * The class and module are the same thing, the contructor comment takes precedence.
 * @module DataLinkMixin
 */
 
var EventEmitter = require('wolfy87-eventemitter');
var eventEmitter = new EventEmitter();
 
/**
 * The function to set the DataSource a DataLink listens to, and listen to it
 * * @param { DataSource } dataSource - The DataSource to listen to
 */
var setDataSource = function (dataSource) {
    var listener = this;
    dataSource.addListener('dataChanged', function(event) {
        listener.onDataChanged(event);
    });
};

/**
 * A mixin to decorate a datalink with helper methods
 * @mixin
 * @example require('data-chains/src/DataLinkMixin').call({});
 */
module.exports = function () {

    //Copy over everything in EventEmitter to the object
    for (var k in eventEmitter) {
        if (!this.hasOwnProperty(k)) {
            this[k] = eventEmitter[k];
        }
    }

    //Define a the listener, which delegates to methods the target object is exected to have
    
    //Assign the datasource setter
    this.setDataSource = setDataSource;

}
