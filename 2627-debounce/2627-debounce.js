/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function(fn, t) {
    let startTime = null;
    let setTimeoutId = null;
    
    return function(...args) {
        let currentTime = Date.now();
        startTime = startTime === null ? currentTime : startTime;
        let checkTime = currentTime;
      
        if (checkTime - startTime > t || checkTime - startTime <= 0) {
            clearTimeout(setTimeoutId);
            setTimeoutId = setTimeout(() => {
                fn(...args);
                startTime = null;
            }, t);
        } else {
            clearTimeout(setTimeoutId);
            setTimeoutId = setTimeout(() => {
              fn(...args);
            }, t);
            startTime = checkTime;
            return false;
        }
    }
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */