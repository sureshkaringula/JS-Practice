try {
    let num = 10;

    try {
        console.log("Dividing number...");
        let result = num / undefinedVar; // causes error
        console.log("Result:", result);
    } catch (innerError) {
        console.log("➡ Inner Catch Triggered");
        console.log("Inner Error Message:", innerError.message);

        // Re-throw with a different message
        throw new Error("Processing failed in inner block");
    }

} catch (outerError) {
    console.log("➡ Outer Catch Triggered");
    console.log("Outer Error Message:", outerError.message);
}
// testing git diff
