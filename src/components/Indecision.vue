<template>
    <img v-if="image" :src="image" alt="bg">
    <div class="bg-dark"></div>
    <div class="indecision-container">
        <input type="text" placeholder="Hazme una pregunta" v-model="question">
        <p>Recuerda terminar con un signo de interrojación (?)</p>
        <div>
            <h2>{{ question }}</h2>
            <h1 v-show="isValidQuestion">{{ answerDictionary[answer] }}</h1>
        </div>
    </div>
</template>

<script>
export default {

    data() {
        return {
            question: '',
            answer: 'Si, No, Pensando...',
            image:null,
            isValidQuestion: false,
            answerDictionary: {
                'yes': 'Si!',
                'no': 'No!',
                'maybe': 'Tal vez...'
            }
        }
    },
    methods: {
        async getAnswer() {
            this.answer = 'Pensando...'
            const {answer, image} = await fetch('https://yesno.wtf/api').then(r => r.json())
            this.answer = answer
            this.image = image
        }
    },
    watch: {
        question(value, oldValue) {
            this.isValidQuestion = false;

            console.log(value, oldValue);            
            if(!value.includes('?')) return

            this.isValidQuestion = true; 
            if(oldValue.includes('?')) return           
            this.getAnswer()
        }
    }    

}
</script>

<style scoped>
img,
.bg-dark {
    position: absolute;
    left: 0px;
    top: 0px;
    right: 0px;
    bottom: 0px;
    z-index: 0;
    min-height: 100%;
    min-width: 100%;
    background-position: center;
    background-position-x: center;
    background-position-y: center;
    background-size: cover;
    background-attachment: fixed;
}

.bg-dark {
    background-color: rgba(0, 0, 0, 0.4);
}

.indecision-container {
    position: relative;
    z-index: 99;
}

input {
    width: 250px;
    padding: 10px 15px;
    border-radius: 5px;
    border: none;
}

input:focus {
    outline: none;
}

p {
    color: white;
    font-size: 20px;
    margin-top: 5px;
}

h1,
h2 {
    color: white;
}

h1 {
    text-shadow:  0 10px rgb(0 0 0 / 25%), 0 2px 2px rgb(0 0 0 / 50%);
    font-size: 80px;
}

h2 {
    font-size: 40px;
    text-shadow:  0 5px rgb(0 0 0 / 25%), 0 2px 2px rgb(0 0 0 / 50%);
    margin-top: 10%;
}
</style>