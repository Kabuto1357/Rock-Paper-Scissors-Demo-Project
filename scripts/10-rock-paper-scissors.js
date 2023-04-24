 //When we load or reload the page, we will get the score info from our local storage
 //Converting from JSON string back to a JS Object.
            let score = JSON.parse(localStorage.getItem('score')) || {
                wins: 0,
                losses: 0,
                ties: 0
        };

        updateScoreElement();

        /*if(!score){
            //Null is a fasley value
            //Giving the score obj a default score if upon reset it is equal to null
            score = {
                wins: 0,
                losses: 0,
                ties: 0
            }
        }
        */

    function playGame(playerMove){
        const computerMove = pickComputerMove();

        let result = '';
        //Empty string to be re-assigned later.
        if (playerMove === 'scissors') {
            if (computerMove === 'rock') {
                result = 'You lose.';
            } else if (computerMove === 'paper') {
                result = 'You win.';
            } else if (computerMove === 'scissors') {
                result = 'Tie.';
            }
        //If else block comparing the computerMove with scissors button click.
        } else if (playerMove === 'paper') {
            if (computerMove === 'rock') {
                result = 'You win.';
            } else if (computerMove === 'paper') {
                result = 'Tie.';
            } else if (computerMove === 'scissors') {
                result = 'You lose.';
        }
        //If else block comparing the computerMove with paper button click.
        } else if (playerMove === 'rock') {
            if (computerMove === 'rock') {
                result = 'Tie.';
            } else if (computerMove === 'paper') {
                result = 'You lose.';
            } else if (computerMove === 'scissors') {
                result = 'You win.';
            }
    }
    //If else block comparing the computerMove with rock button click.   
        if(result === 'You win.'){
            score.wins += 1;
        }else if(result === 'You lose.'){
            score.losses += 1;
        }else if(result === 'Tie.'){
            score.ties += 1;
        }

    //After the score is updated we save the score in our local storage
    //Local storage only supports strings, so the code below is how to do it.
    localStorage.setItem('score', JSON.stringify(score));

    updateScoreElement();

    document.querySelector('.js-result').
    innerHTML = result;

    document.querySelector('.js-moves').
    innerHTML = `You chose: <img src="images/${playerMove}-emoji.png" class="move-icon">
        Computer Chose: <img src="images/${computerMove}-emoji.png" class="move-icon">`;
    }

    function updateScoreElement(){
        document.querySelector('.js-score')
        .innerHTML =`Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;

        
    }

    function pickComputerMove(){
            const randomNumber = (Math.random());
            //Random number between 0 and 1 will be chosen.
            let ComputerMove = '';
            //Empty string that will be later reassigned.
            if(randomNumber >= 0 && randomNumber < 1/3){
                ComputerMove ='rock';
            }else if(randomNumber >= 1/3 && randomNumber < 2/3){
                ComputerMove ='paper';
            }else if(randomNumber >= 2/3 && randomNumber < 1){
                ComputerMove ='scissors';
            }
            //If else block that based on the const randomNumber will reassign the ComputerMove str.
            return ComputerMove;
            //Returns the string back to the playGame function.
    };