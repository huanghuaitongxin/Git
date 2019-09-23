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
              child: Text("处理日期(内置)"),
              onPressed: () {
                Navigator.pushNamed(context, "/dataPickerPub");
              },
              color: Theme.of(context).accentColor,
              textTheme: ButtonTextTheme.primary),
          SizedBox(height: 20),
        ],
      ),
    );
  }
}