/**
 * Created by manzurulhaque on 05/08/2017.
 */
import { Injectable } from '@angular/core';
@Injectable()
export class MyFakeService{
    getMessage(){
        return 'fake service';
    }
}
