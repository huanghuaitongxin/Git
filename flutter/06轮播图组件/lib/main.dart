import 'package:flutter/material.dart';

import './routes/Routes.dart';

void main() {
  runApp(MyApp());
}

//自定义组件 写组件 无状态组件
class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      initialRoute: "/", //默认访问路径
      onGenerateRoute: onGenerateRoute,
    );
  }
}
//自定义一个组件
