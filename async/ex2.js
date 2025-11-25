function step1(){
    return new Promise((resolve) => {
        setTimeout(() => resolve("Step1 done"),1500);
    });
}
function step2(){
    return new Promise((resolve) => {
        setTimeout(() => resolve("Step2 done"),1500);
    });
}
function step3(){
    return new Promise((resolve) => {
        setTimeout(() => resolve("Step3 done"),1500);
    });
}
async function stepsLoader(){
    let result1 = await step1();
    console.log(result1);

     let result2 = await step2();
    console.log(result2);

    let result3 = await step3();
    console.log(result3);

    //simple way
    // console.log(await step1());
    // console.log(await step2());

    console.log("All steps completed.")
}
stepsLoader();