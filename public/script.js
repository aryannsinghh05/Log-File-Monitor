const form = document.getElementById("Uploadings");

form.addEventListener("submit", async(event) => {

    event.preventDefault();

    const fileInput = document.getElementById("uploaded_file");

    if (!fileInput.files.length) {
        alert("Please upload a log file");
        return;
    }
    
    const loading = document.getElementById("loading");
    const resultmsg = document.getElementById("RESULTS");
    const count = document.getElementById("count");
    const details = document.getElementById("details");

    loading.style.display = "block";
    resultmsg.style.display = "none";

    const formData = new FormData(form);
    
    try {

        const response = await fetch("/uploading", {
        method: "POST",
        body: formData
        });

        if (!response.ok) {
            throw new Error("Upload failed  " + response.statusText);
        };

        const result = await response.json();
        loading.style.display = "none";
        resultmsg.style.display = "block";  

        count.innerHTML = `
            <div class="card info" id="infobtn">
                <h4>INFO</h4>
                <p>${result.info_count}</p>
            </div>
            <div class="card warning" id="warningbtn">
                <h4>WARNING</h4>
                <p>${result.warning_count}</p>
            </div>
            <div class="card error" id="errorbtn">
                <h4>ERROR</h4>
                <p>${result.error_count}</p>
            </div> `;

        const infobtn = document.getElementById("infobtn");
        const warningbtn = document.getElementById("warningbtn");
        const errorbtn = document.getElementById("errorbtn");

        infobtn.addEventListener("click", ()=>{
            showdetails(result.info);
        });

        warningbtn.addEventListener("click", ()=>{
            showdetails(result.warning);
        });
        errorbtn.addEventListener("click", ()=>{
            showdetails(result.error);
        });

        function showdetails(data){
            details.innerHTML ="<h5> DETAILS </h5>";

            data.forEach(element => {
                details.innerHTML += `<p>${element}</p>`;
            });
        }
    }   catch (error) {
            loading.style.display = "none";
            alert("Error: " + error.message);
        }     
});
