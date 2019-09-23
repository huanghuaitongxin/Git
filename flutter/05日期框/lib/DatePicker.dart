import 'package:flutter/material.dart';
import 'package:date_format/date_format.dart';

class DatePickerDemo extends StatefulWidget {
  @override
  _DatePickerDemoState createState() => _DatePickerDemoState();
}

class _DatePickerDemoState extends State<DatePickerDemo> {
 DateTime _nowDate = DateTime.now();
  _showDataPicker() async {
    // showDatePicker flutter自己
    var result = await showDatePicker(
      context: context,
      initialDate: DateTime.now(),
      firstDate: DateTime(1980),
      lastDate: DateTime(2100)
    );
    setState(() {
     this._nowDate = result; 
    });
  }
  @override
  void initState() {
    // TODO: implement initState
    super.initState();
  }
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text("日期处理"),),
      body: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: <Widget>[
          InkWell(
            child: Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
                Text("${formatDate(_nowDate,[yyyy,'年',mm,'月',dd])}",
                      style: TextStyle(fontSize: 38),
                ),
                Icon(Icons.arrow_drop_down)
              ],
            ),
            onTap: _showDataPicker,
          )
        ],
      ),
    );
  }
}