function get_token(token){
    var str = 'anonymous';

    var url = "https://locslab.com/api/v1/token-auth/";

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