function getvalue() {
    var x=document.getElementById("he").value;
    if (x==" "){
        x="nice try bro";
    }
    console.log(x)

readTextFile(x)
}
function readTextFile(x)
{
    file="https://liad07.github.io/checkey/license.txt";
    var rawFile = new XMLHttpRequest();
    var count=0;
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var txt;
                var allText = rawFile.responseText;
                const all= allText.split("\n")
                for (let i = 0; i < all.length; i++) {
                    all[i]=all[i].replace("\r","")
                    if (all[i]==x){
                        count++;

                    }
                    if (count==1){
                        txt="good key";
                        document.getElementById("he").style.display="none";
                        document.getElementById("hb").className="btn btn-success";
                        console.log(x+"=="+all[i])
                        break;
                    }
                    else {
                         txt="Incorrect key";
                        document.getElementById("he").style.display="none";
                        document.getElementById("hb").className="btn btn-danger";
                    }
                }
                document.getElementById("hb").textContent=txt;
            }
        }
    }
    rawFile.send(null);
}
