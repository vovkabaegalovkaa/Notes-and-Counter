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
            this.inputValue = event.target.value;/*для обращения к переменной inputValue используется ключевое слово this, 
            указывающее на текущий объект(App)*/
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
        doubleCount(){
            return this.notes.length * 2;
        },//не используем, так как вызывается миллион раз будет лагать
        removeNote(index){
            this.notes.splice(index, 1);
        },
        //мы можем использовать методы в интерполяции({{ ... }}, в том случае, если метод возвращает строку)
        upperCase(item) {
            return item.toUpperCase();
        }
    }, 
    computed:{/*тут так же прописываются методы, но которые должны что-то возвращать и взаимодействуют 
        с переменными из объекта data, 
        !!!!!!К ФУНКЦИЯМ ИЗ ЭТОГО БЛОКА ВСЕГДА ОБРАЩЕНИЕ ИДЕТ БЕЗ ПАРАМЕТРОВ!!!!!!!*/
        doubleCountComputed(){
            return this.notes.length * 2;
        }
    },
    watch:{//объект, с помощью которого мы следим за состояним переменных из datа.
        inputValue(value){/*для создания такого наблюдателя создаем метод с названием переменной, за которой ведется наблюдение,
            теперь каждый раз при ее изменении будет запускаться этот метод и в него будет передаваться новое значение переменной*/
            console.log(value);
            //Это например удобно использовать при валидации
            if(value.length > 10){
                this.inputValue = value.substr(0, 10);
            }
        }
    }
}

Vue.createApp(App).mount("#app");