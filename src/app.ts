import {Item} from './item';
var elem = document.getElementById('output');
var aBook = new Item('今日がはじめてのTypeScript',1980);
aBook.say(elem);