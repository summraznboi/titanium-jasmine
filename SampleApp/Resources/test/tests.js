(function(){
	if (sampleapp.tests_enabled) {
		var jasmine = require('/test/lib/jasmine-1.1.0');
		Ti.include('/test/lib/jasmine-titanium.js');
		
		// Include all the test files
		Ti.include('/test/test_main.js');

		for (name in jasmine) {
			Titanium.API.debug(name);
		}

		jasmine.jasmine.getEnv().addReporter(new jasmine.TitaniumReporter());
		jasmine.jasmine.getEnv().execute();
	}
})();
