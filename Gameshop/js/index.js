const url = "http://localhost:8080/products";

axios.get(url)
.then((response)=>{
    console.log("응답 Response: ", response);
    displayProducts(response.data);
})
.catch((error)=>{
    console.log("에러 발생: ", error);
});

function displayProducts(gameData) {
    console.log(gameData.length);
    if (gameData.length > 0) {
        const content = document.querySelector(".content");
        gameData.forEach((data)=>{
            
        })
    }
}