new Vue({
  el:'#app',
  data: {
    title: 'Hello From VueJS!',
    link: 'http://google.com',
    finishedLink: '<a href="http://reddit.com">Go to reddit</a>',
    attack: '<script type="text/javascript">alert("hello");</script>'
  }
});
