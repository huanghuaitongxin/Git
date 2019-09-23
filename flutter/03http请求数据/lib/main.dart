import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
import './Tab.dart';
import './SelfRequest.dart';


void main() {
  runApp(MyApp());
}

//自定义组件 写组件 无状态组件
class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Tabs(),
    );
  }
}
//自定义一个组件

