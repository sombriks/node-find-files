/**
 * Created with JetBrains WebStorm.
 * User: bensudbury
 * Date: 26/03/13
 * Time: 2:18 PM
 * To change this template use File | Settings | File Templates.
 */
var start = new Date()
    
var finder = require("../dist/node-find-files.js");

console.log(finder);
var d = new Date()
d.setDate(d.getDate() - 1);

var finder = new finder({
    rootFolder : "/Users",
    fileModifiedDate : d
});


//    //  Alternate Usage to acheive the same goal, but you can use any of the properties of the fs.stat object or the path to do your filtering
//    var finder = new node_find_files({
//        rootFolder : "/Users",
//        filterFunction : function (path, stat) {
//            return (stat.mtime > d) ? true : false;
//        }
//    });


finder.on("match", function(strPath, stat) {
    console.log(strPath + " - " + stat.mtime);
})
finder.on("complete", function() {
    console.log("Finished");
    var end = new Date() - start
    console.info('Execution time: %dms', end);
})
finder.on("patherror", function(err, strPath) {
    console.log("Error for Path " + strPath + " " + err)
})
finder.on("error", function(err) {
    console.log("Global Error " + err);
})
finder.startSearch();
