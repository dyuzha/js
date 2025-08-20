// 'use strict';

/**
 * @param {string} from
 * @param {string} text
 */
function showMessage(from, text = "No text") {
    alert(`${from}: ${text}`);
}

showMessage("Anna", "Hi");
showMessage("Anna");
