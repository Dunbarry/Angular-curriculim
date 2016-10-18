var app = angular.module("cloneddit", ['angularMoment']);

app.controller("clonedditController", function($scope){
  $scope.posts=[
    {
      id:0,
      title:'To Major Tom',
      author:'Ground Control',
      content:'You\'ve really made the grade. And the papers want to know who\'s shirt you wear. Now it\'s time to leave the capsule if you dare.',
      time: moment().format(),
      votes: 11,
      comments:[
        {
        id:0,
        author:'This is Major Tom',
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
      title:'Past 100,000 miles',
      author:'This is Major Tom',
      content:'I\'m feeling very still. And I think my spaceship knows which way to go. Tell my wife I love her very much.',
      time:moment().format(),
      votes: 8,
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
      imageAlt:'Pale Blue Dot'
    },
    {
      id:2,
      title:'Hello',
      author:'Sputnik 2',
      content:'I am recieving you. Thanks for the dog food. I\'m somewhere above you now. Guess what Malashenkov: I took the collar off. I\'m holding my own leash and walking myself outside this door. I don\'t think I want to be your good dog anymore.',
      time: moment().format(),
      votes: 3,
      comments:[
        {
          id:0,
          author:'Moscow',
          content:'To Sputnik 2: I think we\'re losing you. Your life signs are fading; we can\'t really say that we\'re surprised.',
          time:new Date(),
        }
      ],
      commentCount: 0,
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
  $scope.newTime= Date.now()
  $scope.addPost={
    id:$scope.idTrack,
    title:"",
    author:"",
    content:"",
    time: $scope.newTime,
    votes: 0,
    comments:[],
    commentCount: 0,
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

  // VOTES
  $scope.upVote=function(postVotedOn){
    $scope.posts[postVotedOn].votes=$scope.posts[postVotedOn].votes+1;
  };
  $scope.downVote=function(postVotedOn){
    $scope.posts[postVotedOn].votes=$scope.posts[postVotedOn].votes-1;
  };

  // COMMENTS
  $scope.commentShow=function(postToAlter){
    $scope.posts[postToAlter].commentHold=$scope.posts[postToAlter].commentHold+1;
  };
  $scope.commentFormShow=function(formToReveal){
    $scope.posts[formToReveal].makeComment=$scope.posts[formToReveal].makeComment+1;
  };
  $scope.addComment=function(postCommentedOn){
    $scope.posts[postCommentedOn].comments.push($scope.newComment);
    $scope.posts[postCommentedOn].makeComment=$scope.posts[postCommentedOn].makeComment+1;
    $scope.posts[postCommentedOn].commentCount=$scope.posts[postCommentedOn].commentCount+1;
  };
  $scope.newComment={
    id:"",
    author:"",
    content:"",
    time:new Date(),
  };
})

app.controller("switchesAndKnobs", function($scope){
  $scope.sortSelector=function(){
    if($('#switch').hasClass('selector2')){
      $('#switch').removeClass('selector2');
      $('#switch').addClass('selector1');
    }
    else if($('#switch').hasClass('selector1')){
      $('#switch').removeClass('selector1');
      $('#switch').addClass('selector3');
    }
    else if($('#switch').hasClass('selector3')){
      $('#switch').removeClass('selector3');
      $('#switch').addClass('selector2');
    }
  };
})
