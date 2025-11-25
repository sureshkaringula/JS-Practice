function step1(){
    return new Promise(resolve => {
        setTimeout(() => resolve( "Step-1 Completed..."),2000);
    } );
}
function step2(){
    return new Promise(resolve => {
        setTimeout(() => resolve( "Step-2 Completed..."),2000);
    } );
}
function step3(){
    return new Promise(resolve => {
        setTimeout(() => resolve( "Step-3 Completed..."),2000);
    } );
}
function step4(){
    return new Promise(resolve => {
        setTimeout(() => resolve( "Step-4 Completed..."),3000);
    } );
}
async function test(){
    console.log("Started......");
    let result1 = await step1();
    console.log(result1);
    let result2 = await step2();
    console.log(result2);
    let result3 = await step3();
    console.log(result3);
    let result4 = await step4();
    console.log(result4);
    console.log("End.......");
}
test();