const obj = {
    name: 'Vikram',
    getName() {
        return this.name;
    }
};
//this binding is lost when we refer a function to a const
//to restore that use bind method of JS
const getName = obj.getName.bind(obj);
console.log(getName());