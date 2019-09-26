var model = {
    name: 'Data Value 0',
    bit: 0,
}

//GLOBALS
var on = true;
var markerBool = true;
var DBmarkerBool = true;
var igString;
var scString;
var fbString;
var googleString;
var youTubeString;
var twitterString;
var dbMarkers = [];
//GLOBALS END

var vm = new Vue({
el: '#app',
data: model,
methods: {
    // Test VUE Connection 
    testVue: function(){
        alert('Test Successful!!!')
    },

    //   Go to Site
    goToSite: function(){
        var goToLoc = prompt("Enter site Lat, Lng");
        var bitsGoTo = goToLoc.split(/,\s*/);

        // Convert input
        var goToCent = new google.maps.LatLng(parseFloat(bitsGoTo[0]), parseFloat(bitsGoTo[1]))
        map.setCenter(goToCent);
        map.setZoom(18);
    },

    // <!-- Check Geolocation Browser Support -->
    getUsrLoc: function(){
        if (navigator.geolocation) {
            // alert("GeoLocation is supported!!!");
            navigator.geolocation.getCurrentPosition(successPosition);
        }
        else {
            alert("Your browser does not support GeoLocation!!!");
        }
    },

    //Wrapped in Fuction to Collapse
    //Get Rid of Wrapping Function
    legacyDB_On: function(){
        // //LEGACY Database initialize
        // dbON: function(){
        //     // alert('I Work DB');
        //     var jsonURL = "https://spreadsheet.glitch.me/?key=17xDXDGYGY0vPaV9Pp9Cidi1oSdNnty0sY6fONzTSxuM";
        //     $.getJSON(jsonURL, function (json_out) {
        //         /*position, address,
        //           owner, status, type,
        //           numBeds, numBaths, numGarages
        //           */


        //         var i;
        //         var infowindow = new google.maps.InfoWindow({
        //             pixelOffset: new google.maps.Size(-234, 0)
        //         });
        //         dbMarkers = []; 



        //         //Info Window Function
        //         function addInfoWin(marker, winText) {
        //             var infowindow = new google.maps.InfoWindow({
        //                 content: winText,
        //                 pixelOffset: new google.maps.Size(-234, 0)
        //             });

        //             marker.addListener('click', function () {
        //                 infowindow.open(marker.get('map'), marker);
        //                 map.setZoom(16);
        //                 map.panTo(this.getPosition());
        //             });

        //             dbMarkers.push(marker);

        //         }


        //         for (i = 0; i < json_out.length; i++) {
        //             // $('#clientK').text(json_out[i].position);

        //             var propAddr = json_out[i].Property_Address;
        //             var dbPropLoc = json_out[i].Position_Latitude_Longitude;
        //             var bitsJsonLoc = dbPropLoc.split(/,\s*/);


        //             // Convert input
        //             var jsonCoord = new google.maps.LatLng(parseFloat(bitsJsonLoc[0]), parseFloat(bitsJsonLoc[1]));

        //             var jsonIMG = new google.maps.MarkerImage(
        //                 'http://maps.google.com/mapfiles/kml/pal3/icon56.png', //'http://i.imgur.com/3YJ8z.png'
        //                 new google.maps.Size(500, 500),    // size of the image
        //                 new google.maps.Point(0, 0), // origin, in this case top-left corner
        //                 new google.maps.Point(9, 25)    // anchor, i.e. the point half-way along the bottom of the image
        //             );

        //             var marker = new google.maps.Marker({
        //                 position: jsonCoord,
        //                 map: map,
        //                 title: propAddr,
        //                 icon: jsonIMG

        //             });

        //             var contentString =
        //                 '</div>' +
        //                 "<strong>" + json_out[i].Property_Address + "</strong>" +
        //                 '<div id="bodyContent">' +
        //                 '<p><strong>Type: </strong>' + json_out[i].Property_Type + '</p>' +
        //                 '<p><strong>Beds: </strong>' + json_out[i].Number_Beds_or_Offices + '</p>' +
        //                 '<p><strong>Baths: </strong>' + json_out[i].Number_Baths + '</p>' +
        //                 '<p><strong>Garages: </strong>' + json_out[i].Number_Garages + '</p>' +
        //                 '<a href =' + json_out[i].FloorPlan_URL + ' download>' + '<img id = "infoIMG" width = 100px src='
        //                 + json_out[i].FloorPlan_URL + ' border = "100" >' + '</a>'
        //             '</div>';

        //             addInfoWin(marker, contentString);

        //             // marker.addListener('click', function() {
        //             //         map.setZoom(16);
        //             //         map.panTo(this.getPosition());
        //             //         infowindow.open(map, marker)
        //             //
        //             //       });

        //             //Update Form DROPDOWN_MENU
        //             var selList = document.getElementById("overlayURL0");
        //             var option = document.createElement('option');
        //             option.text = json_out[i].Property_Address;
        //             selList.add(option);

        //             var selList = document.getElementById("overlayURL");
        //             var option = document.createElement('option');
        //             option.text = json_out[i].FloorPlan_URL;
        //             selList.add(option);

        //             //Link FORM Select Dependancies





        //             //Update Form DROPDOWN_MENU


        //         } //END FOR

        //     }); //END JSON Query

        //     alert('Database Reached....');

        // }, // END dbOn Function

    },

     // Firebase Database Write Data
    writeData: function ()
    {
        //fbRef = Firebase Reference
        fbRef.child('data').push()
            .set({ pos_lat_lng: "40.357382, -98.884148", prop_Address: "Memorial Stadium",
            prop_owner: "Jane Fonda", prop_status: "Occupied", prop_type: "Commercial", numBeds_numOffices: 0,
            numBaths: 0, numGarages: 0, flPlan0_URL: 'http://gdurl.com/BSJG',flPlan0_LL: "39.2779876,-76.6227044",
            plPlan0_UR: "39.2779876,-76.6227044", flPlan1_URL: 'http://gdurl.com/ul7i',flPlan1_LL: "39.2779876,-76.6227044",
            plPlan1_UR: "39.2779876,-76.6227044"
        });

        window.alert('Successfully Pushed NEW Entry....');

    },

    // Firebase Database Retrieve Data
    dbOn2: function () {
        alert('Connecting to Database...');
    
        var entries = fbRef.child('data');
        entries.on('value', function(snapshot) 
        {
            var dbLength = snapshot.numChildren(); 

            //Info Window Function
            function addInfoWin(marker, winText) {
                var infowindow = new google.maps.InfoWindow({
                    content: winText,
                    pixelOffset: new google.maps.Size(-234, 0)
                });

                marker.addListener('click', function () {
                    infowindow.open(marker.get('map'), marker);
                    map.setZoom(16);
                    map.panTo(this.getPosition());
                });

                dbMarkers.push(marker);
            }

            snapshot.forEach(function(childSnapshot) {
              var childData = childSnapshot.val();
              //alert(childData.Address);

                var propAddr = childData.Shop_Name + '\n' +  childData.Address;
                
                
                var dbPropLoc = childData.Latitude + ", " + childData.Longitude;
                var bitsJsonLoc = dbPropLoc.split(/,\s*/);


                // Convert input
                var jsonCoord = new google.maps.LatLng(parseFloat(bitsJsonLoc[0]), parseFloat(bitsJsonLoc[1]));

                var jsonIMG = new google.maps.MarkerImage(
                    'images/shop.png', //'http://i.imgur.com/3YJ8z.png'
                    new google.maps.Size(500, 500),    // size of the image
                    new google.maps.Point(0, 0), // origin, in this case top-left corner
                    new google.maps.Point(9, 25)    // anchor, i.e. the point half-way along the bottom of the image
                );

                var marker = new google.maps.Marker({
                    position: jsonCoord,
                    map: map,
                    title: propAddr,
                    icon: jsonIMG

                });


                //change Social Media String
                if(childData.Facebook === "" || childData.Facebook === 'noData'){
                    // alert('IG NoData');
                    fbString = '<a name = "here"><img id = "infoIMG" width = 30px src='
                    + 'images/facebook-noData.png title="No Facebook Review"></a>'
                }else{
                    // alert('IG Got Data');
                    fbString = '<a href =' + childData.Facebook + ' download><img id = "infoIMG" width = 30px src=images/facebook.png title="Facebook Review"></a>'
                };
                if(childData.Instagram === "" || childData.Instagram === 'noData'){
                    // alert('IG NoData');
                    igString = '<a name = "here"><img id = "infoIMG" width = 30px src='
                    + 'images/Instagram-noData.png title="No Instagram Review"></a>'
                }else{
                    // alert('IG Got Data');
                    igString = '<a href =' + childData.Instagram + ' download><img id = "infoIMG" width = 30px src=images/Instagram.png title="Instagram Review"></a>'
                };

                if(childData.Twitter === "" || childData.Twitter === 'noData'){
                    // alert('IG NoData');
                    twitterString = '<a name = "here"><img id = "infoIMG" width = 30px src='
                    + 'images/twitter-noData.png title="No Twitter Review"></a>'
                }else{
                    // alert('IG Got Data');
                    twitterString = '<a href =' + childData.Twitter + ' download><img id = "infoIMG" width = 30px src=images/twitter.png title="Twitter Review"></a>'
                };

                if(childData.SnapChat === "" || childData.SnapChat === 'noData'){
                    // alert('IG NoData');
                    scString = '<a name = "here"><img id = "infoIMG" width = 30px src='
                    + 'images/SnapChat_noData.png title="No SnapChat Review"></a>'
                }else{
                    // alert('IG Got Data');
                    scString = '<a href =' + childData.SnapChat + ' download><img id = "infoIMG" width = 30px src=images/SnapChat.png title="SnapChat Review"></a>'
                };
                if(childData.Google === "" || childData.Google === "noData"){
                    
                    googleString = '<a name = "here"><img id = "infoIMG" width = 30px src='
                    + 'images/Google-noData.png title="No Google Review"></a>'
                }else{
                    
                    googleString = '<a href =' + childData.Google + ' download><img id = "infoIMG" width = 30px src=images/Google.png title="Google Review"></a>'
                };
                if(childData.YouTube === "" || childData.YouTube === "noData"){
                    
                    youTubeString = '<a name = "here"><img id = "infoIMG" width = 30px src='
                    + 'images/YouTube-noData.png title="No YouTube Review"></a>'
                }else{
                    
                    youTubeString = '<a href =' + childData.Google + ' download><img id = "infoIMG" width = 30px src=images/YouTube.png title="YouTube Review"></a>'
                };
                //change Social Media String END

                var contentString =
                    '<p> <img id = "shopLogo" width = 65px src='
                    + "'" + childData.Shop_Logo + "'" + '</p></br>' +
                    '</div>' +
                    "<strong>" + childData.Shop_Name + "</strong>" +
                    '<div id="bodyContent">' +
                    '<p> Address: ' + childData.Address + '</p>'+
                    '<p> State: ' + childData.State + '</p>'+
                    '<strong>Reviews:</strong>' +
                    
                    '<p>' + fbString + '&#160 &#160' 
                    + igString + '&#160 &#160'
                    + twitterString + '&#160 &#160'
                    + scString + '&#160 &#160'
                    + googleString + '&#160 &#160'
                    + youTubeString
                    + '</p>' 
                    + '<p> Website: <a href =' + childData.Web_URL + ' download>' + 'LINK' + '</a> </p>'
                '</div>';

                addInfoWin(marker, contentString);

            });

            // Place Markers on the Map from Database
          
            var infowindow = new google.maps.InfoWindow({
                pixelOffset: new google.maps.Size(-234, 0)
            });

            // Zoom To Bounds of Markers
            var bounds = new google.maps.LatLngBounds();
            for (var i = 0; i < dbMarkers.length; i++) {
                bounds.extend(dbMarkers[i].getPosition());
            }

            map.fitBounds(bounds);
            // Zoom To Bounds of Markers
            
        })
          
    },

    geoCodeZip: function () {

        var address = prompt('Enter Address, City, ST or Zip Code');

        axios.get('https://maps.googleapis.com/maps/api/geocode/json' ,{
          params:{
            address: address,
            key: 'AIzaSyC7M-2tuRjN8sbgsU86Z7qeZ_DSduTyPiU' //UNRESTRICTED AIzaSyBryq5UD8_ZxRji6fbICQYOAGII1ERWSnw
            //'AIzaSyC7M-2tuRjN8sbgsU86Z7qeZ_DSduTyPiU' RESTRICTED TO DAILY FREE QUOTA 
          } 
        })
        .then(function(response){
          console.log(response);
          // Get Lat lon
          userLatN = response.data.results[0].geometry.location.lat;
          userLonN = response.data.results[0].geometry.location.lng;
          latStr = userLatN.toString();
          lonStr = userLonN.toString();
          centerPosition = new google.maps.LatLng(userLatN, userLonN);
        //   alert(centerPosition);

          var radius = prompt('Enter Search Radius in Miles...');

          var searchRadius = new google.maps.Circle({
            strokeColor: '#00FFFF',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#00FFFF',
            fillOpacity: 0.35,
            map: map,
            center: centerPosition,
            radius: radius * 1609.34 //Convert to Miles
          });

          map.fitBounds(searchRadius.getBounds());

          // key variables: userLatN , userLonN , latStr , lonStr
        })
        .catch(function(error){
            alert('Ensure you have not Exceeded Daily Geocode Limit for this Console Account /n');
            alert(error)

        });

      },

    
            


        
    
        

    


 
}

})