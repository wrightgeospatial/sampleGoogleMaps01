 // Firebase Database Write Data
 function writeDataE()
 {
    //alert('CLICK ENTRY!!!');
    //  Declare Global Variables
     var shopAddress = 'noData';
     var fb_Review = 'noData';
     var ig_Review = 'noData';
     var sc_Review = 'noData';
     var tw_Review = 'noData';
     var google_Review = 'noData';
     var fullBay = 'noData';
     var laborRate = 'noData';
     var shopLogo = 'noData';
     var shopName = 'noData';
     var state = 'noData';
     var webURL = 'noData';
     var zip = 'noData';
     var shopLat = 'noData';
     var shopLng = 'noData';
     var youTube = 'noData';

     // GET Form Data
     shopAddress = document.getElementById("shop_Address");
     localStorage.setItem("0", shopAddress.value);

     fb_Review = document.getElementById("Facebook_Review");
     localStorage.setItem("1", fb_Review.value);

     ig_Review = document.getElementById("Instagram_Review");
     localStorage.setItem("2", ig_Review.value);

     sc_Review = document.getElementById("SnapChat_Review");
     localStorage.setItem("3", sc_Review.value);

     tw_Review = document.getElementById("Twitter_Review");
     localStorage.setItem("4", tw_Review.value);

     google_Review = document.getElementById("Google_Review");
     localStorage.setItem("5", google_Review.value);

     fullBay = document.getElementById("fullbay");
     localStorage.setItem("6", fullBay.value);

     laborRate = document.getElementById("laborRate");
     localStorage.setItem("7", laborRate.value);

     shopLogo = document.getElementById("shopLogo");
     localStorage.setItem("8", shopLogo.value);

     shopName = document.getElementById("shopName");
     localStorage.setItem("9", shopName.value);

     state = document.getElementById("state");
     localStorage.setItem("10", state.value);

     webURL = document.getElementById("webURL");
     localStorage.setItem("11", webURL.value);

     zip = document.getElementById("zipCode");
     localStorage.setItem("12",  zip.value);

     shopLat = document.getElementById("shopLat");
     localStorage.setItem("13", shopLat.value);

     shopLng = document.getElementById("shopLng");
     localStorage.setItem("14", shopLng.value);

     youTube = document.getElementById("youTube");
     localStorage.setItem("15", youTube.value);

    var entry0 = localStorage.getItem("0");
    var entry1 = localStorage.getItem("1");
    var entry2 = localStorage.getItem("2");
    var entry3 = localStorage.getItem("3");
    var entry4 = localStorage.getItem("4");
    var entry5 = localStorage.getItem("5");
    var entry6 = localStorage.getItem("6");
    var entry7 = localStorage.getItem("7");
    var entry8 = localStorage.getItem("8");
    var entry9 = localStorage.getItem("9");
    var entry10 = localStorage.getItem("10");
    var entry11 = localStorage.getItem("11");
    var entry12 = localStorage.getItem("12");
    var entry13 = localStorage.getItem("13");
    var entry14 = localStorage.getItem("14");
    var entry15 = localStorage.getItem("15");

     // GET Form Data END

     

     //fbRef = Firebase Reference
     fbRef.child('data').push()
     .set({
         Address: entry0, Facebook: entry1, Instagram: entry2,
         SnapChat: entry3, Twitter: entry4, Google: entry5,
         Fullbay_Code: entry6, Labor_Rate: entry7, Shop_Logo: entry8,
         Shop_Name: entry9, State: entry10, Web_URL: entry11,
         Zip: entry12, Latitude: entry13, Longitude: entry14, 
         YouTube: entry15
     });

     window.alert('Database Entry Successfull.......');


     // Relaod
     var time = new Date().getTime();
     $(document.body).bind("mousemove keypress", function (e) {
         time = new Date().getTime();

        })

}
