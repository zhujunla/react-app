// 封装localstorage和sessionstore的使用；

export function setLocal(name,value){
    let data = value;
    if(typeof data !== 'string'){
        if(typeof data === undefined){
            data = null
        }else{
            data = JSON.stringify(value);
        }
    }
    localStorage.setItem(name,data);
}

export function setSession(name,value){
    let data = value;
    if(typeof data !== 'string'){
        if(typeof data === undefined){
            data = null
        }else{
            data = JSON.stringify(value);
        }
    }
    localStorage.setItem(name,data);
}

export function getSession(name){
    var data = sessionStorage.getItem(name);
    try{
        return JSON.parse(data);
    }catch(e){
        return e;
    }
}


export function getLocal(name){
    var data = localStorage.getItem(name);
    try{
        return JSON.parse(data);
    }catch(e){
        return e;
    }
}


export function delLocal(name){
    if(localStorage.getItem(name)){
        localStorage.removeItem(name);
    }
    if(sessionStorage.getItem(name)){
        sessionStorage.removeItem(name);
    }
}

export function clear() { 
    sessionStorage.clear();
    localStorage.clear();
 }