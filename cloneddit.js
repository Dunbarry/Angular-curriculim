console.log('Drone Online')
var postIdTrack=3;
var commentIdTrack=104

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
      image:'https://res.cloudinary.com/teepublic/image/private/s--6mhaHjOD--/t_Preview/b_rgb:262c3a,c_limit,f_jpg,h_630,q_90,w_630/v1446077807/production/designs/25252_0.jpg',
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
  };
  $scope.newComment={
    id:"",
    author:"",
    content:"",
    time:new Date(),
  };
})
