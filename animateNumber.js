(function(root, factory) {
    if(typeof module != 'undefined' && typeof exports == 'object') {
        module.exports = factory();
    } else {
        root.$min = factory();
    }
}(this, function() {
    let lib = {};

    lib.animateNumber = function(elem, targetNumber, duration, callback) {
        let startNumber = elem.innerHTML;

        if(isNaN(startNumber)) {
            console.warn('not a number');
            return;
        }
        startNumber = parseInt(startNumber);

        let startTime = new Date().valueOf();

        function exec() {
            let passed = new Date().valueOf() - startTime;
            let percent = passed / duration;

            if(passed <= duration) {
                let changed = startNumber + parseInt(targetNumber, 10) * percent;

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