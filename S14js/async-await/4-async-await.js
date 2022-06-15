//*===============================================================
//*                   4- ASYNC-AWAIT
//*===============================================================
//? Async-Await ECMAScript 2017 ile Javascript diline eklenmistir.
//? Aslinda Promise yapisinin syntax olarak basitlestirilmis halidir.
//? Bu baglamda sentetik seker benzetmesi yapilabilir.

//* Bir fonskiyonu asyn hale getirmek icin fonksiyon keyword'nun onune
//* async keyword'u eklenir.

//* Bir async fonksiyon icerisinde await keyword'u ile yapilan istegin cevabinin
//* beklenmesi saglanir.

//* Aslinda dizilis olarak senkron mantiga benzeyen kod yazarak Asenkron
//* kod yazmayı mumkun kilar.

//* Await, promise-temelli herhangi bir fonksiyonun onune getirilerek getirildigi
//* satirdaki kodun durudurulmasini saglar. Yapilan istek yerine getirilip sonuc
//* degerlerinin dondurulmesine ile kodun calismasi devam eder.

const getUser = async function (){
  const url = 'https://api.github.com/users';
  try{
      const resolve = await fetch (url);
      if (!resolve.ok){
        throw new Error(`something went wrong: ${resolve.status}`);
         }
      const data = await resolve.json();
      console.log(data);
      updateDom(data);

     }catch (error) {
      console.log(error);
       
      }finally {
        console.log("her şey yanlış");
      }
};
getUser();

function updateDom(data){
  const userDiv = document.querySelector(".users");
  // userDiv.innerHTML = `<h1 class="text-danger">Data can not be fetched</h1>
  // <img src="./img/404.png" alt="" />`;

  data.forEach(user => {
    //! DESTRUCTİRİNG
    const {login, avatar_url,html_url} = user;
    userDiv.innerHTML += `
    <h2 class="text-warning mt-5 border border-4 rounded-pill">NAME:${login}</h2>
    <img class="border rounded-pill" src=${avatar_url} width="50%" alt="developer_person" />
    <h3 class="mt-4 bg-info border rounded-pill">HTML_URL:${html_url}</h3>
    `
  });

}