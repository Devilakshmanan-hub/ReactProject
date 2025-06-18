import React from 'react'

const Apirequest = async({url='',optionsobj=null,errMsg=null}) => {
   try{
    const response = await fetch(url,optionsobj);
    if(!response.ok) throw Error("Data not received")
   }
catch(err){
    errMsg = err.message
}
finally{
    return errMsg
}
}

export default Apirequest
