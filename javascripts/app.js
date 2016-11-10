Promise.all([Explode.getMyData('data/categories.json'), Explode.getMyData('data/categories.json'), Explode.getMyData('data/categories.json')])
.then( (allTheStuff) => {
	Explode.populateData(allTheStuff);
})
.then( () => {
	Explode.populateSelect(allTheStuff);
})
.then( () => {
	$("#categories").change( (event) => {
		$("#insertHere").html('');
		Explode.displayProduct($("categories").val());
	});
});