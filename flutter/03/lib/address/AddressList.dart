import 'package:flutter/material.dart';
class AddressList extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("我的地址列表"),
      ),
      body: ListView(
        children: <Widget>[
          GestureDetector(
            onTap: (){
              //pop后面可以跟上参数
              Navigator.of(context).pop("旺财 北京市昌平区沙河镇北京科技经营管理学院");
            },
            //可以给子组件添加事件
            child: Container(
              decoration: BoxDecoration(border: Border.all(color:Colors.black26)),
              child: ListTile(
                leading: Icon(
                  Icons.account_box,
                  color:Colors.blue,
                ),
                title: Text(
                  "旺财 北京市昌平区沙河镇北京科技经营管理学院",
                    maxLines: 1,
                    overflow: TextOverflow.ellipsis,
                  ),
              ),
            ),
          ),GestureDetector(
            onTap: (){
              //pop后面可以跟上参数
              Navigator.of(context).pop("张三 北京市昌平区沙河镇北京科技经营管理学院");
            },
            //可以给子组件添加事件
            child: Container(
              decoration: BoxDecoration(border: Border.all(color:Colors.black26)),
              child: ListTile(
                leading: Icon(
                  Icons.account_box,
                  color:Colors.blue,
                ),
                title: Text(
                  "张三 北京市昌平区沙河镇北京科技经营管理学院",
                    maxLines: 1,
                    overflow: TextOverflow.ellipsis,
                  ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}