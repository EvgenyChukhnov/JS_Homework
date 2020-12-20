var xhr = new XMLHttpRequest(),
    jsonDataParsed = {};
    statusType = '';

    // xhr.open('GET', 'https://reqres.in/api/usersq/23', true);
    xhr.open('GET', 'https://reqres.in/api/users?page=2', true);
xhr.send();

xhr.onload = function() {

    statusType = +String(this.status)[0];
        try {
            if (statusType === 2) {
                try {;
                jsonDataParsed = JSON.parse(this.response).data;
                // jsonDataParsed = JSON.parse(this.response1).data;
                } catch (e) { 
                    if (!jsonDataParsed.length) { throw new Error ('no data - something went wrong'); }
                };
                    console.log(jsonDataParsed);
            } else if (statusType === 4) {
                throw { message: ' - client side error'};
            } else if (statusType === 5) {
                throw { message: ' - server side error'};
            } else {
                throw new Error ('unknown error');
            }
 
        } catch (e) {
            console.error(e.message);
        };
        console.log('after Error');
};