// Immediately Invoked Function Expressions (IIFE)


(function cookedLemon() {
    console.log(`DB CONNECTED`);
})();

(  (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('pratap')

