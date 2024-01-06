function getResponseFromAPI(success) {
    return new Promise((resolve, reject) => {
  
      setTimeout(() => {
        
        if (success) {
          resolve("API response data"); 
        } else {
          reject(new Error("API request failed")); 
        }
      }, 1500); 
    });
  }
