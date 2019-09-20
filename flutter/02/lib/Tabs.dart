import 'package:flutter/material.dart';

import './address/Home.dart';
import './address/Search.dart';
import './address/Setting.dart';
class Tabs extends StatefulWidget {
  @override
  _TabsState createState() => _TabsState();
}

class _TabsState extends State<Tabs> {
  int _currentIndex = 0;
  List _list = <Widget>[
    Home(),
    Settings(),
    Search()
  ];
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title:Text("flutter")
      ),
      body: this._list[_currentIndex],
      bottomNavigationBar: BottomNavigationBar(
        currentIndex: _currentIndex,
        onTap: (int index){
          setState(() {
           this._currentIndex = index; 
          });
        },
        items: [
          BottomNavigationBarItem(
            icon: Icon(Icons.home),
            title: Text("首页")
          ), BottomNavigationBarItem(
            icon: Icon(Icons.settings),
            title: Text("设置")
          ), BottomNavigationBarItem(
            icon: Icon(Icons.search),
            title: Text("搜索")
          ),
        ],
      ),
    );
  }
}