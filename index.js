var page = require('webpage').create();
page.viewportSize = {
  width: 1024,
  height: 800
};
var system = require('system');
var args = system.args;
// check args
if(args.length != 3) {
	throw new Error("arugments invalid")
}
page.open(args[1], function() {
  page.render(args[2]);
  phantom.exit();
});
