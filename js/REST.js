// JavaScript Document
function JMMViewModel() {
	var self = this;
	self.jmmURI = '/activiti-rest/service/repository/process-definitions?size=1000';
	self.username = "kermit";
	self.password = "kermit";
	self.JMM = ko.observableArray();

	self.ajax = function(uri, method, data) {
		var request = {
			url: uri,
			type: method,
			contentType: "application/json",
			accepts: "application/json",
			cache: false,
			dataType: 'json',
			data: JSON.stringify(data),
			beforeSend: function (xhr) {
				xhr.setRequestHeader("Authorization", 
					"Basic " + btoa(self.username + ":" + self.password));
			},
			error: function(jqXHR) {
				console.log("ajax error " + jqXHR.status);
			}
		};
		return $.ajax(request);
	}
	
	self.ajax(self.jmmURI, 'GET').done(function(data) {
		for (var i = 0; i < data.data.length; i++) {
		self.JMM.push({
				name: ko.observable(data.data[i].name),
			});
		}
	});
}
ko.applyBindings(new JMMViewModel(), $('#main')[0]);