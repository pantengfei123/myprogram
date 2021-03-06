module.exports={
       devServer:{
           proxy:{
               "/login":{
                   target:"http://www.ysqorz.top:8888/api/private/v1/",
                   changeOrigin:true,
                   ws:true,
                   pathRewrite:{
                       "^/login":"/login"
                   }
               },
               "/v1":{
                   target:"http://www.ysqorz.top:8888/api/private/v1/",
                   changeOrigin:true,
                   ws:true,
                   pathRewrite:{
                       "^/v1":""
                   }
               }
           }
       }
}
