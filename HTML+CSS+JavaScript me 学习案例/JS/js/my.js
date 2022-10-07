function print_arry(array){
	for (var i = 0; i < array.length; i++) {
		document.write(array[i]+"&nbsp;&nbsp;&nbsp;");
	}
}

function array_reverse(array){
	var b = array.reverse();
	print_arry(b);
}

function array_concat(arr1,arr2){
	return arr1.concat(arr2);
}

function what_Week(year,month,date){
	var now_2025 = new Date(year,month,date);
	document.write("2025-11-11是--星期"+now_2025.getDay());
	
	var now_2022 = new Date();
	var time01 = now_2022.getTime();
	var time02 = now_2025.getTime();
	var time03 = time02-time01;
	document.write("<br/>")
	document.write("2025-11-11距离现在有多少毫秒"+time03);
	var day = time03/(1000*60*60*24);
	document.write("<br/>")
	document.write("2025-11-11距离现在有多少天"+day);
} 

function delete_space(str){
	return str.replace(/(^\s*)|(\s*$)/g, ""); 
}