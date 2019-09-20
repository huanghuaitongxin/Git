import 'package:flutter/material.dart';
// 把搜索组件中的数据传递到表单组件
import './Form.dart';
class Search extends StatefulWidget {
  @override
  _SearchState createState() => _SearchState();
}

class _SearchState extends State<Search> {
  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      children: <Widget>[
        RaisedButton(
          child: Text("跳转到表单组件"),
          onPressed: (){
            Navigator.of(context).push(
              MaterialPageRoute(
                builder: (context)=>FormPage(title:"hello world")
              ),
            );
          },
        )
      ],
    );
  }
}