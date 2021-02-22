export default {

    getArray(key){
        if(key) {
            const retornoString = localStorage.getItem(key);
            return retornoString ?  JSON.parse(retornoString) : [];
        }
        return [];
    },

    setArray(key, list = []){
        if(key){
            localStorage.setItem(key, JSON.stringify(list));
        }
    }

}