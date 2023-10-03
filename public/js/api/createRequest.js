/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options) => { 
    const xhr = new XMLHttpRequest,
    formData = new FormData;
    xhr.responseType = 'json';
    let urls =  options.url;
    
    if (options.method === GET) {
     
        url = `${urls}?mail=${options.data.mail}&password=${options.data.password}`

        xhr.open( 'GET', url );
        xhr.send();


    } else { 

        for( key in options.data) {
            formData.append(key, options.data[key])
          }

        xhr.open( method, urls);
        xhr.send( formData );

     };

     const funcun =() => {

        if (xhr.status != 200) {
            callback(err);
            console.log(xhr.status, xhr.responseText);
          } else {
            callback(null, xhr.response);
          }
    }


     xhr.addEventListener('load', funcun);

}
