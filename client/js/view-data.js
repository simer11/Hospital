//var data = '[{ "PatientId": "1", "PatientName": "John Doe","PatientAge":"37", "PatientPhNo": "332423230", "PatientProblem": "shoulderpain ","doctorReffered":"dr verma" },{ "PatientId":"2" , "PatientName": "Spiderman","PatientAge":"24", "PatientPhNo": "923423230", "PatientProblem": "loss of web","doctorReffered":"Dr strange" },{ "PatientId": "3", "PatientName": "thanos","PatientAge":"32", "PatientPhNo": "8732423230", "PatientProblem": "overcrowding","doctorReffered":"Dr Thomas" },{ "PatientId": "4", "PatientName": "barbara ","PatientAge":"41" ,"PatientPhNo": "3492423230", "PatientProblem": "eye sight","doctorReffered":"dr Patel" },{ "PatientId": "5", "PatientName": "lebron james","PatientAge":"56", "PatientPhNo": "3242823822", "PatientProblem": "knee","doctorReffered":"Dr joshi" }]';
 
//var jsonObject= JSON.parse(data);

function retrieveData(){
    // ajax to get the data

    $.ajax({
        url:'http://localhost:3000/get-records',
        type:"get",
        success:function(response){
            var data = JSON.parse(response);
            if(data.msg == "success"){
                showTable(data.hospitalData);
            }else{
                console.log(data.msg)
            }

        },
        error:function(err){
            console.log(err)
        }
    });
}

main();

function main() {

   // console.log(data);
   // console.log(jsonObject);
retrieveData()
   
}

function showTable(jsonObject){
console.log(jsonObject);
     var htmlString = "";

    for (var i = 0 ; i<jsonObject.length; i++) {
        htmlString  +="<tr>";
        htmlString +="<td>" +  jsonObject[i].patientId + "</td>";
        htmlString +="<td>" +  jsonObject[i].patientName + "</td>";
        htmlString +="<td>" +  jsonObject[i].patientAge+ "</td>";
        htmlString +="<td>" +  jsonObject[i].patientPhNo + "</td>";
        htmlString +="<td>" +  jsonObject[i].patientProblem+ "</td>";
        htmlString +="<td>" +  jsonObject[i].doctorReffered + "</td>";
        htmlString += "<td><button onclick='deleteRow(" + i + ")'>Delete</button></td>";

        htmlString +="</tr>";
    }
    
    $('#hospitalTable').html(htmlString);}

    function deleteRow(rowID) {
        $.ajax({
            url: 'http://localhost:3000/delete-row/' + rowID,
            type: "delete",
            success: function (response) {
                retrieveData();
            },
            error: function (err) {
                console.log(err);
            }
        });
    }
    
  //showTable();