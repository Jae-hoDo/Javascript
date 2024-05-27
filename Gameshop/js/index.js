const url = "http://localhost:8080/products";

axios.get(url)
.then((response)=>{
    console.log("응답 Response: ", response);
})
.catch((error)=>{
    console.log("에러 발생: ", error);
});