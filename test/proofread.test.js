const proofread = require("../src/proofread");

describe ("proofread",() => {
    test("proofread",() => {  
        expect(proofread("ThiEr DEcIEt wAs INconcIEVablE. sHe SIeZeD thE moMENT.")).toBe("Their deceit was inconceivable. She seized the moment."); 
        expect(proofread("HIs nieghBOur wAs oVerwieGht.")).toBe("His neighbour was overweight."); 
        expect(proofread("SHe rEcieveD a pIegNor.")).toBe("She received a peignor.");  
    });
});