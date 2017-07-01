(function(root, factory) {
    if(typeof module != 'undefined' && typeof exports == 'object') {
        module.exports = factory();
    } else {
        var obj = (root.$min == undefined) 
                    ? factory() : Object.assign(root.$min, factory());
        root.$min = obj;
    }
}(this, function() {
    var lib = {};

    lib.animate = function(elem, css, duration, callback) {
        
    };

    return lib;
}));