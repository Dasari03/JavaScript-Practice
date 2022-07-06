

const myPromise = (URL)=> {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{

            const pages = {
                '/about' : {
                    myBirthMonth : 'September',
                    myLocation : 'California'
                },
                '/contact' : {
                    email : 'myEmail.gmail.com'
                }

            }

            if(pages[URL]){
                resolve({status : '200...'}, pages[URL])
            }else {
                reject({status : '404...'})
            }
        }, 2000)
    })
}

myPromise('/about').then((res)=> {
    console.log(res.status);
}).catch((err)=> {
    console.log(err.status);
})