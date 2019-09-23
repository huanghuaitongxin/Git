import 'package:flutter/material.dart';
class FormPage extends StatelessWidget {
  String title;
  FormPage({this.title="xxx"});
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(this.title),
      ),
    );
  }
}