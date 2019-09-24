import 'dart:io';
import 'package:flutter/material.dart';
import 'package:image_picker/image_picker.dart';
import 'package:dio/dio.dart';

class ImagePickerPage extends StatefulWidget {
  @override
  _ImagePickerPageState createState() => _ImagePickerPageState();
}

class _ImagePickerPageState extends State<ImagePickerPage> {
  File _image;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("ImagePicker"),
      ),
      body: SingleChildScrollView(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            RaisedButton(
              onPressed: _takePhoto,
              child: Text("拍照"),
            ),
            RaisedButton(
              onPressed: _openGallery,
              child: Text("选择图库照片"),
            ),
            _buildImage()
          ],
        ),
      ),
    );
  }
  _takePhoto() async {
    var image = await ImagePicker.pickImage(source:ImageSource.camera,maxWidth:400);
    setState(() {
     this._image = image; 
    });
    this._uploadImage(image);
  }
  //相册
  _openGallery() async {
    var image = await ImagePicker.pickImage(source:ImageSource.gallery,maxWidth:400 );
    setState(() {
     this._image=image; 
    });
    this._uploadImage(image);
  }
  // 定义一个组件显示图片
  Widget _buildImage(){
    if(this._image==null){
      return Text("请选择图片...");
    }
    return Image.file(this._image);
  }
  // 上传图片
  _uploadImage(_imageDir) async {
    FormData formData = new FormData.from({
      "name":"zhangsan",
      "age":"20",
      "sex":"男",
      "file":new UploadFileInfo(_imageDir, "xxx.jpg")
    });
    var response = await Dio().post("http://jd.itying.com/imgupload", data: formData);
    print(response);
  }
  //上传图片
  _uploadImage(_imageDir) async{
      FormData formData = new FormData.from({
        "name": "zhangsna 6666666666",
        "age": 20,
        "sex":"男",
        "file":new UploadFileInfo(_imageDir, "xxx.jpg"),
      });
      print(".....");
      var response = await Dio().post("http://192.168.1.173:3000/imgupload", data: formData);
      print(response);
  }
}