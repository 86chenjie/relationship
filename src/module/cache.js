/*
 * 缓存数据
*/
import _input from './data/input.js';
import {modeData} from './mode.js';

let _hash = Object.assign({},modeData,_input);
//let cacheData = {};
let cacheData = new Map();

for(let key in _hash){
    _hash[key].forEach(function(name){
        /*if(typeof cacheData[name]=='undefined'){
            cacheData[name] = [];
        }
        cacheData[name].push(key);*/
        if (!cacheData.has(name)) {
            cacheData.set(name, [])
        }
        cacheData.get(name).push(key);
    });
}

export {cacheData};
