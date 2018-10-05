import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  counselorFlag;
  constructor() { 

    this.counselorFlag = false;
  }

  ngOnInit() {

  	$('.edit').hide();
  	$('.update-btn').hide();
    
  	$('.edit-btn').click(function(){
  		$('.edit').show();
  		$('.detail-wrapper').hide()
  		$('.edit-btn').hide();
  		$('.update-btn').show();
  	});

  	$('.update-btn').click(function(){
  		$('.edit').hide();
  		$('.detail-wrapper').show()
  		$('.edit-btn').show();
  		$('.update-btn').hide();
  	});

    //--------------show Counselors
    
    // $('#findCounselorBtn').click(function(){
    //   $('#counselorResults').show();
    // });
  	

  }

  enableCouncelor(){
    this.counselorFlag = true;
  }

}
