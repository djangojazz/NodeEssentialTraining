var fs = require("fs");

if(fs.existsSync("lib")) {
    console.log("Directory Already exists");
} else {
    fs.mkdir("lib", function(err) {
        if(err) {
            console.log(err);
        } else {
            console.log("Directory Created");
        }
    });
}

