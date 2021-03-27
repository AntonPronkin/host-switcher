import Url from "url-parse";

export default class BaseHandlerManager {
    constructor({ storage }) {
        this.storage = storage;
    }

    async switchHost(host) {
        const currentUrl = await this.getCurrentUrl();

        let url = new Url(currentUrl);
        url.set('host', host.value);

        return await this.doSwitchHost(url.href);
    }

    async addHost({ name, value }) {
        return await this.storage.addHost({ name, value });
    }

    async getCurrentUrl() {
        throw new Error("The getCurrentUrl must be implemented in a specific handler manager.");
    }

    async doSwitchHost(newUrl) {
        throw new Error("The getCurrentUrl must be implemented in a specific handler manager.");
    }
}
