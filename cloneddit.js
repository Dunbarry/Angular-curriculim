console.log('Drone Online')

var app = angular.module("cloneddit", []);

app.controller("clonedditController", function($scope){
  $scope.posts=[
    {
      id:0,
      title:'To Major Tom',
      author:'Ground Control',
      content:'You\'ve really made the grade. And the papers want to know who\'s shirt you wear. Now it\'s time to leave the capsule if you dare.',
      time: new Date(),
      comments:[
        {
        id:0,
        author:'Major Tom',
        content:'I\'m standing in the door, and I\'m floating in a most peculiar way.',
        time:new Date()
        }
      ],
      commentCount: 1,
      commentHold: 1,
      makeComment: 1,
      image:'http://www.kratostts.com/~/media/kratosdefense/images/interior/2%20column%20header%20images/satellite-communications.jpg',
      imageAlt:'Satelite field'
    },
    {
      id:1,
      title:'To Ground Control',
      author:'Major Tom',
      content:'Though I\'m passed 100,000 miles, I\'m feeling very still. And I think my spaceship knows which way to go. Tell my wife I love her very much.',
      time:new Date(),
      comments:[
        {
          id:0,
          author:'Ground Control',
          content:'She knows.',
          time:new Date(),
        },
        {
          id:1,
          author:'Ground Control',
          content:'Your circuit\'s dead; there\'s something wrong. Can you hear me Major Tom?',
          time:new Date(),
        }
      ],
      commentCount: 2,
      commentHold: 1,
      makeComment: 1,
      image:'http://3.bp.blogspot.com/-1wwXUsF55nI/VavipPh27BI/AAAAAAAAAa4/zE-H53Vg4EE/s1600/pale%2Bblue%2Bdot.jpg',
      imageAlt:'Astronaut on moon swing'
    },
    {
      id:2,
      title:'Hello',
      author:'Sputnik 2',
      content:'I am recieving you. Thanks for the dog food. I\'m somewhere above you now. Guess what Malashenkov: I took the collar off. I\'m holding my own leash and walking myself outside this door. I don\'t think I want to be your good dog anymore.',
      time:new Date(),
      comments:[
        {
          id:0,
          author:'Moscow',
          content:'To Sputnik 2: I think we\'re losing you. Your life signs are fading; we can\'t really say that we\'re surprised.',
          time:new Date(),
        }
      ],
      commentCount: 1,
      commentHold: 1,
      makeComment: 1,
      image:'https://s-media-cache-ak0.pinimg.com/originals/f3/93/5e/f3935ed40e62c27518e9004010b685a5.jpg',
      imageAlt:'Laika'
    }
  ];

  // POSTS
  $scope.idTrack=3;
  $scope.postForm=false;
  $scope.postFormReveal=function(){
    if($scope.postForm===false){
      $scope.postForm=true;
    }
    else if($scope.postForm=true){
      $scope.postForm=false;
    }
  };
  $scope.addPost={
    id:$scope.idTrack,
    title:"",
    author:"",
    content:"",
    time: new Date(),
    comments:[],
    commentCount: 1,
    commentHold: 1,
    makeComment: 1,
    image:"",
    imageAlt:""
  };
  $scope.newPost=function(){
    console.log($scope.addPost)
    $scope.posts.push($scope.addPost);
    $scope.idTrack=$scope.idTrack+1;
    $scope.postForm=false;
  };

  // COMMENTS
  $scope.commentShow=function(postToAlter){
    $scope.posts[postToAlter].commentHold=$scope.posts[postToAlter].commentHold+1;
  };
  $scope.commentFormShow=function(formToReveal){
    console.log(formToReveal)
    $scope.posts[formToReveal].makeComment=$scope.posts[formToReveal].makeComment+1;
  };
  $scope.addComment=function(postCommentedOn){
    $scope.posts[postCommentedOn].comments.push($scope.newComment);
    $scope.posts[postCommentedOn].makeComment=$scope.posts[postCommentedOn].makeComment+1;
    // $scope.posts[postCommentedOn].commentCount=$scope.posts[postCommentedOn].commentCount+1;
  };
  $scope.newComment={
    id:"",
    author:"",
    content:"",
    time:new Date(),
  };
})
