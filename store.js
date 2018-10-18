const storekey = 'todos-vue';
export default {
    fetch:function(){
        return JSON.parse(window.localStorage.getItem('storekey' || '[]'))
    },
    save:function(items){
        window.localStorage.setItem('storekey',JSON.stringify(items));
    }
}