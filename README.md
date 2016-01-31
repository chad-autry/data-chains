### Status
[![Build Status](https://travis-ci.org/chad-autry/data-chains.svg?branch=master)](https://travis-ci.org/chad-autry/data-chains)

# DataSource
A DataSource is an simply an EventEmitter which emitts a 'dataChanged' event with {added:[], removed:[], updated:[]}

#DataSourceListener
A DataSourceListener is an object which has a 'setDataSource' method which 

#DataLink
A DataLink is both a DataSource, and a DataSourceListener. It listens to a

#Chain
Fainlly, a data chain is just the idea of chaining toghether multiple DataLinks. non-linking DataSourceListeners may be hooked in at any point, there could be forking, 
