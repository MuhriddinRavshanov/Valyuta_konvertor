let fromInput = document.querySelector(".from_input");
let toInput = document.querySelector(".to_input");
let fromValyuta = document.querySelector("#from_valyuta");
let toValyuta = document.querySelector("#to_valyuta");
let fromSpan = document.querySelector(".from_span");
let toSpan = document.querySelector(".to_span");

let list1 = ["UZS", "USD", "EUR", "RUB"];
let list2 = [1, 11278.02, 12172.37, 142.09]

fromValyuta.onchange = function(){
   fromSpan.textContent = fromValyuta.value;
};

toValyuta.onchange = function(){
   toSpan.textContent = toValyuta.value;
};

fromInput.onkeyup = function(){
   a = fromSpan.textContent;
   b = toSpan.textContent;
   for(let i=0; i<4; i++){
      if(a===list1[i]){
         res1 = list2[i];
         for(let j=0; j<4; j++){
            if(b===list1[j]){
               res2 = list2[j];
            }
         }
         res = String((fromInput.value * res1/res2).toFixed(2));
      }
   }
   toInput.value = Number(res);
   // res = 0;
}