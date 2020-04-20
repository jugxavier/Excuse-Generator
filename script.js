window.onload=()=>{
let quem = ["o cachorro", "meu vô", "sua tartaruga", "meu pássaro"];
let oQue = ["coma", "irritado", "esmagado", "quebrado"];
let quando = ["antes da aula", "bem na hora", "quando eu terminei", "durante o meu almoço", "enquanto eu estava orando"];
    geradorDeDesculpas=()=>{ 
        let quem1=quem[Math.floor(Math.random()*quem.length)]
        let oQue1=oQue[Math.floor(Math.random()*oQue.length)]
        let quando1=quando[Math.floor(Math.random()*quando.length)]
        document.querySelector("#desculpas").innerHTML=quem1+" "+oQue1+" "+quando1
    }

}