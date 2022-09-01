let input = prompt("press 1: for Single player || press 2: for two player")*1;


let arr = [[1,2,3],[4,5,6],[7,8,9]]
let obj = {0:1}


if(input==1){
  for(i=0; i<5; i++){
  do{
player_input = prompt("your turn")*1;}
while((player_input<=9 && (player_input in obj)) )
play_turn(player_input,arr,obj,"X")
console.log(player_input)  

  
 do{  
player2_input =parseInt(Math.random()*10)}
while((player2_input<=9 && (player2_input in obj)) )
play_turn(player2_input,arr,obj,"O")
console.log(player2_input)  
console.log(check_win(arr))  
}

  
}
else if(input==2){
  
for(i=0; i<5; i++){
  do{
player_input = prompt("your turn")*1;}
while((player_input<=9 && (player_input in obj)) )
play_turn(player_input,arr,obj,"X")
console.log(player_input)  
console.log(check_win(arr))  
  
 do{  
player2_input = prompt("player 2 turn")*1;}
while((player2_input<=9 && (player2_input in obj)) )
play_turn(player2_input,arr,obj,"O")
console.log(player2_input)  
console.log(check_win(arr))  
}


}

else{
  console.log("please choose valid selection")
  alert("please choose valid selection")
}



function play_turn(input,arr,obj,sign){
  switch (input){
    case 1:
    arr[0][0] = sign ;
     obj[1] = 1 
      break;
    case 2:
      arr[0][1]= sign;
       obj[2] = 1;
      break;
    case 3:
     arr[0][2] = sign;
       obj[3] = 1 ;
      break;
    case 4:
     arr[1][0] = sign;
       obj[4] = 1; 
      break;
         case 5:
     arr[1][1] = sign;
       obj[5] = 1;
      break;  
         case 6:
     arr[1][2] = sign;
       obj[6] = 1;
      break;  
         case 7:
     arr[2][0] = sign;
       obj[7] = 1;
      break;  
         case 8:
     arr[2][1] = sign;
       obj[8] = 1;
      break;  
         case 9:
     arr[2][2] = sign;
       obj[9] = 1;
      break;  
  }

}
function check_win(arr){
  //horizontal
  for(i=0;i<3; i++){
    let j=0
      if(arr[i][j] == arr[i][j+1] && arr[i][j+1] == arr[i][j+2]){
      return  arr[i][j]+" win"
        break;
      }
     
    }
  //vertical
  for(j=0;j<3; j++){
    let i=0
      if(arr[i][j] == arr[i+1][j] && arr[i+1][j] == arr[i+2][j]){
      return arr[i][j]+" win"
         break;
      }
     
    }
  //diagonal
  if(arr[0][0]==arr[1][1] && arr[1][1]==arr[2][2]){
  return arr[0][0]+"win"
     
  }
   if(arr[0][1]==arr[1][1] && arr[1][1]==arr[2][0]){
  return  arr[0][1]+"win"
   
   }
  
  }
   
 