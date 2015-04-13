/*global cordova, module*/
    window.greet =  function (name, successCallback, errorCallback) {
		alert("in plugin greet");
        cordova.exec(successCallback, errorCallback, "Hello", "greet", [name]);
	}

