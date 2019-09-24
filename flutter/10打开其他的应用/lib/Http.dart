import 'package:flutter/material.dart';
import 'package:dio/dio.dart';
import 'dart:convert';
class HttpDemo extends StatefulWidget {
  @override
  _HttpDemoState createState() => _HttpDemoState();
}

class _HttpDemoState extends State<HttpDemo> {
  List _list = [];
  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    this._getData();
  }
  _getData() async{
    var apiUrl = "https://movie.douban.com/j/search_subjects?type=movie&tag=热门&page_limit=50&page_start=0";
    var result = await Dio().get(apiUrl);
    setState(() {
     this._list=result.data["subjects"] ;
    });
  }
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text("请求数据，渲染数据"),),
      body: this._list.length>0 ? ListView.builder(
        itemCount: this._list.length,
        itemBuilder: (context,index){
          return ListTile(
            leading: Image.network("${this._list[index]['cover']}"),
            title: Text("${this._list[index]['title']}"),
          );
        },
      ):Text("加载中...")
    );
  }
}