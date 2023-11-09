
//submit hospital data
$('#submit-button').click(function(){

    var patientId = $('#PatientId').val();
    var patientName = $('#patientName').val();
    var patientAge = $('#patientAge').val();
    var patientPhNo = $('#patientPhNo').val();
    var patientProblem = $('#patientProblem').val();
    var doctorReffered = $('#doctorReffered').val();



    var jsonObject = {
        patientId:patientId,
        patientName: patientName,
        patientAge:patientAge,
        patientPhNo:patientPhNo,
        patientProblem:patientProblem,
        doctorReffered:doctorReffered
    };

    $.ajax({
        url:'http://localhost:3000/write-record',
        type:'post',
        data:jsonObject,
        success:function(response){
            var data = JSON.parse(response);
            if (data.msg == "success"){
                alert("data succesfully saved");
            }else{
                console.log(data.msg);
            }
            
        },
        error:function(err){
            console.log(err);
        }



    });




})