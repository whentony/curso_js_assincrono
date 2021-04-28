const http = new XMLHttpRequest();

http.open('GET', 'https://viacep.com.br/ws/01001000/json/');



const teste = () => {

    const promise = new Promise((resolve, reject) => {
        if(http.status >= 400){
            reject(JSON.parse(http.res))
        }
        http.onload = () => {
            const data = JSON.parse(http.response)
            console.log(data.cep)
        }
        http.send();
    })
    console.log(promise)
    return promise
}
teste()
