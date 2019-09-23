import 'package:flutter/material.dart';

import './AddressList.dart';

class GetAddress extends StatefulWidget {
  @override
  _GetAddressState createState() => _GetAddressState();
}

class _GetAddressState extends State<GetAddress> {
  String _ads = "";
  @override
  Widget build(BuildContext context) {
    return Container(
      child: Scaffold(
        appBar: AppBar(
          title: Text("获取收货地址"),
        ),
        body: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              RaisedButton(
                textTheme: ButtonTextTheme.primary,
                color: Theme.of(context).accentColor,
                child: Text("选择收货地址"),
                onPressed: () async {
                  //获取子组件的数据是异步
                  var ads = await Navigator.of(context)
                      .push(MaterialPageRoute(builder: (BuildContext context) {
                    return AddressList();
                  }));
                  setState(() {
                    _ads = ads;
                  });
                },
              ),
              Text("${_ads == '' ? '未查到收获地址' : _ads}")
            ],
          ),
        ),
      ),
    );
  }
}
