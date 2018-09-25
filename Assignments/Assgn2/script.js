function loopy() {
/* 
 Edit this function such that it returns {id, title, boxart} for every video in the movieLists. 
 Only boxart with dimensions of 150x200px should be selected.
 
Solve this problem with map(), reduce(), and filter(). 
*/
 
	var movieLists = [{
			name: "Instant Queue",
			videos: [{
					"id": 70111470,
					"title": "Die Hard",
					"boxarts": [{
							width: 150,
							height: 200,
							url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg"
						},
						{
							width: 200,
							height: 200,
							url: "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg"
						}
					],
					"url": "http://api.netflix.com/catalog/titles/movies/70111470",
					"rating": 4.0,
					"bookmark": []
				},
				{
					"id": 654356453,
					"title": "Bad Boys",
					"boxarts": [{
							width: 200,
							height: 200,
							url: "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg"
						},
						{
							width: 150,
							height: 200,
							url: "http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg"
						}

					],
					"url": "http://api.netflix.com/catalog/titles/movies/70111470",
					"rating": 5.0,
					"bookmark": [{
						id: 432534,
						time: 65876586
					}]
				}
			]
		},
		{
			name: "New Releases",
			videos: [{
					"id": 65432445,
					"title": "The Chamber",
					"boxarts": [{
							width: 150,
							height: 200,
							url: "http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg"
						},
						{
							width: 200,
							height: 200,
							url: "http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg"
						}
					],
					"url": "http://api.netflix.com/catalog/titles/movies/70111470",
					"rating": 4.0,
					"bookmark": []
				},
				{
					"id": 675465,
					"title": "Fracture",
					"boxarts": [{
							width: 200,
							height: 200,
							url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg"
						},
						{
							width: 150,
							height: 200,
							url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg"
						},
						{
							width: 300,
							height: 200,
							url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg"
						}
					],
					"url": "http://api.netflix.com/catalog/titles/movies/70111470",
					"rating": 5.0,
					"bookmark": [{
						id: 432534,
						time: 65876586
					}]
				}
			]
		}
	];

	var outList=[]

	for (i=0;i<movieLists.length;i++){
		movieItem = movieLists[i];
		for(j=0; j<movieItem.videos.length; j++){
			videoItem = movieItem.videos[j];
			boxartlength = videoItem.boxarts.length;
			boxItem = videoItem.boxarts[j];
			if (boxItem.width === 150 && boxItem.height === 200){
					outList.push({"id":videoItem.id, "title":videoItem.title,"boxart":boxItem.url});
			}  
		
		}

	}

	// Use one or more map, reduce, and filter calls to create an array with the following items
/* [{
			"id": 675465,
			"title": "Fracture",
			"boxart": "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg"
		},
		{
			"id": 65432445,
			"title": "The Chamber",
			"boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg"
		},
		{
			"id": 654356453,
			"title": "Bad Boys",
			"boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg"
		},
		{
			"id": 70111470,
			"title": "Die Hard",
			"boxart": "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg"
		}
	]; */

	return outList;

}

console.log(loopy());
