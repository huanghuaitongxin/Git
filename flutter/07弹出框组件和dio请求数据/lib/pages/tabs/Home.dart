import 'package:flutter/material.dart';

class HomePage extends StatefulWidget {
  HomePage({Key key}) : super(key: key);

  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  @override
  Widget build(BuildContext context) {
    return Center(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: <Widget>[
          RaisedButton(
              child: Text("调到轮播图组件"),
              onPressed: () {
                Navigator.pushNamed(context, "/swiper");
              },
              color: Theme.of(context).accentColor,
              textTheme: ButtonTextTheme.primary),
          SizedBox(height: 20),
          RaisedButton(
              child: Text("跳到弹出框组件"),
              onPressed: () {
                Navigator.pushNamed(context, "/dialog");
              },
              color: Theme.of(context).accentColor,
              textTheme: ButtonTextTheme.primary
          ),
          RaisedButton(
            child: Text("Dio请求数据并渲染数据"),
            onPressed: (){
              Navigator.pushNamed(context, "/http");
            },
          )
        ],
      ),
    );
  }
}
