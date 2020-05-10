var splitInParts = function(s, partLength) {
    let str = "";
    for (i = 0; i < s.length; i+=partLength) {
        str += s.slice(i,i+partLength) + " ";
    }
    return str.trim();
}

module.exports = splitInParts;