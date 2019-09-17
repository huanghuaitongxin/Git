// 定义一个函数
// String  指函数的返回值是String类型
// getPerson函数名
// String name形参的类型，age传的话必须是int类型

// 和JS中的函数相比，限定了形参的类型，和函数返回值的类型
String getPerson(String name,int age){
  return "name=$name,age=$age";
}
void main(){
// 用string类型接收这个函数返回值
  String str = getPerson("wangcai", 100);
  print(str);//name=wangcai,age=100
}