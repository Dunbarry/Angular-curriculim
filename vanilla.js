console.log('Drone online.')
$('#name').keyup(function(){
  var name=$('#name').val()
  console.log(name)
  $('#namePlace').text('My name is '+name)
})
