module.exports = function check(str, bracketsConfig) {
  


    
    //str = '5555512575557777777555566667888888667661133833448441111222233333444442266666';
    //bracketsConfig = [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']];

    var flagSameBracketOpened = false;

    // надо написать функцию для проверки, чтобы узнать скобка является открытой или закрытой

    function checkBracketIsOpened (bracket, bracketsConfig) {
        if (bracket === undefined)
            return false;
        for (let key in bracketsConfig) {
            if (bracketsConfig[key][0] === bracket)
                return true;   // вернет тру, если скобка открытая, или открытая скобка и закрытая -  одинаковы         
        }
        return false;   // Если скобка закрывающая
    }

    var arr = [];

    for (var i = 0; i < str.length; i++) {

        flagSameBracketOpened = false;

        for (let key in bracketsConfig) {               

            if (bracketsConfig[key][0] === str[i]) {   // открытую скобку закидываем в стек

                //console.log( i + '   '  + str[i]);
                
                arr.push(str[i]);

                if ( bracketsConfig[key][0] === bracketsConfig[key][1]  ) { // если открытая и закрытая скобка одинакавы

                    // если скобка первая в строке, то она открывающаяся

                    //console.log( 'same   '   +  i + '   '  + str[i]);

                    if ( i === 0) { 
                        //console.log('first');
                        flagSameBracketOpened = true;
                        break;
                    }

                    // если скобка последняя в строке, то она закрывающаяся

                    if (i ===  (str.length - 1) ) {
                        //console.log('there');
                        arr.pop();
                        flagSameBracketOpened = false;
                        break;
                    }


                    // если предыдущая такая же

                    if (str[i] === str[i-1]) {
                        // последний элемент и есть наша str[i], так как мы выше его запушили, надо проверить на предпоследний элемент, если это скобка такая же, то мы их две сократим, достав с массива две этих скобки
    
                            if (arr[arr.length - 2] === str[i]) {
                                //console.log('pop 2');
                                arr.pop();
                                arr.pop();
                                flagSameBracketOpened = true;   // ставим тру, так как мы их достали
                                break;
                            }   
                        }


                    //  следующая такая же, а предыдущая открывающаяся, то она открывающаяся

                    if (str[i+1] === str[i] && checkBracketIsOpened(str[i-1], bracketsConfig) ) {
                        flagSameBracketOpened = true;
                        break;
                    }


                    



                    // предыдущая такая же, то она закрывающаяся

                    /*if (str[i] === str[i-1]) {
                        arr.pop();
                        flagSameBracketOpened = false;
                        break;
                    }*/

                    
                    
                    
                                     
                             
                } 
                break;
            }                          
            
        }
        //console.log(arr);
        //console.log('flagSameBracketOpened   ' + flagSameBracketOpened);

        if (flagSameBracketOpened) continue; // если наша скобка относится к открытой

        for (let key in bracketsConfig) {

            if (bracketsConfig[key][1] === str[i]) {
                //console.log(arr);                
            
                if (arr[arr.length - 1] !== bracketsConfig[key][0])  {
                    //console.log('false');
                    return false;
                }
                    
                else {
                    arr.pop();
                    break;
                }
            }
        }    
        
    }

    if (arr[0] !== undefined)
        return false;

    //console.log(arr);
    //console.log('TRUE');
    return true;
    
}
