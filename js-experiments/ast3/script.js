/* 
 Write a function such that it takes list of people with nested children and normalizes it as shown in example
*/

var people = [{
	id: 1,
	name: "Aegon Targaryen",
	children: [{
		id: 2,
		name: "Jaehaerys Targaryen",
		children: [{
			id: 4,
			name: "Daenerys Targaryen"
		},{
			id: 5,
			name: "Rhaegar Targaryen",
			children: [{
				id: 6,
				name: "Aegon Targaryen"
			}]
		}] 
	},{
		id: 3,
		name: "Rhaelle Targaryen"
	}],
}];



function normalize(people){
	
	var normalizedPeople=[];

	for (i=0;i<people.length;i++){
		peopleItem = people[i];
		childArray = checkChild(peopleItem);
		normalizedPeople.push({
			
				"id":peopleItem.id,
				"name":peopleItem.name,
				"children":childArray,
			

		});
		
		if (childArray.length !==0){
			for(j=0;j<childArray.length;j++){
				childItem = peopleItem.children[j];
				childArray=checkChild(childItem);
				normalizedPeople.push({
					
						"id":childItem.id,
						"name":childItem.name,
						"children":childArray,
						
				});
				if (childItem.children){
					for(k=0;k<childItem.children.length;k++){
						grandChildItem=childItem.children[k];
						grandChildArray=checkChild(grandChildItem);
						normalizedPeople.push({

							"id":grandChildItem.id,
							"name":grandChildItem.name,
							"children":grandChildArray,

						});

						if (grandChildItem.children){
							for(l=0;l<grandChildItem.children.length;l++){
								greatGrandChildItem=grandChildItem.children[l];
								greatGrandChildArray = checkChild(greatGrandChildItem);
								normalizedPeople.push({
									"id":greatGrandChildItem.id,
									"name":greatGrandChildItem.name,
									"children":greatGrandChildArray,
								});
							}
						}
					}
				}
			}
		}

		return normalizedPeople;
	}
}

function checkChild(peopleArray){
	var childIds=[];
	if (peopleArray.children){
		for (i=0;i<peopleArray.children.length;i++){
				childrenItem=peopleArray.children[i];
				childIds.push(childrenItem.id);
		}
	}
	else{
		childIds=[];
	}
	return childIds;
}

normal = normalize(people);
console.log(normal);







/*var output = {
	1: {
		id: 1,
		name: "Aegon Targaryen",
		children: [2, 3]
	},
	2: {
		id: 2,
		name: "Jaehaerys Targaryen",
		children: [4, 5]
	},
	3: {
		id: 3,
		name: "Rhaelle Targaryen",
		children: []
	},
	4: {
		id: 4,
		name: "Daenerys Targaryen",
		children: []
	},
	5: {
		id: 5,
		name: "Rhaegar Targaryen",
		children: [6]
	},
	6: {
		id: 6,
		name: "Aegon Targaryen",
		children: []
	}
}*/