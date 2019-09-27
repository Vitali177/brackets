module.exports = function check(str, bracketsConfig) {
  var firstOpenBrackets = 0;
  var firstCloseBrackets = 0;
  var prov = 0;

    

    var flagSameBracketOpened = false;
    flagSameBracketOpened = false;  

    // надо написать функцию для проверки, чтобы узнать скобка является открытой или закрытой

    function checkBracketIsOpened (bracket, bracketsConfig) {
        if (bracket === undefined)
            return false;
        for (let key in bracketsConfig) {
            if (bracketsConfig[key][0] === bracket)
                return true;   // вернет тру, если скобка открытая, или открытая скобка и закрытая -  одинаковы         
        }
        return false;
    }

    var arr = [];

    for (var i = 0; i < str.length; i++) {

        for (let key in bracketsConfig) {   

            if (bracketsConfig[key][0] === str[i]) {

                arr.push(str[i]);
                break;   

                /*if ( bracketsConfig[key][0] === bracketsConfig[key][1]  ) { // если открытая и закрытая скобка одинакавы

                    // если следующей скобки нет, а предыдущая такая же
                    console.log('str: ' + str + 'str[i]  ' + str[i] + 'str[i+1]  ' + str[i+1] + 'i =  ' + i);
                    if (str[i+1] === undefined) {
                        if (str[i] === str[i-1]) {
                            console.log('hihi');
                            flagSameBracketOpened = true;
                        }
                    }

                    // надо узнать относится ли наша скобка к открытой либо закрытой

                    // если предыдущая скобка открыта и следующая закрытая, то мы не устанавливаем тру флаг потому что потом 
                    //мы закинем эту скобку в массив и сразу же достанем в следующем цикле, что в принципе правильно по условию задания
                    if (checkBracketIsOpened(str[i-1], bracketsConfig) && !checkBracketIsOpened(str[i+1], bracketsConfig) ) {
                        flagSameBracketOpened = true;  
                    } 
                    // если предыдущей скобки нет и следующая закрытая или такая  же
                    if (str[i-1] === undefined) {
                        console.log(str[i] + '  ' + str);
                        if  ( !checkBracketIsOpened(str[i+1], bracketsConfig)) {
                            flagSameBracketOpened = true;
                        } else if (str[i] === str[i+1]) { 
                            console.log('hi');
                            flagSameBracketOpened = true;
                        }                
                    }                    
                    if (checkBracketIsOpened(str[i-1], bracketsConfig) ) {
                        console.log('');
                    }              
                    
                    // Если предыдущая скобка открытая и следующая закрытая          
                }*/  
            }                          
            
        }

        //if (flagSameBracketOpened) break; // если наша скобка относится к открытой

        for (let key in bracketsConfig) {

            if (bracketsConfig[key][1] === str[i]) {
                console.log(arr);                
            
                if (arr[arr.length - 1] !== bracketsConfig[key][0]) 
                    return false;
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
