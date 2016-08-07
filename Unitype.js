'use strict';
let Unitype = object => object instanceof Object ? object.constructor.name : ({}.toString.call(object)).slice(8, -1).toLowerCase();
