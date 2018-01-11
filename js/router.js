 function Router() {
        this.routes = {};
        this.currentUrl = '';
    }   
        // 路由地址
        Router.prototype.route = function(path, callback) {
            this.routes[path] = callback || function(){};
        };
        // 刷新
        Router.prototype.refresh = function() {
            this.currentUrl ='/';
            this.routes[this.currentUrl]();
        };

        // 初始化
        Router.prototype.init = function() {
            window.addEventListener('load', this.refresh.bind(this), false);
            window.addEventListener('hashchange', this.refresh.bind(this), false);
        }
        window.Router = new Router();
        window.Router.init();

     

        Router.route('/', function() {
            clearFull()
             renderView();
          });
        
        
        Router.route('/today', function() {
            clearFull()
            renderView();
        });
        Router.route('/todo', function() {
            clearFull()
            renderView();
        });