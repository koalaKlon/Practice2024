// variant 3
function getRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
}

function randomDelayPromise() {
    return new Promise((resolve, reject) => {
        const randomNumber = getRandomNumber();
        const delay = randomNumber * 1000; 

        console.log(`Сгенерировано число: ${randomNumber}, задержка: ${delay} мс`);

        setTimeout(() => {
            if (randomNumber <= 5) {
                resolve(`Успех: Сгенерировано число ${randomNumber}`);
            } else {
                reject(new Error(`Ошибка: Сгенерировано число ${randomNumber}`));
            }
        }, delay);
    });
}

randomDelayPromise()
    .then(message => {
        console.log(message);
    })
    .catch(error => {
        console.error(error.message);
    });
