const inputregbir = document.getElementById("username")
const inputregiki = document.getElementById("exampleInputPasswordreg1")
const email = document.getElementById("exampleInputEmail2")
const btnReg = document.getElementById("btnId")
const span = document.querySelector(".uyari")

const inputlogbir = document.getElementById("exampleInputEmail1")
const inputlogiki = document.getElementById("exampleInputPassword1")
const btnLog = document.getElementById("butonId")
const kaldir = document.querySelector(".kabul-log")
const zpan = document.querySelector(".uyarma")

function first(){
    let kayitol = JSON.parse(localStorage.getItem("kayit"))
    if(!kayitol){
        localStorage.setItem("kayit","[]")
    }
}

first()

btnReg?.addEventListener("click",register)

function register(){

    if(inputregbir.value.trim() != "" && inputregiki.value.trim() != "" && email.value.trim() != ""){
        let kayitol = JSON.parse(localStorage.getItem("kayit"))
        let kullanici = {
            user:inputregbir.value,
            pass:inputregiki.value,
            mail:email.value
        }
        kayitol.push(kullanici)
        localStorage.setItem("kayit",JSON.stringify(kayitol))
        span.textContent = "- Kayit Basarili"
        span.classList.add("text-succsess")
        
    }
}
btnLog?.addEventListener("click",login)
function login(){
    let kayitol = JSON.parse(localStorage.getItem("kayit"))
    let eslesme = kayitol.filter(uye => uye.mail == inputlogbir.value && uye.pass == inputlogiki.value)
    if(eslesme.length != 0){
        console.log("giriş yaptın")
        kaldir.textContent = ""
        let p = document.createElement("p")
        p.textContent = "Giris Basarili"
        p.classList.add("bg-success","text-white","mt-3")
        kaldir.append(p)
    }else{
        console.log("giriş yapamazsın")
        zpan.textContent = "- Email veya Sifre hatali"
        zpan.classList.add("bg-danger","text-white","mt-3")
       
    }
}


// for( let i of getir){
//     if(loginAdSoyad.value != i.ad  &&  loginSifre.value != i.sifre){
//         basariGiris.textContent = "kullanıcı bulunamadı"
//         basariGiris.classList.toggle("text-danger")
       
//    }else{
//        loginAdSoyad.value = i.ad
//        loginSifre.value = i.sifre
//        basariGiris.textContent = "Giriş yaptınız"
//        basariGiris.style.color = "success"
//    }
   
// } 
 