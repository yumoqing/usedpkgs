/*
需新增以下初始化属性
root：根目录，所有URL系统自动包含此参数
folderlistURL：列出目录内容（含文件和目录，目录可以展开显示下级目录内容，用treegrid实现），接受一个参数path，‘/'代表根目录。
newfolderURL：创建一个新目录，一个参数，path，需创建的目录，从root开始的路径
newfileURL:创建一个新文件，需两个参数，path：文件所在的目录，filename文件名
openfileURL：打开一个新文件，需一个参数：filepath：文件从root开始的全路径
savefileURL：写入一个文件，需两个个参数；filepath：文件从root开始的全路径；content：写入的文件内容

*/
KindEditor.plugin('open', function(K) {
        var editor = this, name = 'open';
        // 点击图标时执行
        editor.clickToolbar(name, function() {
			console.log('open called 你好');
        });
		K.lang({hello : '你好'});
});