import 'package:flutter/material.dart';
class SearchPage extends StatelessWidget {
  final arguments;
  SearchPage({this.arguments});
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("${this.arguments['id']}"),
      ),
    );
  }
}