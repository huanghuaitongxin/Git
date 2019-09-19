import 'package:flutter/material.dart';
//表示是一个有状态组件
class MyHomePage extends StatefulWidget {
  MyHomePage({Key key,this.title}):super(key :key);
  final String title;
  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  //定义一个变量，这是一个私有变量
  int _counter = 0;
  _incrementCounter(){
    // 要去改变一个状态，需要通过setState
    setState((){
      _counter++;
    });
  }
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('${widget.title}'),),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text("You have pushed the button this many times:"),
            Text("$_counter",
            style: TextStyle(
              fontSize: 33,
              color: Colors.grey
            ),
            )
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        tooltip: "increment",
        child: Icon(Icons.add),
        onPressed: (){
          _incrementCounter();
        },
      ),
    );
  }
}