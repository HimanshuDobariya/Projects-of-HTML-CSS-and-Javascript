const container = document.querySelector('.container');
const userResult = document.querySelector('.user_result img');
const cpuResult = document.querySelector('.cpu_result img');
const result = document.querySelector(".result")
const optionImages = document.querySelectorAll(".option_image")


optionImages.forEach((image, index) => {
    image.addEventListener('click', (e) => {
        image.classList.add("active");

        userResult.src = cpuResult.src = 'images/rock.png';
        result.textContent = "Wait...";

        optionImages.forEach((image2, index2) => {
           if(index !== index2){
            image2.classList.remove('active');
           }
        });

        container.classList.add('start');
        
        let time = setTimeout(() => {
            
            container.classList.remove('start');

            let imgSrc = e.target.querySelector('img').src;
            userResult.src = imgSrc; 

            let randomNumber = Math.floor(Math.random() * 3);

            let cpuImage = ['images/rock.png', 'images/paper.png', 'images/scissor.png'];

            cpuResult.src = cpuImage[randomNumber];

            let userValue = ['R', 'P', 'S'][index];
            let cpuValue = ['R', 'P', 'S'][randomNumber];

            let outCome = {
                RR : "Draw",
                RP : "Cpu",
                RS : "User",
                PP : "Draw",
                PR : "User",
                PS : "Cpu",
                SS : "Draw",
                SR : "Cpu",
                SP : "User"
            };

            let outComevalue = outCome[userValue +  cpuValue];

            if(userValue  === cpuValue){
                result.textContent = "Match Draw";
            }else{
                result.textContent = `${outComevalue} Won!!`;
            }
        }, 2500);
    });
});