import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter/widgets.dart';

import './address/AddressList.dart';
import './address/GetAddress.dart';
import './Tabs.dart';
import './SelfForm.dart';
void main() {
  runApp(MyApp());
}

//自定义组件 写组件 无状态组件
class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home:TextFieldDemoPage()
    );
  }
}
//自定义一个组件

