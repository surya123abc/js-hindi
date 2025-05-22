// Arryas part 2

const marvel_heros=["Thor","IronMan","SpiderMan"];
const dc_heros=["SuperMan","Flash","BatsMan"];
//marvel_heros.push(dc_heros);
//console.log(marvel_heros);
//console.log(marvel_heros[3][1]);
//console.log(marvel_heros[3][0]);
//const all_heros=marvel_heros.concat(dc_heros);// basically concat methods combine two arrays without modifying existing arrays
//console.log(marvel_heros);
//console.log(all_heros);
//console.log(dc_heros);
//const all_new_heroes=[...marvel_heros,...dc_heros];// ... this is called spread operator
//console.log(all_new_heroes);
//console.log(Array.isArray("suryansee"));
//console.log(Array.from("suryansee")); //['s', 'u', 'r','y', 'a', 'n','s', 'e', 'e']
const score1=100;
const score2=200;
const score3=300;
//console.log(Array.of(score1,score2,score3));//[ 100, 200, 300 ]
const real_another_array=[1,2,3,[4,5,3],7,[8,7,6]];
console.log(real_another_array.flat(Infinity));



