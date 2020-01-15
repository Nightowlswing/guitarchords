export default function EditText(text) {
    return norm1(text).replace(/'/g,"").replace(/`/g,"");
    
  }
  
  
  function norm1(text){
      var ntext = text.split("@");
      var  S = ''
      for(var i = 0; i < ntext.length; i++)
      {
          S = S + ',' + norm2(ntext[i]);
      }
      S = '[' + S.substring(1,S.length - 5) + ']	';
      return  S;
  }
  
  function norm2(verse){
    var nverse = verse.split('$');
    var  S = ''
      for(var i = 0; i < nverse.length; i++){
  
              S = S + ',' + norm3(nverse[i]);
      }
      //S = S.substr(1);
          S = '[' + S.substring(1,S.length - 3) + ']	';
      return S;
  }
  
  function norm3(string){
    var nstring = string.split("[");
      var S = ''
      for(var i = 0; i < nstring.length; i++){
          if(norm4(nstring[i])!=='NONE'){
              S = S + ',' + norm4(nstring[i]);
          }
      }
      S = S.substr(1);
      S = '[' + S + ']'
      // if(S == ''){
      // 	S = 'NONE';
      // }
      return S;
  }
  
  function norm4(chordword){
    var data = chordword.split("]");
      if (data[1] !== undefined){
          return `{"chord":"` + data[0] + `","words":"`+ data[1] +`"}`;
      }
      else
      {
          return 'NONE';
      }
  }