$(document).ready(function () {
  $('#loginForm').submit(function (event) {
    event.preventDefault();

    var username = 'api-token';
    var password =
      '6b9c55520adf1f895bd6db0b9a2c1bf9a653662428c77c994fe0951fa8fd4a74';
    var url =
      'https://apim.workato.com/integ/public-conversica-dynamics-v1/authenticationtest';
    var clientusername = $('#username').val();
    var clientpassword = $('#password').val();
    var payload = {
      username: clientusername,
      password: clientpassword,
    };

    var params = new URLSearchParams(payload).toString();
    url += '?' + params;

    fetch(url, {
      headers: new Headers({
        Authorization: 'Basic ' + btoa(username + ':' + password),
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem('link', data.link);
        window.location.href = 'connection.html';
      })
      .catch((error) => {
        console.error(error);
        alert('An error occurred. Please try again.');
      });
  });
});
