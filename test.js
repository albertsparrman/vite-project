export function test(element) {
    //element.textContent = `${element.textContent} Beda`

    // maxgräns för visade meddelande 10 st
    // en meddelande historik 
    // lyssna på enter
    // slashcommando /h för hjälp
    // förbjud tomma meddelanden

    const send = element.querySelector('#send')
    const msglist = element.querySelector('#msglist')
    const historyBox = element.querySelector('#history')
    const histbtn = element.querySelector('#hideShow')
    let history = [];
    
    historyBox.style.display = "none";
    histbtn.addEventListener('click', (e)=> {
        if (historyBox.style.display === "none") {
            historyBox.style.display = "block";
        } else {
            historyBox.style.display = "none";
        }
    });

    send.addEventListener('click', (e)=> {
        e.preventDefault()
        const msg = element.querySelector('#msg').value
        if (msg !== ''){
            warning.textContent = ''
            const li = document.createElement('li')
            li.textContent = msg
            history.push(msg);

            let historyList = `${history.map(history =>`<li>${history}</li>`).join('')}`;
            historyBox.innerHTML = historyList;  
        
            if (msglist.children.length >= 10){
                msglist.removeChild(msglist.firstChild)
                msglist.appendChild(li)
                
            }
            else{
                msglist.appendChild(li)
            }
        }
        else {
            warning.textContent = 'Skriv människa'
        }

    })
}