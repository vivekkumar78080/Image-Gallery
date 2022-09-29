function borderImage(x) {
    x.style.border = "2px solid yellow";
} 

angular
.module('photoGalleryModule', [])
.controller('photoGalleryCtrl', function ($scope) {

var photoSource = [
                    [ "images/1.jpg","images/2.jpg","images/3.jpg","images/4.jpg"],
                    [ "images/5.jpg","images/6.jpg","images/7.jpg","images/8.jpg"],
                    [ "images/9.jpg","images/10.jpg","images/11.jpg","images/12.jpg"],
                    [ "images/13.jpg","images/14.jpg","images/15.jpg","images/16.jpg"]                    
               ]; 

 var body = "<table width='100%' height='575'>";

    var row=4;
    var col=4;     
    
     for(var i=0;i<row;i++){

         body += "<tr>";  

        for(var j=0;j<col;j++)
        {
        	
            body +="<td> <img width='100%' height='100px' id='"+i+j+"' src='" + photoSource[i][j] + "'onmouseover=borderImage(this);></td>";
        }
        body += "</tr>";
     }

     body += "</table>";

     console.log(body);

     $("#divPhoto").html(body);

      
    
});