/*
---------------------------
// var final const
// 和JS一样，使用var来声明的变量，后面可以跟任意的数据类型
//在dart中使用var声明的变量，没有提升
void main(){
   print(a);
  var a = 110;
 
}
//在dart中使用var声明的变量，没有重复声明
void main(){
  var a = 110;
  var a = "hello";
  print(a);
}
// 在dart中是没有undefined，如果一个变量没有赋值，他的值是null
void main(){
  var a ;
  print(a);
}
// 在dart中使用var声明的变量，会自动推导类型，类型一旦固定就不能改变
void main(){
  var a = 110;
  a = "hello";
  print(a);
}
---------------------------
//使用final定义的常量，也不能重复定义
final b = 110;//定义常量
final b = "hello";
//使用final定义的常量，肯定也是不能修改值的
final b = 110;//定义常量
b = 111;
---------------------------
// const在dart中也能定义常量
// final和const声明的常量上来就要赋值
const a;
a=110;
void main()=>{
  print(a)
}
---------------------------
const和final的相同点：一旦声明了，不能再赋值，声明和赋值要同时进行
不同点：final声明之后，可以修改
void main(){
  final b = {"name":"wangcai"};
  b["name"] = "xiaoqiang";
  print(b);
}
//fiinal后面可以写返回值，const不可以写
int sum(m,n)=>m+n;
void main(){
  final r = sum(1, 2);
  print(r);
}
---------------------------
// ??表示三元运算符 
void main(){
  var a=110;
  var r = a ?? 666;
  print(r);
} //110
//
void main(){
  var str1 = "hello";
  var str2 = "world";
  var r = str1 ?? str2;
  print(r);
} //hello
---------------------------
//声明一个变量b，b是int类型 整数型
void main(){
  int b = 110;
  b = 666;
  print(b);
}
//声明一个变量b，b是double类型 
void main(){
  double b = 110.45;
  b = 666;
  print(b);
}
//声明一个变量str，str是字符串 
void main(){
  String str = '''
  hello
  world
  wangcai
  ''';
  print(str);
}
//声明一个变量str，str是字符串 
void main(){
  int a = 100;
  String str = "hello ${a} world wangcai";
  print(str);
}
//+可以拼接字符串，*可以把一个字符串变成多个 
void main(){
  String str1 = "hello";
  String str2 = "hello";  
  String str = str1+str2;  
  print(str);
}
---------------------------
void main(){
  // 创建一个list
  // List list = [1,2,3,true,"hello"];
  // print(list);
  // 创建一个不可变的list2
  // List list2 = const[1,2,3,"hello"];
  // list2[1] = 9;
  // print(list2);//代码运行报错
  // 声明一个指定类型的数组
  // List list3 = <int>[1,2,3];
  // print(list3);

}
---------------------------
// Map (键值对)
  // 创建 Map： Map language = { "first": "dart", "second": "java" };
  // 创建不可变的 Map： Map language = const { "first": "dart", "second": "java" };
  // 构造创建： Map language = new Map();
  // dart中肯定有很多的方法去操作Map 

  // [], length
  // isEmpty, isNotEmpty
  // keys, values
  // forEach()
---------------------------

*/
