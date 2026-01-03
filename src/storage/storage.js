const STORAGE_KEY = "todoAppData";

function save(projects){
    localStorage.setItem(STORAGE_KEY,JSON.stringify(projects));
}

function load(){
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return null;
    return JSON.parse(data);
}

export default {
    save,
    load,
};