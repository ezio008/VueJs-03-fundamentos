<template>
    <h2> {{ title }}</h2>
    <p> {{ counter }} <sup>2</sup> = {{ squareCounter }} </p>
    <div>
        <button @click="increase">+1</button>
        <button @click="decrease">-1</button>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: 'Counter'
        },
        start: {
            type: Number,
            default: 5,
            validator(value) {
                return value > 0;
            }
        }        
    },
    // name:'Counter'
    data() {
        return {
            counter: this.start
        }
    },
    methods: {
        // getSquare(pot) {
        //     console.log('getSquare')
        //     return Math.pow(this.counter, pot)
        // },
        increase() {
            this.counter++
        },
        decrease() {
            this.counter--
        }
    },
    computed: {
        squareCounter() {
            // console.log('ComputerSquare');
            return Math.pow(this.counter, 2);
        }
    }
}
</script>

<style>
button {
    background-color: #64BB87;
    border-radius: 5px;
    border: 1px solid white;
    color: white;
    cursor: pointer;
    margin: 0 5px;
    padding: 5px 15px;
    transition: 0.3s ease-in-out;
}

button:hover {
    background-color: darkgreen;
    transition: 0.3s ease-in-out;
}
</style>