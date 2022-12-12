
// brute force O(n^3)
/*
  const commonCharacters = (str1, str2) => {
  let commonCharacters = "";
  for(let i=0; i<str1.length;i++)
  {
    if (str1[i]==" ")
      continue;
    for(let j=0; j<str2.length;j++)
    {
      if(str2[j]==" ")
        continue;
      else 
        if(str1[i]==str2[j])
        {                    
                                 //O(n)
                               //  ^                                  
          if(commonCharacters.indexOf(str2[j])<0)
             commonCharacters+=str1[i];
          else
            continue;
        }
    }
  }
  return commonCharacters;
};
*/



//Enhancement O(n)
/* 
function commonCharacters(str1,str2)
{
  let str2AsSet = new Set(str2);
  let commonCharacters = new Set();
  for(let i=0; i<str1.length;i++)
  {
    if(str1[i]==" ")
      continue;
    if(str2AsSet.has(str1[i]))
    {
      if(!commonCharacters.has(str1[i]))
      {
        commonCharacters.add(str1[i]);
      }
    }
   
  }

  let result = Array.from(commonCharacters).join('');
  return result;
}
*/


//-----------------------------------------


// Enhancement for multiple parameters 
function enhancedCommonCharactersVersion(...strings)
{
  let firstString = strings.shift(); // strings.shift -> returns the shifted element which is the firstString
  let set = new Set(strings);
  let commonCharacters = new Set();
  for (let i=0; i<firstString.length;i++)
  {
    let isFound = true;
    if(firstString[i]==" ")
      continue;
    set.forEach(element=>{
      let findLetter = (element.indexOf(firstString[i])>=0)?true:false;
      isFound=isFound&&findLetter;
    })
      
    if(isFound)
    {
      if(!commonCharacters.has(firstString[i]))
      {
        commonCharacters.add(firstString[i]);
      }
    }
  }

  let result = Array.from(commonCharacters).join('');
  return result;
}

let j = enhancedCommonCharactersVersion('ab cxd', 'addx ee','azzd ggx','d dexa');
console.log(j);