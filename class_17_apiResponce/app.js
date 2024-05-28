

let collegeList = document.querySelector("#collegeList");
const searchButton = document.querySelector("#searchButton");

searchButton.addEventListener("click", async() => {
   let contry = document.querySelector("#countrySearch").value;
    
     let colleges = await getContryData(contry)
     collegeList.innerHTML = "";
     for (college of colleges) {
      
        let li = document.createElement("li");
        li.innerHTML =  `
        ${college.name}
        
        <div class="buttons">
            <button>${college.country}</button>
            <button>${college.alpha_two_code}</button>
            <button>${college.web_pages[0]}</button>
           
        </div>`
    
        collegeList.appendChild(li);
     }
    
    
   
});


const getContryData = async (contry) => {
    try {
       const url="http://universities.hipolabs.com/search?name="+contry
       let res= await axios.get(url)
            return res.data
        
    } catch (error) {
        console.log("Error: something went wrong", error);
    }
}