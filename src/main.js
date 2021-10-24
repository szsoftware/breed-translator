
var dictionary = {
	"恢复控制台"	: "Recovery Console",
	"内存"		: "RAM",
	"以太网"	: "Ethernet",
	"时钟频率"	: "Clock Frequency",
	"编译日期"	: "Compile Date",
	"版本"		: "Version",
	"系统信息"	: "System Info",
	"请选择正确的固件类型" : "Please select the correct type of firmware",
	"错误选择可能损坏固件" : "The wrong choice could damage the firmware",
	"设置当前刷入固件的类型" : "Set the current type of brush into the firmware",
	"以便于在启动固件时设置特定的参数" : "In order to set specific parameters when starting the firmware",
	"单击 [执行] 以恢复出厂设置" : "Click [Execute] to restore factory settings",
	"固件类型"	: "Firmware Type",
	"固件更新"	: "Firmware Update",
	"固件备份"	: "Firmware Backup",
	"固件启动设置"	: "Firmware Startup Settings",
	"常规固件"	: "Legacy Firmware",
	"固件"		: "Firmware",
	"闪存布局"	: "Flash Layout",
	"自动重启"	: "Automatic Reboot",
	"上传"		: "Submit",
	"执行"		: "Execute",
	"保存"		: "Save",
	"编程器"	: "Compiler",
	"公版"		: "Reference",
	"精简"		: "Compact",
	"备份"		: "Backup",
	"小米"		: "Wifi",
	"频率设置"	: "Frequency Setting",
	"提示"		: "Attention",
	"如果超频后无法开机": "If you can not boot after overclocking",
	"请按住复位键再通电": "Press and hold the reset button, then power on",
	"系统将以默认频率启动": "The system will start the default frequency",
	"恢复出厂设置"	: "Reset",
	"地址修改"	: "Address Modification",
	"修改"		: "Modify",
	"独立参数"	: "Indepentend Participation Number",
	"重启"		: "Restart",
	"按钮以"	: " button to ",
	"路由"		: " routing",
	"单击"		: "Click",
	"修订号"	: "Revision Number",
	"关于"		: "About",
	"联系作者"	: "Contact the autor",
}

document.title = "Breed Web Recovery Console";

for (key in dictionary) {
  document.body.innerHTML = document.body.innerHTML.replace(new RegExp(key, "g"), dictionary[key]);
}

var div_about = document.getElementById("about");
if(div_about) {
  var my_about = document.createElement("div");
  my_about.innerHTML = "<p>Breed Translator Extension for Chrome by szsoftware:</br><a href='https://github.com/szsoftware/breed-translator'>https://github.com/szsoftware/breed-translator</a></p>";
  div_about.appendChild(my_about);
}
