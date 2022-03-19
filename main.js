student_array=[];

function submit() 
{
    var n1=document.getElementById("name1").value;
    var n2=document.getElementById("name2").value;
    var n3=document.getElementById("name3").value;
    var n4=document.getElementById("name4").value;

    student_array.push(n1);
    student_array.push(n2);
    student_array.push(n3);
    student_array.push(n4);

    console.log(student_array);

    document.getElementById("display_name").innerHTML=student_array;

    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block"; 
    
}
function sorting()
{
    student_array.sort();
    console.log(student_array);
    document.getElementById("display_name").innerHTML=student_array;

}