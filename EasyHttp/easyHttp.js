function easyHttp(){
  this.http = new XMLHttpRequest();
}
//Make an http GET Request
easyHttp.prototype.get = function(url, callback){
  this.http.open('GET',url,true)

  let self =this;
  this.http.onload =function(){
    if(self.http.status===200){
      callback(null,self.http.responseText)
      // console.log(self.http.responseText)
    }
    else{
      callback('Error: '+ self.http.status)
    }
  }
  this.http.send()
}

//Make an http POST Request
easyHttp.prototype.post = function(url, data, callback){
  this.http.open('POST', url, true)
  this.http.setRequestHeader('Content-type','application/json')

  let self =this;
  this.http.onload =function(){
    
      callback(null,self.http.responseText)
  }

  this.http.send(JSON.stringify(data))
}


//Make an http PUT Request
//Make an http POST Request
easyHttp.prototype.put = function(url, data, callback){
  this.http.open('PUT', url, true)
  this.http.setRequestHeader('Content-type','application/json')

  let self =this;
  this.http.onload =function(){
    
      callback(null,self.http.responseText)
  }

  this.http.send(JSON.stringify(data))
}


//Make an http DELETE Request

easyHttp.prototype.delete = function(url, callback){
  this.http.open('DELETE',url,true)

  let self =this;
  this.http.onload =function(){
    if(self.http.status===200){
      callback(null,'Post deleted')
      // console.log(self.http.responseText)
    }
    else{
      callback('Error: '+ self.http.status)
    }
  }
  this.http.send()
}