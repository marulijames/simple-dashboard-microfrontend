import * as singleSpa from 'single-spa'; 
export function hashPrefix(prefixes) {
    return function (location) {
        return prefixes.some(prefix => location.hash.startsWith(`#${prefix}`));
    }
}

export function runScript(url, globalVarName) {
    return new Promise((resolve, reject) => {
        const scriptEl = document.createElement('script');
        scriptEl.src = url;
        scriptEl.async = true;
        scriptEl.onload = () => resolve(window[globalVarName]);
        scriptEl.onerror = err => reject(err);
        document.head.appendChild(scriptEl);
    });
}
export async function loadApp(name, hash, appURL, storeURL, globalEventDistributor) {
    let storeModule = {}, customProps = { globalEventDistributor: globalEventDistributor };

    try {
        //Use runScript for deployment, use SystemJS.import() on local machine
        //storeModule = storeURL ? await runScript(storeURL,name) : { storeInstance: null };
        storeModule = storeURL ? await SystemJS.import(storeURL,name) : { storeInstance: null };
        
    } catch (e) {
        console.log(`Could not load store of app ${name}.`, e);
    }

    if (storeModule.storeInstance && globalEventDistributor) {
        customProps.store = storeModule.storeInstance;
        globalEventDistributor.registerStore(storeModule.storeInstance);
    }

    singleSpa.registerApplication(name, () => runScript(appURL, name), hashPrefix(hash), customProps);
}