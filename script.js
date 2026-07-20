*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:'Segoe UI',sans-serif;
scroll-behavior:smooth;
}


body{
background:#020617;
color:white;
}


/* Navbar */

nav{

display:flex;
justify-content:space-between;
align-items:center;
padding:20px 8%;
background:#020617;
position:sticky;
top:0;
z-index:100;

}


nav h2{

color:#38bdf8;

}


nav a{

color:white;
text-decoration:none;
margin-left:18px;

}


nav a:hover{

color:#38bdf8;

}



/* Sections */

section{

padding:70px 8%;

}



.hero{

min-height:90vh;
display:flex;
align-items:center;

}


.hero h1{

font-size:55px;

}


.hero span{

color:#38bdf8;

}


.hero h2{

margin-top:15px;
color:#94a3b8;

}


.hero p{

font-size:20px;
margin:20px 0;
max-width:650px;
line-height:1.6;

}



.btn{

display:inline-block;
background:#38bdf8;
color:black;
padding:12px 25px;
border-radius:30px;
text-decoration:none;
margin-right:10px;
margin-top:10px;

}



.btn:hover{

transform:scale(1.05);

}




/* Cards */

.card{

background:#1e293b;
padding:25px;
border-radius:18px;
margin-top:20px;
transition:.3s;

}


.card:hover{

transform:translateY(-8px);

}



h1{

margin-bottom:20px;
font-size:35px;

}



.projects{

display:grid;
grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
gap:20px;

}




/* Skills */

.skills span{

display:inline-block;
background:#334155;
padding:10px 18px;
border-radius:25px;
margin:8px;

}




/* Certificate Section Fix */

.certificate-card{
    overflow:hidden;
    width:100%;
    max-width:250px;
}

.certificate-card img{
    width:150px;
    height:150px;
    display:block;
    margin:0 auto;
    object-fit:contain;
    background:white;
    border-radius:10px;
    padding:8px;
}

.certificate-card h2{
    margin-top:15px;
    font-size:18px;
}

.certificate-card p{
    margin-top:10px;
    line-height:1.5;
    font-size:14px;
}




/* Footer */

footer{

text-align:center;
padding:20px;
background:#000;

}




/* Mobile */

@media(max-width:700px){

nav{

flex-direction:column;

}


nav div{

margin-top:15px;

}


.hero h1{

font-size:38px;

}

}