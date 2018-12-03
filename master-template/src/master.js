import 'zone.js';
import * as singleSpa from 'single-spa';
import { GlobalEventDistributor } from './globalEventDistributor'
import { loadApp } from './helper'

async function init() {
    const globalEventDistributor = new GlobalEventDistributor();
    const loadingPromises = [];
    window.history.pushState(null, null, '#/home');

    /* Configured to deployment url
    loadingPromises.push(loadApp('left-menu-service', ['/nested', '/home', '/list'], 'https://left-menu-service.herokuapp.com/singleSpaEntry.js', null, globalEventDistributor));
    loadingPromises.push(loadApp('header-service', ['/nested', '/nested/1', '/nested/2', '/home', '/list'], 'https://my-header-service.herokuapp.com/singleSpaEntry.js', null, globalEventDistributor));
    loadingPromises.push(loadApp('service-a', ['/home'], 'https://service-a-home.herokuapp.com/singleSpaEntry.js', 'https://service-a-home.herokuapp.com/release/store.js', globalEventDistributor));
    loadingPromises.push(loadApp('service-b', ['/nested/1', '/nested/2'], 'https://service-b-nested.herokuapp.com/singleSpaEntry.js', null, globalEventDistributor));
    loadingPromises.push(loadApp('service-c', ['/list'], 'https://service-c-list.herokuapp.com/singleSpaEntry.js', null, globalEventDistributor));
    loadingPromises.push(loadApp('service-b-1', ['/nested/1'], 'https://service-b-nested-2.herokuapp.com/singleSpaEntry.js', 'https://service-b-nested-2.herokuapp.com/release/store.js', globalEventDistributor));
    loadingPromises.push(loadApp('service-b-2', ['/nested/2'], 'https://service-b-nested-1.herokuapp.com/singleSpaEntry.js', 'https://service-b-nested-1.herokuapp.com/release/store.js', globalEventDistributor));
    */
    loadingPromises.push(loadApp('header-service', ['/nested', '/nested/1', '/nested/2', '/home', '/list'], 'http://localhost:9001/header-service/singleSpaEntry.js', null, globalEventDistributor));
    loadingPromises.push(loadApp('left-menu-service', ['/nested', '/home', '/list'], 'http://localhost:9002/left-menu-service/singleSpaEntry.js', null, globalEventDistributor));
    loadingPromises.push(loadApp('service-a', ['/home'], 'http://localhost:9003/service-a/singleSpaEntry.js', 'http://localhost:9003/service-a/store.js', globalEventDistributor));
    loadingPromises.push(loadApp('service-b', ['/nested/1', '/nested/2'], 'http://localhost:9004/service-b/singleSpaEntry.js', null, globalEventDistributor));
    loadingPromises.push(loadApp('service-b-1', ['/nested/1'], 'http://localhost:9005/service-b-1/singleSpaEntry.js', 'http://localhost:9005/service-b-1/store.js', globalEventDistributor));
    loadingPromises.push(loadApp('service-b-2', ['/nested/2'], 'http://localhost:9006/service-b-2/singleSpaEntry.js', 'http://localhost:9006/service-b-2/store.js', globalEventDistributor));
    loadingPromises.push(loadApp('service-c', ['/list'], 'http://localhost:9007/service-c/singleSpaEntry.js', null, globalEventDistributor));

    await Promise.all(loadingPromises);

    singleSpa.start();
}

init();

