import event from 'jm-event';
import logger from 'jm-logger';
import utils from 'jm-utils';
import err from 'jm-err';
import mdl from 'jm-module';
import storage from './storage';

/**
 * @class
 */
class Sdk {

    /**
     * @constructor
     */
    constructor(opts = {}) {
        this.storage = global.localStorage || storage;
        err.enableErr(this);
        mdl.enableModule(this);
        this
            .use(event.moduleEvent)
            .use(logger.moduleLogger)
            .use(utils.moduleUtils)
        ;
        event.enableEvent(this);
        this.init(opts);
    }

    init(opts = {}) {
        this.emit('init', opts);
    }

}

if (typeof global !== 'undefined' && global) {
    global.jm || (global.jm = {});
    let jm = global.jm;
    if (!jm.sdk) {
        jm.sdk = new Sdk();
    }
}

export default Sdk;
