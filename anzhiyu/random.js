var posts=["2024/07/08/hello-world/","2024/07/08/chenw/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };