import 'package:flutter/material.dart';


import './page/Category.dart';
import './page/Home.dart';
import './page/Setting.dart';



class Tabs extends StatefulWidget {
  Tabs({Key key}):super(key:key);
  @override
  _TabsState createState() => _TabsState();
}

class _TabsState extends State<Tabs> {
  int _currentIndex = 0;
  List _pageList = <Widget>[
    Home(),
    Setting(),
    Category()
  ];
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("flutter"),
      ),

      body: this._pageList[_currentIndex],

      bottomNavigationBar: BottomNavigationBar(
        currentIndex: this._currentIndex,
        onTap: (int index){
          setState(() {
           this._currentIndex = index; 
          });
        },
        items: [
          BottomNavigationBarItem(
            icon: Icon(Icons.home),
            title: Text("首页")
          ),BottomNavigationBarItem(
            icon: Icon(Icons.category),
            title: Text("分类")
          ),BottomNavigationBarItem(
            icon: Icon(Icons.settings),
            title: Text("设置")
          ),
        ],
      ),
    );
  }
}