try {
    try {
        console.log(x); // x not defined
    } catch (innerError) {
        console.log("Inner error:", innerError.message);
        throw new Error("Outer level failure");
    }
} catch (outerError) {
    console.log("Outer error:", outerError.message);
}
