<?php
define('BASEPATH', true);
require 'application/config/database.php';
require 'Slim/Slim.php';
require 'medoo.min.php';
\Slim\Slim::registerAutoloader();
$app = new \Slim\Slim();
$medoo = new medoo(array(
    'database_type' => 'mysql',
    'database_name' => $db['default']['database'],
    'server' => $db['default']['hostname'],
    'username' => $db['default']['username'],
    'password' => $db['default']['password'],
    'charset' => 'utf8'
));

$app->get('/list', function () use ($app, $medoo) {
    $page = $app->request->get('page') ? $app->request->get('page') : 1;
    $limit = $app->request->get('limit') ? $app->request->get('limit') : 20;
    $key = $app->request->get('key');
    $area = $app->request->get('area');
    $type = $app->request->get('type');
    $time_after = $app->request->get('time_after') ? $app->request->get('time_after') : '1970-1-1';
    $time_before = $app->request->get('time_before') ? $app->request->get('time_before') : '2050-1-1';

    $filter = array();
    if($key) $filter['addressee']=$key;
    if($area) $filter['area']=$area;
    if($type) $filter['type']=$type;
    $filter['time[<>]']=array($time_after, $time_before);
    $filter['LIMIT'] = array(($page-1)*$limit, $limit);

    $datas = $medoo->select('post_info', '*', $filter);
    echo json_encode($datas);
});

$app->run();
