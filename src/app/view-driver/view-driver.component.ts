import { Component, OnInit } from '@angular/core';
import { DriverData } from '../driver-list/driverData';
import { DomSanitizer } from '@angular/platform-browser';
import { VendorService } from '../vendor.service';
import { VendorData } from '../vendor-list/vendorData';
import { Router, ActivatedRoute } from '@angular/router';
import { CabData } from '../cab-list/cabData';
import { CabService } from '../cab.service';
import { DriverService } from '../driver.service';

@Component({
  selector: 'app-view-driver',
  templateUrl: './view-driver.component.html',
  styleUrls: ['./view-driver.component.css']
})
export class ViewDriverComponent implements OnInit {
  private dimage : any;
  module="vendor";
  navLocation="/ Driver Details"
  private pimage : any;
  private readonly imageType : string = 'data:image/PNG;base64,';  
  public sub;
  public driver_id;
  public driver;
  public selectedItem: any;
  filterValue: any;
  public showLoading=true;
  public showLoader = true;
  public display;
  public fault;
  public message_image;
  checked = true;
  

  constructor(private sanitizer: DomSanitizer,public _driverData: DriverData, public _cabData: CabData, public _vendorData: VendorData, private router: Router,private _vendorService:VendorService, private _cabService:CabService,private route:ActivatedRoute,private _driverService:DriverService,private httpService:VendorService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.driver_id = +params['driver_id'];
      console.log(this.driver_id);
    });
    this._driverService.getDriverByKey(this.driver_id).subscribe((response)=>{
      this.driver = response.result[0];
      this.showLoading=false;
      console.log(this.driver);
    })
   // this.driver = JSON.parse(localStorage.getItem('Driver'));
    //this.driver=this._driverData.getItem();
    //console.log(this.driver);
  }
  getImage(d)
  {
    console.log(d);
    return this.sanitizer.bypassSecurityTrustUrl('data:image/PNG;base64,'+ d);
  }
  searchVen(vendor_Id){
    
    this.filterValue= vendor_Id;
   // this.filterType=vendor_id;
    //console.log(vendor_Id+" "+this.filterValue);
   
    let JSONStr = "{'request':{'vendor_id': '"+this.filterValue+"'}}";
     console.log(JSONStr);
    this._vendorService.searchVendor(JSONStr).subscribe((response)=>{
      //console.log(this.vendor);
      let a=response.result;
      console.log(a[0]);
     //  this.selectedItem=response.result;
      console.log(this.selectedItem)
      this._vendorData.setItem(a[0]);
      this.router.navigate(['view-vendor']);
     });
   //  this.selectedItem=this.vendor;
   
    //this.router.navigate(['view-vendor']);
  }
  
  searchCab(cab_Id){
    
    this.filterValue= cab_Id;
   // this.filterType=vendor_id;
    //console.log(vendor_Id+" "+this.filterValue);
   
    let JSONStr = "{'request':{'cab_license_plate_no': '"+this.filterValue+"'}}";
     console.log(JSONStr);
    this._cabService.searchCab(JSONStr).subscribe((response)=>{
      //console.log(this.vendor);
      let a=response.result;
      console.log(a[0]);
     //  this.selectedItem=response.result;
      console.log(this.selectedItem)
      this._cabData.setItem(a[0]);
      this.router.navigate(['view-cab']);
     });
   //  this.selectedItem=this.vendor;
   
    //this.router.navigate(['view-vendor']);
  }
  verify1()
  {
    if(this.driver.d_local_add_proof == '' || this.driver.d_local_add_proof == null)
    {
      return true;
    }
    else{
      return false;
    }
  }


  image(certificate)
  {
    if(certificate == "" || certificate == null || typeof certificate == "undefined")
    {
    
      this.openNav();
      this.checked = false;
      this.message_image = "image not found";

    }
    else{
      this.checked = true;
      this.message_image = '';
     
      this.openNav();
    console.log(certificate);
    let body = {"image": certificate}
        this.httpService.getimage(body)
        .subscribe((response)=>
        {
        if(response.status == 200)
          {
          this.display=response._body;
         
          
          this.showLoader= false;
          }
        
        })
      }
  }


  photo()
  {
    return this.sanitizer.bypassSecurityTrustUrl('data:image/jpg;base64,'+this.display);
   }

  openNav()
  {

    document.getElementById("myNav").style.width = "100%"
  }

  closeNav()
  {
    document.getElementById("myNav").style.width = "0%";
    this.showLoader=true;
  }

}
