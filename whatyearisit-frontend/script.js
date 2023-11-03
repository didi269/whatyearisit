// Insert your code here



function displayYear() { 
    


  fetch('https://whatyearisit-backend-gold.vercel.app/year')
   .then(response => response.json())
   .then(data => {
      //console.log(data)
      document.querySelector('#year').textContent = data.year;
    return data;
  });
  
}

displayYear();





 







 




    



