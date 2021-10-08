var data = [
  { type: "img", file: img1 },
  { type: "txt", file: txt1 },
]

function Upload() {}

Upload.prototype.init = function () {
  // 初始化文件上传的 html
}

Upload.prototype.delete = function () {
  // 删除掉该 html
}

Upload.prototype.uploading = function (fileType, file) {
  // 上传
}

var upload = new Upload()
for (var i = 0; i < data.length; i++) {
  upload.uploading(data[i].type, data[i].file)
}
