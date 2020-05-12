import LocalStorage from './LocalStorage.js';
import Task from './Task.js';

export default class App extends LocalStorage {
    constructor({ name, appContainer, adToDoForm }) {
        super(name);
        this.appContainer = appContainer;
        adToDoForm.addEventListener('submit', this.onAddTask);
    }

    getInitialState = () => new Promise((res)=>{
        setTimeout(()=>{
            const state = this.state
            console.log(state)
            return res(state)
        },1000)
    });

    async fetchTodo(){
        const tasks = await fetch ('http://localhost:3000/todo');
        const res = await tasks.json()
        return res
    }

    validateFormValue = (form, name) => form?.get(name)?.length > 2;

    onAddTask = (event) => {
        event.preventDefault();
        const { target } = event;
        const form = new FormData(target);
        const text = form.get('add');
        if (!text) return null;

        const appList = this.appContainer.querySelector('.to-do__list');

        const toDo = {
            text,
            isDone: 0,
            date: Date.now(),
        };

        if (this.validateFormValue(form, 'add')) {
            const newTask = new Task(toDo);
            newTask.save();
            appList.prepend(newTask.element.wrapper);
            target.reset();
        }
    };

    render = () => {
        this.getInitialState().then((res) => {
            console.log('State: '+res)
            if(!res.length){
                this.fetchTodo().then(data =>{
                    this.state=data
                })
            }
            else {console.log('Didn\'t fetch')}
        }).catch( err =>{
            console.log('Cannot get initial state: '+err)
        })
        
        const state = this.state;
        const list = document.createElement('ul');
        list.className = 'to-do__list';
        const appList = this.appContainer.querySelector('.to-do__list');
        
        state.forEach((item) => {
            const itemTodo = new Task(item);
            list.appendChild(itemTodo.element.wrapper);
        });

        if (appList) appList.parentNode.replaceChild(list, appList);
    };
}