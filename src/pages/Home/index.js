import React from 'react';
import Header from '../../Components/Header'
import { SocialIcon } from 'react-social-icons';
import './styles.css';

function HomePage() {

    function colorGenerate() {
        //pegar campos das cores
        var red = document.getElementById("red").value;
        var green = document.getElementById("green").value;
        var blue = document.getElementById("blue").value;
        var cor = "rgb("+red+","+green+","+blue+")";

        document.getElementById("code-color").style.background = cor;
        document.getElementById("legend-color").innerHTML = cor;
    
        document.getElementById("txtRed").innerHTML = red;
        document.getElementById("txtGreen").innerHTML = green;
        document.getElementById("txtBlue").innerHTML = blue;
    
    }

    return (

        <div onLoad={colorGenerate}>
            <main className="body-limit" id="code-color">

                <Header>Gerador de Cores RGB</Header>

                <div className="body-box">

                    <div id="red-div">
                        <p>Red</p>
                        <input type="range" id="red" onChange={colorGenerate} min="0" max="255" />
                        <span id="txtRed">0</span>
                    </div>

                    <div id="green-div">
                        <p>Green</p>
                        <input type="range" id="green"  onChange={colorGenerate} min="0" max="255" />
                        <span id="txtGreen">0</span>
                    </div>

                    <div id="blue-div">
                        <p>Blue</p>
                        <input type="range" id="blue" onChange={colorGenerate} min="0" max="255" />
                        <span id="txtBlue">0</span>
                    </div>

                    <h2 id="legend-color">rgb(0,0,0)</h2>
 
                </div>

                <footer className="footer-box">
                    <i>
                        <SocialIcon network="linkedin" style={{ height: 25, width: 25 }}/>
                        <a href="https://www.linkedin.com/in/jo%C3%A3o-paulo-barbosa-pertence-909aa1105/"> Linkedin </a>
                    </i>

                    <i>
                        <SocialIcon network="github" bgColor="#black" style={{ height: 25, width: 25 }}/>
                        <a href="https://github.com/joaopertence"> Github </a>
                    </i>
                </footer>
            </main>

        </div>

    );
}

export default HomePage;