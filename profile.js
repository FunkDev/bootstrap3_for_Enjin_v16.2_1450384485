$( document ).ready(function() {
setTimeout(
  function() 
  {
var username=$('#enjin-bar span.element_username').text();
var messages=$('#enjin-tray .messages .button_total').text();
var notifications=$('#enjin-tray .notifications .button_total').text(); 
var applications=$('#enjin-tray .applications .button_total').text(); 
var points=$('.m_pointsdisplay .points-total').text();
var adminstatus=$('#enjin-bar .left a[href$=\"/admin\"]').text();
var enjinlikes=$('#enjin-bar #enjin-like-site .likes').text();




//Username, guest, join, register and basic menu items

if (username == ''){ 

//What Guest sees
$("#boot_username a").prepend("Guest <b class=\"caret\"></b>");

$("#boot_username >.dropdown-menu").append("<li><a href=\"/login\" >Login</a></li>");

$("#boot_username >.dropdown-menu").append("<li id=\"boot_register\"></li>");

$('#enjin-bar a[href$="/register"]').prependTo($('#boot_register'));



}

else{

$("#boot_username >a").prepend(username+"<b class=\"caret\"></b>");

$("#boot_username >.dropdown-menu").append("<li id=\"boot_join\"></li>");

$('#enjin-bar .right .join-site a').prependTo($('#boot_join'));



$("#boot_username >.dropdown-menu").append("<li><a href=\"/profile\" target=\"_blank\">Profile</a></li>");

$("#boot_username >.dropdown-menu").append("<li><a href=\"/dashboard/settings\" target=\"_blank\">Account Settings</a></li>");

$("#boot_username >.dropdown-menu").append("<li><a href=\"/dashboard/settings/website\" target=\"_blank\">Website Settings</a></li>");

$("#boot_username >.dropdown-menu").append("<li id=\"boot_messages\"></li>");
$("#boot_username >.dropdown-menu").append("<li id=\"boot_applications\"></li>");
$("#boot_username >.dropdown-menu").append("<li id=\"boot_dashboard\"></li>");

}





//Messages display

if (messages == ''){

$("#boot_messages").append("<a href=\"/dashboard/messages\"><span class=\"badge label-success pull-right\">0</span> Messages</a>");
}

else{

$("#boot_messages").append("<a href=\"/dashboard/messages\"><span class=\"badge label-success pull-right\">"+ messages +" </span> Messages</a>");
}

//Applications display

if (applications == ''){

$("#boot_applications").append("<a href=\"/dashboard/applications\"><span class=\"badge pull-right\">0</span> Applications</a>");
}

else{

$("#boot_applications").append("<a href=\"/dashboard/applications\"><span class=\"badge pull-right\">"+ applications +" </span> Applications</a>");
}

//Notification count on dashboard link display

if (notifications == ''){

$("#boot_dashboard").append("<a href=\"/dashboard\"><span class=\"badge pull-right\">0</span> Dashboard</a>");

}

else{

$("#boot_dashboard").append("<a href=\"/dashboard\" target=\"_blank\"><span class=\"badge pull-right\">"+ notifications +" </span> Dashboard</a>");
}

//Admin link display, admin only

if (adminstatus == ''){}

else{

$("#boot_username >.dropdown-menu").append("<li><a href=\"/admin\">Admin</a></li>");

}

//Load like button

if (username != ''){ 



$("#boot_username >.dropdown-menu").append("<li class=\"divider\"></li>");
$("#boot_username >.dropdown-menu").append("<li class=\"dropdown-header\">Enjin Popularity</li>");

$("#boot_username >.dropdown-menu").append($("#enjin-like-site"));

$("#boot_username >.dropdown-menu").append("<li class=\"divider\"></li>");
$("#boot_username >.dropdown-menu").append("<li class=\"dropdown-header\">Account</li>");

$("#boot_username >.dropdown-menu").append("<li><a href=\"/logout\">Logout</a></li>");




}










//Display username after scripts finish

$( "#boot_username" ).show();
 }, 1);
});
