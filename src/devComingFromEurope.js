function countDevelopers(list) {
    let europeanDev = 0;
    for (i = 0; i < list.length; i++) {
        if (list[i].continent === 'Europe' && list[i].language === 'JavaScript') {
            europeanDev++;
        } 
    };
    return europeanDev;
};

module.exports = countDevelopers;