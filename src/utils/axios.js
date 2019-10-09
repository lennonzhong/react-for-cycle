import Jsonp from 'jsonp';
import axios from 'axios';
export default class Axios{
    static jsonp(options) {
        return new Promise((resolve, reject) => {
            Jsonp(options.url, (err,data)=>{
                if(err){
                    reject(err);
                }

                if(data.status=='success'){
                    resolve(data);
                }else{
                    reject(err);
                }
            })
        })
    }
}