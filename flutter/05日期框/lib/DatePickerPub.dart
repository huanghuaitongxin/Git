import 'package:flutter/material.dart';
import 'package:date_format/date_format.dart';
import 'package:flutter_cupertino_date_picker/flutter_cupertino_date_picker.dart';

class DatePickerPubDemo extends StatefulWidget {
  @override
  _DatePickerPubDemoState createState() => _DatePickerPubDemoState();
}

class _DatePickerPubDemoState extends State<DatePickerPubDemo> {
  DateTime _dateTime = DateTime.now();
  void _showDatePicker() {
    DatePicker.showDatePicker(
      context,
      pickerTheme: DateTimePickerTheme(
        showTitle: true,
        confirm: Text('确定', style: TextStyle(color: Colors.red)),
        cancel: Text('消化', style: TextStyle(color: Colors.cyan)),
      ),
      minDateTime: DateTime.parse("1990-01-01"),
      maxDateTime: DateTime.parse("2022-12-12"),
      initialDateTime: _dateTime,
      dateFormat: "yyyy-MMMM-dd",
      locale: DateTimePickerLocale.zh_cn,
      onClose: () => print("----- onClose -----"),
      onCancel: () => print('onCancel'),
      // onChange: (dateTime, List<int> index) {
      //   setState(() {
      //     _dateTime = dateTime;
      //   });
      // },
      onConfirm: (dateTime, List<int> index) {
        setState(() {
          _dateTime = dateTime;
        });
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    return  Scaffold(
      appBar: AppBar(
        title: Text("日期处理(插件)"),
      ),
      body: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: <Widget>[
          InkWell(
            child: Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
                Text(
                  "${formatDate(_dateTime,[yyyy,'-',mm,'-',dd])}",
                  style: TextStyle(fontSize: 38),
                ),
                Icon(Icons.arrow_drop_down)
              ],
            ),
            onTap: _showDatePicker,
          ),
        ],
      ),
    );
  }
}
