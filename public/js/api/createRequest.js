/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => { // как тут написать пинимаемые значения?
    const xhr = new XMLHttpRequest,
    formData = new FormData;
    xhr.responseType = 'json';
    
    if ('тут нужно написать, если(запрос GET, то выполняем то что ниже)') {
        const funcun =() => {

            if(xhr.readyState === xhr.DONE) {
                callback(xhr.response ) 
                
            } else {
                callback(err)
            }
    
        }
        

        xhr.open( 'GET', 'https://example.com?mail=ivan@biz.pro&password=odinodin' ); // тут в ссылке mail и password, берутся значения которые принимаютсяcreateRequest?
        xhr.send();

        xhr.addEventListener('readystatechange', funcun)


    } else { //'тут соответственно если не GET

        const funcun =() => {

            if(xhr.readyState === xhr.DONE) {
                callback(xhr.response ) 
                
            } else {
                callback(err)
            }
    
        }



        formData.append( 'mail', 'ivan@biz.pro' ); // тут в ссылке mail и password, берутся значения которые принимаютсяcreateRequest?
        formData.append( 'password', 'odinodin' );

        xhr.open( 'POST', 'https://example.com' );
        xhr.send( formData );

        xhr.addEventListener('readystatechange', funcun)
    }

  

};
