const{ splitInParts } = require("../src");

Test.assertEquals(splitInParts("supercalifragilisticexpialidocious", 3), "sup erc ali fra gil ist ice xpi ali doc iou s")
Test.assertEquals(splitInParts("HelloKata", 1), "H e l l o K a t a")
Test.assertEquals(splitInParts("HelloKata", 9), "HelloKata")