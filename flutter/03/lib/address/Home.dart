import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import "dart:convert";

class Home extends StatefulWidget {
  Home({Key key}) : super(key: key);
  @override
  _HomeState createState() => _HomeState();
}

class _HomeState extends State<Home> {
  List _list = [];
  @override
  void initState() {
    // TODO: implement initState
    http1();
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return DefaultTabController(
      length: 3,
      child: Scaffold(
        appBar: AppBar(
          backgroundColor: Colors.white,
          title: Row(
            children: <Widget>[
              Expanded(
                child: TabBar(
                  indicatorColor: Colors.red,
                  labelColor: Colors.black,
                  tabs: <Widget>[
                    // Tab(text: "北京"),
                    Tab(text: "正在热映"),
                    Tab(text: "即将上映"),
                    Tab(child: Icon(Icons.search)),
                    // Tab(icon: Icons.search)
                  ],
                ),
              ),
            ],
          ),
        ),
        body: TabBarView(
          children: <Widget>[
            ListView.builder(
                itemCount: _list.length,
                itemBuilder: (BuildContext context, int i) {
                  return Image.network("${_list[i]["img"]}");
                }),
            ListView(
              children: <Widget>[
                ListTile(title: Text("2")),
                ListTile(title: Text("2")),
                ListTile(title: Text("2")),
              ],
            ),
            ListView(
              children: <Widget>[
                ListTile(title: Text("3")),
                ListTile(title: Text("3")),
                ListTile(title: Text("3")),
              ],
            )
          ],
        ),
      ),
    );
  }

  http1() async {
    String url = "http://m.maoyan.com/ajax/movieOnInfoList";
    http.Response response = await http.get(url);
    // print(response);  // I/flutter ( 3594): Instance of 'Response'
    // print(response.body);  // 得到原始直接数据
    Map<String, dynamic> responseData = json.decode(response.body); // 转成json对象
    // print(responseData["movieList"]);
    setState(() {
      this._list = responseData["movieList"];
    });
  }
}
