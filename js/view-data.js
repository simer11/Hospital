var data = '[{ "PatientId": "1", "PatientName": "John Doe","PatientAge":"37", "PatientPhNo": "332423230", "PatientProblem": "shoulderpain ","doctorReffered":"dr verma" },{ "PatientId":"2" , "PatientName": "Spiderman","PatientAge":"24", "PatientPhNo": "923423230", "PatientProblem": "loss of web","doctorReffered":"Dr strange" },{ "PatientId": "3", "PatientName": "thanos","PatientAge":"32", "PatientPhNo": "8732423230", "PatientProblem": "overcrowding","doctorReffered":"Dr Thomas" },{ "PatientId": "4", "PatientName": "barbara ","PatientAge":"41" ,"PatientPhNo": "3492423230", "PatientProblem": "eye sight","doctorReffered":"dr Patel" },{ "PatientId": "5", "PatientName": "lebron james","PatientAge":"56", "PatientPhNo": "3242823822", "PatientProblem": "knee","doctorReffered":"Dr joshi" }]';
 
var jsonObject= JSON.parse(data);

main();

function main() {

    console.log(data);
    console.log(jsonObject);

    showTable();
}

function showTable(){

     var htmlString = "";

    for (var i = 0 ; i<jsonObject.length; i++) {
        htmlString  +="<tr>";
        htmlString +="<td>" +  jsonObject[i].PatientId + "</td>";
        htmlString +="<td>" +  jsonObject[i].PatientName + "</td>";
        htmlString +="<td>" +  jsonObject[i].PatientAge+ "</td>";
        htmlString +="<td>" +  jsonObject[i].doctorReffered + "</td>";
        htmlString +="<td>" +  jsonObject[i].PatientPhNo + "</td>";
        htmlString +="<td>" +  jsonObject[i].PatientProblem+ "</td>";


        htmlString +="</tr>";
    }
    
    $('#hospitalTable').html(htmlString);}

  showTable();