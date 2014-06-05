// JavaScript Document
$(document).ready(function() {
	$("#listingLabel").hover(function () {
		$(this).addClass("listingLabelMouseOver");
	}, function () {
		$(this).removeClass("listingLabelMouseOver");
	});
	
	$("#approvedJMMButton").click(function(){
		$("#approvedJMMList").toggle();
	});
	$("#approvedJMMButton").click(function(){
		$("#approvedJMMIcon").toggleClass("openedIcon");
	});
	$("#approvedJMMButton").hover(function () {
		$(this).addClass("libraryLabelMouseOver");
	}, function () {
		$(this).removeClass("libraryLabelMouseOver");
	});
	
	
	$("#approvedJMTButton").click(function(){
		$("#approvedJMTList").toggle();
	});
	$("#approvedJMTButton").click(function(){
		$("#approvedJMTIcon").toggleClass("openedIcon");
	});
	$("#approvedJMTButton").hover(function () {
		$(this).addClass("libraryLabelMouseOver");
	}, function () {
		$(this).removeClass("libraryLabelMouseOver");
	});
	
	
	$("#publicJMMButton").click(function(){
		$("#publicJMMList").toggle();
	});
	$("#publicJMMButton").click(function(){
		$("#publicJMMIcon").toggleClass("openedIcon");
	});
	$("#publicJMMButton").hover(function () {
		$(this).addClass("libraryLabelMouseOver");
	}, function () {
		$(this).removeClass("libraryLabelMouseOver");
	});
	
	
	$("#publicJMTButton").click(function(){
		$("#publicJMTList").toggle();
	});
	$("#publicJMTButton").click(function(){
		$("#publicJMTIcon").toggleClass("openedIcon");
	});
	$("#publicJMTButton").hover(function () {
		$(this).addClass("libraryLabelMouseOver");
	}, function () {
		$(this).removeClass("libraryLabelMouseOver");
	});
	
	
	$("#myJMMButton").click(function(){
		$("#myJMMList").toggle();
	});
	$("#myJMMButton").click(function(){
		$("#myJMMIcon").toggleClass("openedIcon");
	});
	$("#myJMMButton").hover(function () {
		$(this).addClass("libraryLabelMouseOver");
	}, function () {
		$(this).removeClass("libraryLabelMouseOver");
	});
	
	
	$("#myJMTButton").click(function(){
		$("#myJMTList").toggle();
	});
	$("#myJMTButton").click(function(){
		$("#myJMTIcon").toggleClass("openedIcon");
	});
	$("#myJMTButton").hover(function () {
		$(this).addClass("libraryLabelMouseOver");
	}, function () {
		$(this).removeClass("libraryLabelMouseOver");
	});
	
	
	$("#modelerLaunchButton").click(function(){
		$("#customlist").toggle();
	});
	$("#modelerLaunchButton").hover(function () {
		$(this).addClass("modelerLaunchButtonMouseOver");
	}, function () {
		$(this).removeClass("modelerLaunchButtonMouseOver");
	});
	
	$("#summaryExeButton").click(function(){
		$("#customlist").toggle();
	});
	$("#summaryExeButton").hover(function () {
		$(this).addClass("summaryButtonMouseOver");
	}, function () {
		$(this).removeClass("summaryButtonMouseOver");
	});
	
	$("#summaryEditButton").click(function(){
		$("#customlist").toggle();
	});
	$("#summaryEditButton").hover(function () {
		$(this).addClass("summaryButtonMouseOver");
	}, function () {
		$(this).removeClass("summaryButtonMouseOver");
	});
	
	$("#summaryValidateButton").click(function(){
		$("#customlist").toggle();
	});
	$("#summaryValidateButton").hover(function () {
		$(this).addClass("summaryButtonMouseOver");
	}, function () {
		$(this).removeClass("summaryButtonMouseOver");
	});
	
	$(".various").fancybox({
		maxWidth	: 1500,
		maxHeight	: 600,
		fitToView	: false,
		width		: '100%',
		height		: '100%',
		autoSize	: false,
		closeClick	: false,
		openEffect	: 'none',
		closeEffect	: 'none'
	});
});

function removeStartPage() {
	var x = document.getElementById("startPage");
	x.style.display = "none";
}

