# password-generator

<html>
    <head>
        <title>
            Password Generator
        </title>
        <link rel="shortcut icon" type="image/png"  href="images/favicon.png">
        <script type="text/javascript" src="password_generator.js"></script>
        <link rel="stylesheet" type="text/css" href="password_generator.css">
    </head>
    <body>
        <div class="Title">
            Password Generator
        </div>
        <section>
            <form class="pass">
                <input disabled type="text" id="password" class="pass" placeholder="Password"/>
                <button type="submit" class="pass" onclick="pass()">Copy text</button>
            </form>
            <form class="passspe">
                <div class="passlen">
                    Password Length<span class="passlen" id='passlen'>14</span>
                </div>
                <br>
                <input id="passlength" class="passlen" type="range" max="30" min="7" step="1" value="14" oninput="password_len_change(this.value)">
                <br>
                <div class="passspe">
                    <p>
                        <input type="checkbox" id="up" onclick="strength()" checked>  Include Uppercase</input>
                    </p>
                    <p>
                        <input type="checkbox" id="lo" onclick="strength()" checked>  Include LowerCase</input>
                    </p>
                    <p>
                        <input type="checkbox" id="nu" onclick="strength()" checked>  Include Numbers</input>
                    </p>
                    <p>
                        <input type="checkbox" id="sy" onclick="strength()" >  Include Symbols</input>
                    </p>
                </div>
                <br>
                <div class="passstr">
                    <div class="passstr2">Strength</div><span id="spstr" class="passstr">MEDIUM</span>
                    <div class="passstr3">
                        <input type="button" disabled class="passstr" id="1"></input>
                        <input type="button" disabled class="passstr" id="2"></input>
                        <input type="button" disabled class="passstr" id="3"></input>
                        <input type="button" disabled class="passstr" id="4"></input>
                    </div>
                </div>
                <div class="passgen">
                    <input class="passgen" type="button" value="Generate →" onclick="genpass(document.getElementById('passlength').value)">
                </div>
            </form>
        </section>
    </body>
</html>
