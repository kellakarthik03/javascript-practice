var skills=["python","java","ai","cpp","c#","oracle"];
 [x1,x2,x3,x4,x5,x6]=skills;
function fun1(name){
    var name1=name;
    function fun2(name2){
            return name2;
        }
        return [name1,fun2];
}
var a=fun1("karthik");
var result= [a[0],a[1]("tarun")];
console.log(result);
