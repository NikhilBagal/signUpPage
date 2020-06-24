import { Component, OnInit,AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-form-sec',
  templateUrl: './form-sec.component.html',
  styleUrls: ['./form-sec.component.scss']
})
export class FormSecComponent implements OnInit {
    @ViewChild('passerror',{static: false}) span:ElementRef;
    
    constructor() { }

    ngOnInit() {

    }
    ngAfterViewInit(){
        this.span.nativeElement.style.display = "block"
    }
    //function to check for input errors
    check(event:any){
        const i = event.target;
        if(i.value !== ''){
            var element = document.querySelector("#"+i.id+'-error');
            element.classList.remove('active');
            switch(i.id){
                case 'name-input':
                    var reg= /^[a-z]+$/gi;
                    if(reg.test(i.value)){
                        var ele = document.querySelector("#"+i.id+'-format-error');
                        ele.classList.remove('active');
                    }else {
                        var ele = document.querySelector("#"+i.id+'-format-error');
                        ele.classList.add('active');
                    }
                    break;
                case 'Last-name-input':
                    var reg= /^[a-z]+$/gi;
                    if(reg.test(i.value)){
                        var ele = document.querySelector("#"+i.id+'-format-error');
                        ele.classList.remove('active');
                    }else {
                        var ele = document.querySelector("#"+i.id+'-format-error');
                        ele.classList.add('active');
                    }
                    break;
                case 'pass-input':
                    var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
                    var mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
                    if(strongRegex.test(i.value)){
                        this.span.nativeElement.style.color = "green"
                    }else if(mediumRegex.test(i.value)){
                        this.span.nativeElement.style.color = "orange"
                    }else {
                        this.span.nativeElement.style.color = "red"
                    }
                    break;
                }
        }else {
            var ele = document.querySelector("#"+i.id+'-error');
            ele.classList.add('active');
            var element = document.querySelector("#"+i.id+'-format-error');
            element.classList.remove('active');
        }
    }

}
