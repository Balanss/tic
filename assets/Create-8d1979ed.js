import{r as e,u as x,j as t,F as N,a as n,s as T,d as C,c as I,b as E,e as v,f as P,g as R}from"./index-de59f4b8.js";function j(){const[a,d]=e.useState([]),[c,l]=e.useState(""),[s,m]=e.useState(""),[u,b]=e.useState(""),[f,r]=e.useState(""),h=x();e.useEffect(()=>{(async()=>{const i=T(v,s),S=C(i);I(S,p=>{d(p.docs.map(y=>({...y.data(),id:y.id})))})})()},[s]),e.useEffect(()=>{localStorage.setItem("player2",c)},[c]),e.useEffect(()=>{localStorage.setItem("lobby",s)},[s]);function g(o){o.preventDefault(),s===""?(r("Invalid room id"),setTimeout(()=>{r("")},3e3)):a.map((i,S)=>{if(s===i.code){b("Loading please wait");const p=E(v,s,i.id);P(p,{joined:!0}),l(i.name+"friend"),setTimeout(()=>{h("/game")},3e3)}else i.id!==s&&(r("Invalid room id"),setTimeout(()=>{r("")},3e3))})}return t(N,{children:[t("form",{onSubmit:g,children:[n("input",{type:"text",onMouseLeave:o=>m(o.target.value)}),n("button",{style:{marginTop:"20px"},className:"btnstart",children:" Join Room  "})]}),t("div",{style:{height:"30px",marginBottom:"20px"},children:[t("p",{children:[" ",f," ",u,"  "]})," "]})]})}function w(){const[a,d]=e.useState(""),[c,l]=e.useState(""),[s,m]=e.useState(""),[u,b]=e.useState(Math.floor(Math.random()*3+1)),[f,r]=e.useState(""),h=x();e.useEffect(()=>{r(localStorage.getItem("name"))},[f]);function g(){if(a==="")l("Username needed!!"),setTimeout(()=>{l("")},4e3);else{m("Creating lobby");const o=T(v,"game"+a);R(o,{name:a,joined:"false",playerTwo:"friend",code:"game"+a,zero:"",one:"",two:"",three:"",four:"",five:"",six:"",seven:"",eight:"",nine:"",PlayerOne:"X",PlayerTwo:"O",Disabled:!0,host:a,friend:a+"friend"}),setTimeout(()=>{h("/game")},3e3)}}return e.useEffect(()=>{localStorage.setItem("name",a)},[a]),e.useEffect(()=>{},[]),t("div",{className:"homepage-div",style:u===1?{backgroundPosition:"left"}:{backgroundPosition:"right"},children:[n("h2",{className:"simple-h2",children:"Tic Tac Toe Game"}),t("div",{className:"create-room",children:[n("h2",{className:"h2",children:" Create room"}),t("div",{className:"creatediv",children:[n("input",{type:"text",onChange:o=>d(o.target.value)}),n("button",{className:"btnstart",style:{marginTop:"20px"},onClick:g,children:" Create lobby "})," "]}),t("div",{style:{height:"30px",marginBottom:"20px"},children:[t("p",{children:[" ",c," "]}),t("p",{children:[" ",s," "]})]})]}),t("div",{className:"joins-room",children:[" ",n("h2",{className:"h2",children:" Join Room"}),n(j,{})]})]})}export{w as default};
