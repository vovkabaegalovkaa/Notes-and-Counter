const App ={
    data() {
        return {
            placeholder: "Enter note text",
            text: "Notes",
            inputValue: "",
            notes: []
        }
    },
    methods:{//так же как раньше создавали переменные, создаем методы
        inputListener(){
            this.inputValue = event.target.value;/*для обращения к переменной inputValue используется ключевое слово this, указывающее на
            текущий объект(App)*/
        },
        addNote(){
            if(this.inputValue != ""){
                this.notes.push(this.inputValue);
                console.log(this.notes);
                this.inputValue = "";
            }
        },
        inputKey(){
            if(event.key == "Enter"){
                this.addNote();
            }
        },
        removeNote(index){
            this.notes.splice(index, 1);
        },
        //мы можем использовать методы в интерполяции({{ ... }}, в том случае, если метод возвращает строку)
        upperCase(item) {
            return item.toUpperCase();
        }
    }
}

Vue.createApp(App).mount("#app");