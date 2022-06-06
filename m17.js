const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
  };
 
 
 const success=result.success
 const store=success.length

 for(let value in success){
   console.log(success[value])
 }
 