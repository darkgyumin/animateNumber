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

    lib.animateNumber = function(elem, targetNumber, duration, callback) {
        var startNumber = elem.innerHTML;

        if(isNaN(startNumber)) {
            console.warn('not a number');
            return;
        }
        startNumber = parseInt(startNumber);

        var startTime = new Date().valueOf();

        function exec() {
            var passedTime = new Date().valueOf() - startTime;
            var percent = passedTime / duration;

            if(passedTime <= duration) {
                var changed = startNumber + parseInt(targetNumber, 10) * percent;

                elem.innerHTML = Math.floor(changed);

                setTimeout(exec, 0);
            } else {
                elem.innerHTML = targetNumber;
                
                if(typeof callback === 'function') {
                    callback(elem);
                }
            }
        }

        exec();
    };

    return lib;
}));