<!-- These functions are used to search the Info.xml and dynamically populate the summary section of the library-->
function setInfo(searchterm) { // search the index (duh!)
	// Create a connection to the file.
	var xhttp = new XMLHttpRequest();
	// Define which file to open
	xhttp.open("GET", "Info.xml", false);
	xhttp.setRequestHeader("Content-Type", "text/xml");
	// Send the request.
	xhttp.send(null);
	// Place the response in an XML document.
	var xmlDoc = xhttp.responseXML;

	// save all data for results to variables to load into array
	var allJMMs = xmlDoc.getElementsByTagName("JMM");
	var allSummaryName = xmlDoc.getElementsByTagName("SummaryName");
	var allSummaryDescription = xmlDoc.getElementsByTagName("SummaryDescription");
	var allSummaryShortName = xmlDoc.getElementsByTagName("SummaryShortName");
	var allSummaryProjClass = xmlDoc.getElementsByTagName("SummaryProjClass");
	var allSummarySponserOrg = xmlDoc.getElementsByTagName("SummarySponserOrg");
	var allSummaryPOCName = xmlDoc.getElementsByTagName("SummaryPOCName");
	var allSummaryPOCEmail = xmlDoc.getElementsByTagName("SummaryPOCEmail");
	var allSummaryPOCOrg = xmlDoc.getElementsByTagName("SummaryPOCOrg");
	var allSummaryPOCAssoc = xmlDoc.getElementsByTagName("SummaryPOCAssoc");
	var allSummaryApprovalStatus = xmlDoc.getElementsByTagName("SummaryApprovalStatus");
	var allSummaryApprovedBy = xmlDoc.getElementsByTagName("SummaryApprovedBy");
	var allSummaryApprovalDate = xmlDoc.getElementsByTagName("SummaryApprovalDate");
	var allSummaryVersionStatus = xmlDoc.getElementsByTagName("SummaryVersionStatus");
	var allSummaryVersionNumber = xmlDoc.getElementsByTagName("SummaryVersionNumber");
	var allSummaryVersionDate = xmlDoc.getElementsByTagName("SummaryVersionDate");
	var results = new Array;
	for (var i=0;i<allJMMs.length;i++) {
		// see if the XML entry matches the search term,
		// and (if so) store it in an array
		var name = allJMMs[i].lastChild.nodeValue;
		if (searchterm.search(/\(/) != -1) {
			parLocation = searchterm.search(/\(/);
			searchterm = searchterm.substring(0,parLocation);
		}
		var exp = new RegExp(searchterm,"i");
		if ( name.match(exp) != null) {
			results.push(allSummaryName[i]);
			results.push(allSummaryDescription[i]);
			results.push(allSummaryShortName[i]);
			results.push(allSummaryProjClass[i]);
			results.push(allSummarySponserOrg[i]);
			results.push(allSummaryPOCName[i]);
			results.push(allSummaryPOCEmail[i]);
			results.push(allSummaryPOCOrg[i]);
			results.push(allSummaryPOCAssoc[i]);
			results.push(allSummaryApprovalStatus[i]);
			results.push(allSummaryApprovedBy[i]);
			results.push(allSummaryApprovalDate[i]);
			results.push(allSummaryVersionStatus[i]);
			results.push(allSummaryVersionNumber[i]);
			results.push(allSummaryVersionDate[i]);
		}
	}
	// send the results to another function that displays them to the user
	showInfoResults(results);
	document.body.scrollTop = document.documentElement.scrollTop = 0;
}

function showInfoResults(results) {
	var summaryLocations = new Array("summaryName","summaryDescription", "summaryShortName","summaryProjClass","summarySponserOrg","summaryPOCName","summaryPOCEmail","summaryPOCOrg","summaryPOCAssoc","summaryApprovalStatus","summaryApprovedBy","summaryApprovedDate","summaryVersionStatus","summaryVersionNumber","summaryVersionDate");
	if (results.length > 0) {
		for (var i=0;i<results.length;i++) {
			var currentItemName = summaryLocations[i];
			var currentItem = document.getElementById(currentItemName);
			if (currentItem) {
				if ((results[i].firstChild) != null) {
					var currentItemText = document.createTextNode(results[i].lastChild.nodeValue);
				} else {
					var currentItemText = document.createTextNode("NA");
				}
				while(currentItem.hasChildNodes()) {
					currentItem.removeChild(currentItem.firstChild);
				}
				currentItem.appendChild(currentItemText);
			}
		}
	} else {
		for (var i=0;i<summaryLocations.length;i++) {
			var currentItemName = summaryLocations[i];
			var currentItem = document.getElementById(currentItemName);
			while(currentItem.hasChildNodes()) {
				currentItem.removeChild(currentItem.firstChild);
			}
		}
		var errorHere = document.getElementById("summaryName");
		var notfound = document.createTextNode("No information found in library");
		if (errorHere.hasChildNodes()) {
			errorHere.removeChild(errorHere.firstChild);
		}
		errorHere.appendChild(notfound);
	}
}
<!-- These functions are used to search the Info.xml and dynamically populate the summary section of the library-->

<!-- These functions are used to search the docs.xml and dynamically populate the docs section of the library-->
function setReferences(searchterm) { // search the index (duh!)
	// Create a connection to the file.
	var xhttp = new XMLHttpRequest();
	// Define which file to open
	xhttp.open("GET", "docs.xml", false);
	// Send the request.
	xhttp.send();
	// Place the response in an XML document.
	var xmlDoc = xhttp.responseXML;
	
	// save all data for results to variables to load into array
	var allJMMs = xmlDoc.getElementsByTagName("JMM");
	var allNames = xmlDoc.getElementsByTagName("name");
	var allFileURLs = xmlDoc.getElementsByTagName("fileURL");
	var allFileImgs = xmlDoc.getElementsByTagName("fileImg");
	var allClassifications = xmlDoc.getElementsByTagName("classification");
	var allVersionType = xmlDoc.getElementsByTagName("versionType");
	var allVersion = xmlDoc.getElementsByTagName("version");
	var allVersionUpdate = xmlDoc.getElementsByTagName("versionUpdate");
	results = new Array;
	for (var i=0;i<allJMMs.length;i++) {
		// see if the XML entry matches the search term,
		// and (if so) store it in an array
		var name = allJMMs[i].lastChild.nodeValue;
		if (searchterm.search(/\(/) != -1) {
			parLocation = searchterm.search(/\(/);
			searchterm = searchterm.substring(0,parLocation);
		}
		var exp = new RegExp(searchterm,"i");
		if ( name.match(exp) != null) {
			results.push(allNames[i]);
			results.push(allFileURLs[i]);
			results.push(allFileImgs[i]);
			results.push(allClassifications[i]);
			results.push(allVersionType[i]);
			results.push(allVersion[i]);
			results.push(allVersionUpdate[i]);
		}
	}
	// send the results to another function that displays them to the user
	showReferenceResults(results, searchterm);
}

function showReferenceResults(results) {	
	var totalResults = results.length;
	var totalRows = totalResults/7;
	var counter = 0;
	if (results.length > 0) {
		// if there are any results, put them in a list inside the "resultshere" div
		var resultsHere = document.getElementById("referenceTable");
		while(resultsHere.childElementCount > 1) {
			resultsHere.removeChild(resultsHere.lastChild);
		}
		for (var i=0;i<totalRows;i++) {
			var tableRow = document.createElement("tr");
			resultsHere.appendChild(tableRow);
			for (var x=0;x<7;x++) {
				if (x==1) {
					var tableCell = document.createElement('td');
					var aElement = document.createElement('a');
					aElement.setAttribute('href',results[counter].lastChild.nodeValue);
					counter = counter + 1;
					aElement.setAttribute('target','_blank');
					var imgElement = document.createElement('img');
					imgElement.setAttribute('src',results[counter].lastChild.nodeValue);
					tableRow.appendChild(tableCell);
					tableCell.appendChild(aElement);
					aElement.appendChild(imgElement);
					x=x+1;
					counter = counter + 1;
				} else {
					var tableCell = document.createElement("td");
					var paraItem = document.createElement("p");
					var item = document.createTextNode(results[counter].lastChild.nodeValue);
					tableRow.appendChild(tableCell);
					tableCell.appendChild(paraItem);
					paraItem.appendChild(item);
					counter = counter +1
				}
			}
		}
	} else {
		var errorHere = document.getElementById("referenceTable");
		while(errorHere.childElementCount > 1) {
			errorHere.removeChild(errorHere.lastChild);
		}
	}
	
}
<!-- These functions are used to search the docs.xml and dynamically populate the docs section of the library-->

function setSPR(processDefId) {
	document.getElementById("diagramLink").setAttribute('href','/activiti-explorer/diagram-viewer/index.html?processDefinitionId=' + processDefId);
	document.getElementById("diagramImage").setAttribute('src','/activiti-rest/service/process-definition/' + processDefId + '/diagram');
}

function setEditDiagram(name) {
	var editorId = "259926";
	if (name == "Joint Fires") {
		editorId = "259924";
	};
	if (name == "JPR (Joint Personnel Recovery)") {
		editorId = "261213";
	}
	if (name == "JPRMT (Joint personnel Recovery Mission Thread)") {
		editorId = "261215";
	}
	if (name == "Joint Close Air Support") {
		editorId = "259926";
	}
	document.getElementById("summaryEditButton").setAttribute('onclick',"open_win('/activiti-explorer/service/editor?id=" + editorId +"')");
}

function setRightSide(processDef, name) {
	removeStartPage();
	setInfo(name);
	setReferences(name);
	setSPR(processDef);
	setEditDiagram(name);
}

function open_win(URL) {
	window.open(URL);
}

function open_win_self(URL) {
	window.open(URL,"_self");
}