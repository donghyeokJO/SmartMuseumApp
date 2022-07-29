function get_token(token){
    var str = 'anonymous';

    var url = "http://59.19.102.174:8888/api/v1/token-auth/";

    fetch(url,{
        method: "POST",
        body: JSON.stringify({
            username: str,
            password: str
        }),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    }).then((response) => response.json())
      .then(response => {
        console.log(response);
        token = 'JWT ' + response.access;
        return token
      })
}