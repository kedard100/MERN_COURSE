
export const loadState=()=>{
    try{
        const localStorageState=localStorage.getItem("reduxState")
        if(!localStorageState) return undefined;
        return JSON.parse(localStorageState)
    }
    catch{}
}

export const saveState=(state)=>{
    console.log("state inside saveState",state)
    try{
        const localStorageState=JSON.stringify(state)
        localStorage.setItem("reduxState",localStorageState)
    }
    catch{}
}