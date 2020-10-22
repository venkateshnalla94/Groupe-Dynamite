
console.log("Groupe Dynamite Problem One");

input=[1,2,3,4,5]
/**
 * To add the values of array
 * @param {*} input |A array of numbers
 */
const sum=(input)=>{
	const reducer = (accumulator, currentValue) => accumulator + currentValue;
	return input.reduce(reducer,0)
}

console.log(sum(input));


console.log("Groupe Dynamite Problem three");
/**
 * To check the value and give the corresponding rating to the associated value
 * @param {3.5} number |A number between 0 to 5
 */

const checkStars=(number)=>{
    let output=[];
    const integerValue=parseInt(number);
    const decimalValue= number - Math.floor(number)
    for(let i=1;i<=5;i++){
        if(i<=integerValue){
            output.push(100);
        }else{
            if(i===integerValue+1){
                output.push(100*decimalValue);
            }else
            output.push(0);
        }
    }
    return output
}
console.log(checkStars(4.5))
