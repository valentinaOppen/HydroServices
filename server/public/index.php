<?php
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;
use slim\slim\Slim\Http\UploadedFile;

require '../vendor/autoload.php';

require '../src/config/db.php';

$app = new \Slim\App;
// $config['displayErrorDetails'] = true;
// $config['addContentLengthHeader'] = false;
// $app = new \Slim\App(["settings" => $config]);

require '../src/routes/services.php';
require '../src/routes/clients.php';
require '../src/routes/achievements.php';
require '../src/routes/news.php';
// require 'auth.php';
// require 'database.php';
// require 'islogged.php';
// require 'logout.php';

$app->run();

// $app->options('/{routes:.+}', function ($request, $response, $args) {
//     return $response;
// });

// $app->map(['GET', 'POST'], '/ROUTE', function($req, $res, $args) {
// });

// $app->add(function ($req, $res, $next) {
//     $response = $next($req, $res);
//     return $response
//             ->withHeader('Access-Control-Allow-Origin', '*')
//             ->withHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization')
//             ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
// });

// $app->map(['GET', 'POST', 'PUT', 'DELETE', 'PATCH'], '/{routes:.+}', function($req, $res) {
//     $handler = $this->notFoundHandler; // handle using the default Slim page not found handler
//     return $handler($req, $res);
// });

// $app->add(function($request, $response, $next) {
//     $route = $request->getAttribute("route");

//     $methods = [];

//     if (!empty($route)) {
//         $pattern = $route->getPattern();

//         foreach ($this->router->getRoutes() as $route) {
//             if ($pattern === $route->getPattern()) {
//                 $methods = array_merge_recursive($methods, $route->getMethods());
//             }
//         }
//         //Methods holds all of the HTTP Verbs that a particular route handles.
//     } else {
//         $methods[] = $request->getMethod();
//     }

//     $response = $next($request, $response);


//     return $response->withHeader("Access-Control-Allow-Methods", implode(",", $methods));
// });

// $app->get("/api/{id}", function($request, $response, $arguments) {
// });

// $app->post("/api/{id}", function($request, $response, $arguments) {
// });

// $app->map(["DELETE", "PATCH"], "/api/{id}", function($request, $response, $arguments) {
// });

