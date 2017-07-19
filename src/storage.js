let stores = {};
let storage = {
    setItem: function (k, v) {
        stores[k] = v;
    }, getItem: function (k) {
        return stores[k];
    }, removeItem: function (k) {
        delete stores[k];
    },
};
export default storage;
