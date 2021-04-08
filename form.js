class Form {
    constructor() {

        this.question=createElement('h3')
        this.answer = createInput("Enter the right choice")
        this.submit = createButton("Submit")
        this.happiness = createElement('h3')

    }
    display() {
        var title = createElement('h1')
        title.html('Welcome To My Game !!')
        title.position(150, 50)
        var content = createElement('h3')
        content.html('This is a life happiness simulator you are given decisions and based on that your happiness.<br> The decisons will either increase or decrease,you need to try and live the happiest life ')
        content.position(90, 150)

        var Button = createButton('Enter')
        Button.position(950, 480)

        Button.mousePressed(() => {
            title.hide()
            content.hide()
            Button.hide()
           
            this.question.position(80,80)
            this.question.html('Q. What is your favourite toy? ')

            choice1 = createElement('h4')
            choice2 = createElement('h4')
            choice3 = createElement('h4')
            choice4 = createElement('h4')

            choice1.html('A. Barbie')
            choice2.html('B. Car')
            choice3.html('C. Superhero')
            choice4.html('D. Phone')

            choice1.position(200,200)
            choice2.position(200,230)
            choice3.position(200,260)
            choice4.position(200,290)

            
             
            this.answer.position(500,250)         
            this.submit.position(700,250)
       
            this.submit.mousePressed(()=>{
                score = score + 100;
           })   
   
           this.happiness.position(400, 400)
           this.happiness.html('Happiness: ' + score + ' %')
   
       
          
        });


        
}
}

