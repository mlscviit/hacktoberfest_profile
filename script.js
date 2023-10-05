
fetch('data.json')
    .then(response=> response.json())
    .then(data=> {
    
    data.Participants.forEach((name)=> {
        document.getElementById("participants")
        .innerHTML +=
        
        `<a href="/participants/${name+"/index.html"}">

            <div class="card">

                <div class="card_img">
                    <img src="/participants/${name+"/photo.jpg"}" /> 
                </div>

                <div class="card_title">
                    ${name}
                </div>
            </div> 
         </a>
        `;})
    })

    // Object.keys(data).forEach(function(key) {
    //     document.getElementById("participants")
    //     .innerHTML +=
    //     `<a href="/participants/${data[key]+"/index.html"}">the html file is : ${data[key]}</a>`;})
    // });

    
