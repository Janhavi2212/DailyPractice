let data = [
    {
      "movieName": "The Shawshank Redemption",
      "actors": ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
      "rating": 4.8,
      "bestScenes": [
        {
          "title": "Andy Dufresne escapes from prison",
          "duration": "15 mins"
        },
        {
          "title": "Brooks was here",
          "duration": "10 mins"
        }
      ]
    },
    {
      "movieName": "The Godfather",
      "actors": ["Marlon Brando", "Al Pacino", "James Caan"],
      "rating": 4.9,
      "bestScenes": [
        {
          "title": "Horse head in bed",
          "duration": "5 mins"
        },
        {
          "title": "Cannoli scene",
          "duration": "3 mins"
        }
      ]
    },
    {
      "movieName": "The Dark Knight",
      "actors": ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
      "rating": 4.8,
      "bestScenes": [
        {
          "title": "Opening bank robbery",
          "duration": "12 mins"
        },
        {
          "title": "Why So Serious interrogation",
          "duration": "8 mins"
        }
      ]
    },
    {
      "movieName": "The Lord of the Rings: The Return of the King",
      "actors": ["Elijah Wood", "Viggo Mortensen", "Ian McKellen"],
      "rating": 4.9,
      "bestScenes": [
        {
          "title": "Ride of the Rohirrim",
          "duration": "10 mins"
        },
        {
          "title": "Frodo destroys the One Ring",
          "duration": "7 mins"
        }
      ]
    }
  ]


function bestScene(data){
    let op={movieName:"",longestSceneDuration:0}
    for(el of data){
        let dura=el.bestScenes.map((elm)=>{
          let  dura1=elm.duration.split(" ")
            ans=Number(dura1[0])
            return ans
        })
        for(duration of dura){
            if(op.longestSceneDuration<duration){
                op.longestSceneDuration=duration;
                op.movieName=el.movieName
            }    
        }
    }
    console.log(op)
}
bestScene(data)

function avgRating(data){
    let n=data.length
    let rating=data.reduce((acc,el)=>{
        return acc+Number(el.rating)
    },0)
    console.log(rating/n)
}
avgRating(data)

function ratingSort(data){
    data.sort((a,b)=>{
        if(b.rating>a.rating){
            return 1;
        }
        if(b.rating==a.rating){
            if(b.movieName>a.movieName){
                return 1;
            }
            else {
                return -1;
            }
        }
        if (b.rating<a.rating) {
            return -1;
        } 
        return 0;
    })
    console.log(data);
}
ratingSort(data)