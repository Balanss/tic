import{r as e,u as T,j as s,F as I,a as i,s as C,d as N,c as P,b as x,e as y,f as E,g as R}from"./index-07222a45.js";function j(){const[t,d]=e.useState([]),[c,l]=e.useState(""),[a,m]=e.useState(""),[u,v]=e.useState(""),[f,n]=e.useState(""),g=T();e.useEffect(()=>{(async()=>{const r=C(y,a),S=N(r);P(S,p=>{d(p.docs.map(b=>({...b.data(),id:b.id})))})})()},[a]),e.useEffect(()=>{localStorage.setItem("player2",c)},[c]),e.useEffect(()=>{localStorage.setItem("lobby",a)},[a]);function h(o){o.preventDefault(),a===""?(n("Invalid room id"),setTimeout(()=>{n("")},3e3)):t.map((r,S)=>{if(a===r.code){v("Loading please wait");const p=x(y,a,r.id);E(p,{joined:!0}),l(r.name+"friend"),setTimeout(()=>{g("/game")},3e3)}else r.id!==a&&(n("Invalid room id"),setTimeout(()=>{n("")},3e3))})}return s(I,{children:i("form",{onSubmit:h,children:[i("p",{children:[" ",f,"  ",u," "]}),s("input",{type:"text",onMouseLeave:o=>m(o.target.value)}),s("button",{style:{marginTop:"20px"},className:"btnstart",children:" Join Room  "})]})})}function k(){const[t,d]=e.useState(""),[c,l]=e.useState(""),[a,m]=e.useState(""),[u,v]=e.useState(Math.floor(Math.random()*3+1)),[f,n]=e.useState(""),g=T();e.useEffect(()=>{n(localStorage.getItem("name"))},[f]);function h(){if(t==="")l("Please type in a name to create lobby"),setTimeout(()=>{l("")},4e3);else{m("Creating a lobby...Please wait");const o=C(y,"game"+t);R(o,{name:t,joined:"false",playerTwo:"friend",code:"game"+t,zero:"",one:"",two:"",three:"",four:"",five:"",six:"",seven:"",eight:"",nine:"",PlayerOne:"X",PlayerTwo:"O",Disabled:!0,host:t,friend:t+"friend"}),setTimeout(()=>{g("/game")},3e3)}}return e.useEffect(()=>{localStorage.setItem("name",t)},[t]),e.useEffect(()=>{},[]),i("div",{className:"homepage-div",style:u===1?{backgroundPosition:"left"}:{backgroundPosition:"right"},children:[s("h2",{className:"simple-h2",children:"Tic Tac Toe Game"}),i("div",{className:"create-room",children:[s("h2",{className:"h2",children:" Create room"}),i("p",{children:[" ",c," ",a," "]}),s("input",{type:"text",onChange:o=>d(o.target.value)}),s("button",{className:"btnstart",style:{marginTop:"20px"},onClick:h,children:" Create lobby "})]}),i("div",{className:"joins-room",children:[" ",s("h2",{className:"h2",children:" Join Room"}),s(j,{})]})]})}export{k as default};
