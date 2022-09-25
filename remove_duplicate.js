 function duplicate(names){
    const unique = [];
    for(let i=0;i<names.length;i++){
        var name = names[i];
        if(unique.includes(name)==false){
            unique.push(name);
        }
    }
    return unique;
 }
 const names=['munna','monir','siam','rakib','munna','monir','jami','siam','hafiz','nahid']

 const uniqueList = duplicate(names);
 console.log(names);
 console.log(uniqueList);
