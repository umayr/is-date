module.exports = function(value) {
	var regex = /(^\d{1,4}[\.|\\/|-]\d{1,2}[\.|\\/|-]\d{1,4})(\s*(?:0?[1-9]:[0-5]|1(?=[012])\d:[0-5])\d\s*[ap]m)?$/;
    if (this.toString.call(value) === '[object Date]') {
        return true;
    }
    if (typeof value.replace === 'function') {
        value.replace(/^\s+|\s+$/gm, '');
    }

    return regex.test(value);
};
